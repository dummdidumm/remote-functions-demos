<script lang="ts">
	import { delay } from './delay';
	import { resource } from './resource.svelte.js';

	let request = $state(0);
	let result = resource(() => delay(request, error));

	// svelte-ignore non_reactive_update
	let error = false;
</script>

<button onclick={() => request++}>fire request</button>
<button onclick={() => (error = !error)}>toggle error on next request</button>

{#if result.loading && (result.current === undefined || result.error)}
	<p>Loading ...</p>
{:else if result.error}
	<p style="color: red">Error</p>
	<button onclick={() => request++}>retry</button>
{:else}
	<p class={{ loading: result.loading }}>Result: {result.current}</p>
{/if}

<style>
	.loading {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
