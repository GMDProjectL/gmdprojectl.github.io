<script lang="ts">
	import Screenshot from "$lib/components/Screenshot.svelte";
    import Icon from "@iconify/svelte";
    import { getString } from "$lib/lang";
    import { language } from "$lib/stores/lanugage";
</script>

<h1 class="text-center text-5xl font-bold">Project GDL</h1>
<h2 class="text-center text-2xl mt-10 opacity-70 px-10">
    { getString($language, "subtitle") }
</h2>

<div class="flex flex-col items-center mt-10">
    <div class="flex flex-col items-center mt-20 max-w-2xl w-full">
        <a href="https://t.me/projectgdliso" target="_blank"
        class="p-5 bg-blue-500 flex items-center w-full justify-center text-white rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors">
            <Icon icon="ic:baseline-telegram" height="30" class="inline-block mr-2" />
            { getString($language, "telegram") }
        </a>
        <a href="https://github.com/GMDProjectL" target="_blank"
        class="mt-5 p-5 bg-black text-white dark:bg-white flex items-center w-full justify-center dark:text-black rounded-lg text-lg font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            <Icon icon="mdi:github" height="30" class="inline-block mr-2" />
            { getString($language, "source-code") }
        </a>
    </div>
</div>

<div class="flex flex-col items-center mt-20">
    <Screenshot
        url="/screenshots/about-system.png"
        caption="about-system"
    />

    <p class="px-10 max-w-4xl text-xl mt-5">{ getString($language, "about-system-kde-plasma") }</p>
</div>

<div class="flex flex-col items-center mt-20">
    <Screenshot
        url="/screenshots/in-game.png"
        caption="in-game"
    />

    <p class="px-10 max-w-4xl text-xl mt-5">{ getString($language, "in-game-description") }</p>
</div>

<div class="flex flex-col items-center mt-20">
    <Screenshot
        url="/screenshots/geode-installer.png"
        caption="geode-installer"
    />

    <p class="px-10 max-w-4xl text-xl mt-5">{ getString($language, "geode-installer-description") }</p>
</div>