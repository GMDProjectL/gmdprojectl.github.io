<script lang="ts">
	import '../app.css';
	import { setLanguage } from '$lib/stores/lanugage';
	import { onMount } from 'svelte';

	onMount(() => {
		const lang = navigator.language.startsWith('ru') ? 'ru' : 'en';
		setLanguage(lang);
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>Project GDL</title>
</svelte:head>

<div class="inline-block w-full h-full pb-10">
	<div class="flex flex-col h-full mt-20">
		<div class="flex-1">
			{@render children()}
		</div>
	</div>
</div>
