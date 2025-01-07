<script>
	import { newGame } from './typing.js';
	import { onMount } from 'svelte';

	onMount(() => {
        newGame();
    });
</script>

<!-- Game Container -->
<div id="game" class="word-container font-mono text-3xl w-2/3 overflow-hidden">
    <div id="words"></div>
    <div id="cursor"></div>
</div>

<style>
	.word-container {
		height: 6.75rem;
	}
</style>