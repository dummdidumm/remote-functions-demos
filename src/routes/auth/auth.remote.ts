import { form, getRequestEvent, query } from '$app/server';
import { redirect } from '@sveltejs/kit';
import * as v from 'valibot';

export const authenticate = form(v.object({ phrase: v.string() }), ({ phrase }) => {
	const event = getRequestEvent();

	if (phrase === 'svelte') {
		// in a real app you'd have proper checks and session management here
		event.cookies.set('authenticated', 'true', { path: '/' });
		redirect(303, '/auth/guarded');
	} else {
		return { error: 'Wrong phrase' };
	}
});

// Variant 1: inline check
export const secretText = query(() => {
	const event = getRequestEvent();

	if (event.cookies.get('authenticated') !== 'true') {
		redirect(307, '/auth');
	}

	return 'This is super secret text!';
});

// Variant 2: reusable helper function
const checkAuthenticated = query(() => {
	const event = getRequestEvent();
	if (event.cookies.get('authenticated') !== 'true') {
		redirect(307, '/auth');
	}
});

export const secretText2 = query(() => {
	checkAuthenticated();
	return 'This is super secret text 2!';
});

// Variant 3: higher-order query function
const guardedQuery = <T>(fn: () => T) => {
	return query(() => {
		const event = getRequestEvent();
		if (event.cookies.get('authenticated') !== 'true') {
			redirect(307, '/auth');
		}

		return fn();
	});
};

export const secretText3 = guardedQuery(() => {
	return 'This is super secret text 3!';
});
