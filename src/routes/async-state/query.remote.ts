import { command, query } from '$app/server';
import { delay } from './delay';

let error = false;

export const toggleError = command(() => {
	error = !error;
});

export const request = query(() => {
	return delay(Math.random(), error);
});
