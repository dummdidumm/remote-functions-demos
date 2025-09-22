<script>
	import { getWeather } from './weather.remote';

	let { city } = $props();
</script>

<p>Weather in {city}: {await getWeather(city)}</p>
