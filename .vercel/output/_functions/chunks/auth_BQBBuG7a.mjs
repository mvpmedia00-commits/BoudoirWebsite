import { timingSafeEqual } from 'node:crypto';

const ADULT_ACCESS_COOKIE = "mvp_adult_access";
const ADMIN_SESSION_COOKIE = "mvp_admin_session";
const VAULT_SESSION_COOKIE = "mvp_vault_session";
const isProd = true;
const createExpiredCookie = (cookies, name) => {
  cookies.set(name, "", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: isProd,
    maxAge: 0
  });
};
const grantSessionCookie = (cookies, name, maxAge) => {
  cookies.set(name, "granted", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: isProd,
    maxAge
  });
};
const verifySecret = (value, expected) => {
  const actual = value.trim();
  const required = ("").trim();
  if (!actual || !required) return false;
  const actualBuffer = Buffer.from(actual, "utf8");
  const expectedBuffer = Buffer.from(required, "utf8");
  if (actualBuffer.length !== expectedBuffer.length) return false;
  return timingSafeEqual(actualBuffer, expectedBuffer);
};
const normalizeReturnTo = (value, fallback = "/") => {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  if (!trimmed.startsWith("/") || trimmed.startsWith("//")) return fallback;
  return trimmed;
};
const hasAdultAccess = (cookies) => cookies.get(ADULT_ACCESS_COOKIE)?.value === "granted";
const grantAdultAccess = (cookies) => {
  cookies.set(ADULT_ACCESS_COOKIE, "granted", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: isProd,
    maxAge: 60 * 60 * 24 * 30
  });
};
const hasAdminSession = (cookies) => cookies.get(ADMIN_SESSION_COOKIE)?.value === "granted";
const verifyAdminToken = (value) => verifySecret(value);
const isAdminConfigured = () => Boolean(("").trim());
const grantAdminSession = (cookies) => {
  grantSessionCookie(cookies, ADMIN_SESSION_COOKIE, 60 * 60 * 8);
};
const clearAdminSession = (cookies) => {
  createExpiredCookie(cookies, ADMIN_SESSION_COOKIE);
};
const hasVaultSession = (cookies) => cookies.get(VAULT_SESSION_COOKIE)?.value === "granted";
const verifyVaultAccessCode = (value) => verifySecret(value);
const isVaultConfigured = () => Boolean(("").trim());
const grantVaultSession = (cookies) => {
  grantSessionCookie(cookies, VAULT_SESSION_COOKIE, 60 * 60 * 24);
};
const clearVaultSession = (cookies) => {
  createExpiredCookie(cookies, VAULT_SESSION_COOKIE);
};

export { grantAdultAccess as a, clearVaultSession as b, clearAdminSession as c, isVaultConfigured as d, verifyVaultAccessCode as e, grantVaultSession as f, grantAdminSession as g, hasAdminSession as h, isAdminConfigured as i, hasAdultAccess as j, hasVaultSession as k, normalizeReturnTo as n, verifyAdminToken as v };
