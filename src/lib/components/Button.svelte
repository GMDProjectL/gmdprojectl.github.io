<script lang="ts">
    import Icon from "@iconify/svelte";
    import { getString } from "$lib/lang";
    import { language } from "$lib/stores/lanugage";

    export let icon: string;
    export let label: string;
    export let secondary: boolean = false;
    export let url: string = "";
</script>

<div class="px-5 w-full md:px-0">
<a href={url} 
    target="_blank" 
    class={
        "p-5 w-full flex items-center justify-center rounded-lg text-lg font-bold transition-colors"
        + (!secondary ? " bg-blue-500 text-white hover:bg-blue-600" : " bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200")
        }>
        <Icon icon={icon} height="30" class="inline-block mr-2" />
        { getString($language, label) }
</a>
</div>