<script lang="ts">
    import { getString } from "$lib/lang";
    import { language } from "$lib/stores/lanugage";
    import Screenshot from "./Screenshot.svelte";

    export let screenshot: string;
    export let description: string;
</script>

<div class="flex flex-col items-center mt-20">
    <Screenshot
        url={`/screenshots/${screenshot}.png`}
        caption={screenshot}
    />

    <p class="px-10 max-w-4xl text-xl mt-5">{ getString($language, description) }</p>
</div>