<script>
	import { delay } from './delay';

	let request1 = $state(0);
	let request2 = $state(0);

	// svelte-ignore non_reactive_update
	let error = false;
</script>

<button onclick={() => request1++}>fire request 1</button>
<button onclick={() => request2++}>fire request 2</button>
<button onclick={() => (error = !error)}>toggle error on next request</button>

{#await delay(request1, error)}
	<p>Request 1 is loading...</p>
{:then result}
	<p>Request 1 result: {result}</p>
{:catch error}
	<p style="color: red">Request 1 error: {error.message}</p>
{/await}

{#await delay(request2, error)}
	<p>Request 2 is loading...</p>
{:then result}
	<p>Request 2 result: {result}</p>

	{#await delay('Inner ' + result, error)}
		<p>Inner request is loading...</p>
	{:then result}
		<p>Inner request result: {result}</p>
	{:catch error}
		<p style="color: red">Inner request error: {error.message}</p>
	{/await}
{:catch error}
	<p style="color: red">Request 2 error: {error.message}</p>
{/await}
