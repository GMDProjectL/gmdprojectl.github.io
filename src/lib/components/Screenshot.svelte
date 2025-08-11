<script lang="ts">
    import { getString } from "$lib/lang";
    import { language } from "$lib/stores/lanugage";
    import { Lightbox } from "svelte-lightbox";

    export let url: string;
    export let caption: string;
    export let noStyle: boolean = false;
</script>

<div class="w-full max-w-2xl flex flex-col items-center justify-center p-4 gap-5">
    <Lightbox enableClickToClose showCloseButton={false} transitionDuration={200}>
    <img src={url} alt={getString($language, caption)} 
        class={"w-full h-auto" + (noStyle ? "" : " rounded-lg shadow-lg")} />
    </Lightbox>
    <p class="opacity-75">{getString($language, caption)}</p>
</div>