<script lang="ts">
	import { request, toggleError } from './query.remote';

	async function slow() {
		const result = await request();
		await new Promise((r) => setTimeout(r, 1000));
		return result;
	}
</script>

<button onclick={() => request().refresh()}>refresh query</button>
<button onclick={() => toggleError()}>toggle error on next request</button>

<svelte:boundary>
	<p>Slow query: {await slow()}</p>
	<p class={{ loading: $effect.pending() }}>Blocking: {await request()}</p>
	<p>Nonblocking: {request().current}</p>

	{#snippet pending()}
		<p>Loading...</p>
	{/snippet}

	{#snippet failed(error, retry)}
		<p style="color: red">Error: {error instanceof Error ? error.message : 'Unknown'}</p>
		<button onclick={retry}>retry</button>
	{/snippet}
</svelte:boundary>

<style>
	.loading {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
