import { query } from '$app/server';
import * as v from 'valibot';

// query.batch: allows batching multiple calls to the same query into a single request
export const getWeather = query.batch(v.string(), async (cities) => {
	const temperatures = cities.map((city) => ({ city, temp: (Math.random() * 30 + 5).toFixed(1) }));

	return (city) => temperatures.find((t) => t.city === city)?.temp ?? 'N/A';
});
