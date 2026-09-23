import type { APIRoute } from 'astro';
import { grantAdultAccess, safeReturnPath } from '../../lib/access';

export const prerender = false;

export const GET: APIRoute = async ({ cookies, url, redirect }) => {
	grantAdultAccess(cookies);
	return redirect(safeReturnPath(url.searchParams.get('returnTo')));
};
