<script>
	import Weather from './Weather.svelte';
</script>

<h2>City weather</h2>

{#each ['New York', 'London', 'Tokyo', 'Delhi'] as city}
	<Weather {city} />
{/each}
