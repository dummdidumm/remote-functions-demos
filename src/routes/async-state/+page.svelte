<script>
	import AwaitBlock from './AwaitBlock.svelte';
	import Boundary from './Boundary.svelte';
	import RemoteQuery from './RemoteQuery.svelte';
	import Resource from './Resource.svelte';
</script>

<h1>Managing async loading/error state</h1>

<h2>Using the await block (not recommended)</h2>
<AwaitBlock />

<h2>Using boundaries</h2>
<Boundary />

<h2>Using Resource-pattern</h2>
<Resource />

<h2>Using Remote Queries (allows for all variants)</h2>
<RemoteQuery />
