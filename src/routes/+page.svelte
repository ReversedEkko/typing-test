<script lang="ts">
	import Time from '../components/time.svelte';

	// 0 = time, 1 = word count, 2 = custom
	let mode = "time";

	function handleClick(x: number): void {
		switch (x) {
			case 0:
				mode = "time";
				break;
			case 1:
				mode = "count";
				break;
			case 2:
				mode = "custom";
				break;
			default:
				mode = "time";
				break;
		}

		// displayMode()
	}

	function displayMode() {
		alert(mode)
	}
</script>

<div class="flex items-center card w-5/6 h-16">
	<ul class="font-mono text-3xl w-2/3 overflow-hidden ml-6 flex gap-4">
		<button class="card w-full" on:click={() => handleClick(0)}>
			Time
		</button>
		<button class="card w-full" on:click={() => handleClick(1)}>
			Word
		</button>
		<button class="card w-full" on:click={() => handleClick(2)}>
			Custom
		</button>
	</ul>
</div>
<!-- Game Container -->
<div class="flex-grow flex justify-center items-center card w-5/6 mt-6">
	<div id="game" class="word-container font-mono text-3xl w-2/3 overflow-hidden">
		{#if mode == "time"}
			<Time/>
		{:else if mode == "count"}
			meow
		{:else if mode == "custom"}
			dick
		{/if}
		<div id="words"></div>
		<div id="cursor"></div>
	</div>
</div>

<style>
	.word-container {
		height: 6.75rem;
	}
</style>