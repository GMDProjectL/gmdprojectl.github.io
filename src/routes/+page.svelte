<script lang="ts">
    import Section from "$lib/components/Section.svelte";
    import Button from "$lib/components/Button.svelte";
    import { getString } from "$lib/lang";
    import { language } from "$lib/stores/lanugage";
</script>

<h1 class="text-center text-5xl font-bold">Project GDL</h1>
<h2 class="text-center text-2xl mt-10 opacity-70 px-10">
    { getString($language, "subtitle") }
</h2>

<div class="flex flex-col items-center mt-10">
    <div class="flex flex-col items-center mt-20 max-w-2xl w-full">
        <Button icon="ic:baseline-telegram" label="telegram" url="https://t.me/projectgdliso" />
        <div class="mt-10"></div>
        <Button icon="mdi:github" label="source-code" url="https://github.com/GMDProjectL" secondary />
    </div>
</div>

<Section screenshot="about-system" description="about-system-kde-plasma" />
<Section screenshot="in-game" description="in-game-description" />
<Section screenshot="geode-installer" description="geode-installer-description" />
