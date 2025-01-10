<script>
	import { newGame } from './typing.js';
	import { onMount } from 'svelte';

	onMount(() => {
        newGame();
    });
</script>