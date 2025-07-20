<script lang="ts">
	import Screenshot from "$lib/components/Screenshot.svelte";
    import { getString } from "$lib/lang";
    import { language } from "$lib/stores/lanugage";
</script>

<h1 class="text-center text-5xl font-bold">Project GDL</h1>
<h2 class="text-center text-2xl mt-10 opacity-70 px-10">
    { getString($language, "subtitle") }
</h2>

<div class="flex flex-col items-center mt-20">
    <Screenshot
        url="/screenshots/about-system.png"
        caption="about-system"
    />

    <p class="px-10 max-w-4xl text-xl mt-5 text-justify">{ getString($language, "about-system-kde-plasma") }</p>
</div>

<div class="flex flex-col items-center mt-20">
    <Screenshot
        url="/screenshots/in-game.png"
        caption="in-game"
    />

    <p class="px-10 max-w-4xl text-xl mt-5 text-justify">{ getString($language, "in-game-description") }</p>
</div>

<div class="flex flex-col items-center mt-20">
    <Screenshot
        url="/screenshots/geode-installer.png"
        caption="geode-installer"
    />

    <p class="px-10 max-w-4xl text-xl mt-5 text-justify">{ getString($language, "geode-installer-description") }</p>
</div>