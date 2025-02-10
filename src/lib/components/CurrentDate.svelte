<script>
    import { onMount } from "svelte";

    /**
     * @type {string}
     */
    let currentDate;

    onMount(() => {
        const now = new Date();
        currentDate = now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    });
</script>

<div class="font-lohit text-xl">
    {currentDate}
</div>
