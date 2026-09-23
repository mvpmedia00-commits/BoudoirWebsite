import type { AstroCookies } from 'astro';
import { ADMIN_DASH_TOKEN, VAULT_ACCESS_CODE, getSecret } from 'astro:env/server';
import { createHash, timingSafeEqual } from 'node:crypto';

// Server-only access control for the vault and the admin lead feed.
// Secrets never reach the browser: cookies hold a hash of the secret, so
// rotating the secret in the environment revokes every issued cookie.

const VAULT_COOKIE = 'mvp_vault_access';
const ADMIN_COOKIE = 'mvp_admin_access';
const ADULT_COOKIE = 'mvp_adult_access';

const THIRTY_DAYS = 60 * 60 * 24 * 30;
const TWELVE_HOURS = 60 * 60 * 12;

const hash = (value: string) => createHash('sha256').update(value).digest('hex');

const safeEqual = (a: string, b: string) => {
	const left = Buffer.from(hash(a));
	const right = Buffer.from(hash(b));
	return timingSafeEqual(left, right);
};

const cookieOptions = (maxAge: number) => ({
	path: '/',
	httpOnly: true,
	sameSite: 'lax' as const,
	secure: import.meta.env.PROD,
	maxAge
});

const normalizeCode = (value: string) => value.trim().toLowerCase();

// VAULT_ACCESS_CODE is preferred; PUBLIC_VAULT_CODE is still read so existing
// deployments keep working. The code is only ever compared on the server.
export const getVaultCode = () => normalizeCode(VAULT_ACCESS_CODE ?? getSecret('PUBLIC_VAULT_CODE') ?? '');

const getAdminToken = () => (ADMIN_DASH_TOKEN ?? '').trim();

export const isVaultConfigured = () => getVaultCode().length > 0;

export function checkVaultCode(entered: string) {
	const expected = getVaultCode();
	return expected.length > 0 && safeEqual(normalizeCode(entered), expected);
}

export function grantVaultAccess(cookies: AstroCookies) {
	cookies.set(VAULT_COOKIE, hash(getVaultCode()), cookieOptions(THIRTY_DAYS));
}

export function hasVaultAccess(cookies: AstroCookies) {
	const code = getVaultCode();
	const value = cookies.get(VAULT_COOKIE)?.value;
	return code.length > 0 && typeof value === 'string' && safeEqual(value, hash(code));
}

export function checkAdminToken(provided: string | null | undefined) {
	const expected = getAdminToken();
	return expected.length > 0 && typeof provided === 'string' && safeEqual(provided.trim(), expected);
}

export function grantAdminAccess(cookies: AstroCookies) {
	cookies.set(ADMIN_COOKIE, hash(getAdminToken()), cookieOptions(TWELVE_HOURS));
}

export function hasAdminAccess(cookies: AstroCookies) {
	const token = getAdminToken();
	const value = cookies.get(ADMIN_COOKIE)?.value;
	return token.length > 0 && typeof value === 'string' && safeEqual(value, hash(token));
}

export function grantAdultAccess(cookies: AstroCookies) {
	cookies.set(ADULT_COOKIE, 'granted', cookieOptions(THIRTY_DAYS));
}

export function hasAdultAccess(cookies: AstroCookies) {
	return cookies.get(ADULT_COOKIE)?.value === 'granted';
}

// Only allow same-site relative paths, so redirects cannot be pointed off-site.
export function safeReturnPath(value: string | null | undefined, fallback = '/') {
	if (!value || !value.startsWith('/') || value.startsWith('//') || value.startsWith('/\\')) {
		return fallback;
	}
	return value;
}
