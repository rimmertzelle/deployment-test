<script>
    import { onMount } from "svelte";
    import Plant from "$lib/components/plant.svelte";

    export let slotContent = "Loading daily plant...";

    /**
     * @type {null}
     */
    let plantData = null;
    let lastGeneratedDate = null;

    // Check if running in the browser before accessing localStorage
    if (typeof window !== "undefined") {
        lastGeneratedDate = localStorage.getItem("lastGeneratedDate") || null;
    }

    const fetchPlantData = async () => {
        try {
            const response = await fetch("https://perenual.com/api/species-list?key=sk-L9WP675b80ec7662a7987");
            const result = await response.json();
            if (result.data && result.data.length > 0) {
                plantData = result.data[Math.floor(Math.random() * result.data.length)];
                if (typeof window !== "undefined") {
                    localStorage.setItem("lastGeneratedPlant", JSON.stringify(plantData));
                    localStorage.setItem("lastGeneratedDate", new Date().toISOString());
                }
            }
        } catch (error) {
            console.error("Failed to fetch plant data:", error);
        }
    };

    onMount(async () => {
        if (typeof window === "undefined") return; // Skip if not in browser

        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const lastGenerated = lastGeneratedDate ? new Date(lastGeneratedDate) : null;

        if (!lastGenerated || lastGenerated < today) {
            await fetchPlantData();
        } else {
            // @ts-ignore
            plantData = JSON.parse(localStorage.getItem("lastGeneratedPlant"));
        }
    });
</script>

<section>
    {#if plantData}
        <Plant {plantData} />
    {:else}
        <slot>{slotContent}</slot>
    {/if} 
</section> 