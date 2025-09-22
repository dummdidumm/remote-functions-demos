<script lang="ts">
	import { delay } from './delay';

	let request1 = $state(0);
	let request2 = $state(0);

	// svelte-ignore non_reactive_update
	let error = false;
</script>

<button onclick={() => request1++}>fire request 1</button>
<button onclick={() => request2++}>fire request 2</button>
<button onclick={() => (error = !error)}>toggle error on next request</button>

<svelte:boundary>
	{@const result = await delay(request2, error)}

	<div class={{ loading: $effect.pending() }}>
		<p>{await delay(request1, error)}</p>
		<p>{result}</p>
		<p>{await delay('Inner ' + result, error)}</p>
	</div>

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
