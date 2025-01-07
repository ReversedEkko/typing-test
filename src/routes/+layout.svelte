<script lang="ts">
	import '../app.postcss';
</script>

<div class="h-screen w-screen flex justify-center items-center">
	<div class="w-5/6 flex flex-col justify-center items-center h-5/6">
		<h1 class="h1 text-center">Echo Type</h1>
		<div class="flex-grow flex justify-center items-center card w-5/6 mt-6">
			<slot />
		</div>
	</div>
</div>
