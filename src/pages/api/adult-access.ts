import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ cookies, url, redirect }) => {
	const returnTo = url.searchParams.get('returnTo') || '/';

	cookies.set('mvp_adult_access', 'granted', {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: import.meta.env.PROD,
		maxAge: 60 * 60 * 24 * 30
	});

	return redirect(returnTo);
};
