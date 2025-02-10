<script lang="ts">
    import { onMount } from "svelte";
    import List from "$lib/components/List.svelte";

    interface Plant {
        common_name: string;
        scientific_name: string[];
        indoor: boolean | null;
        family: string | null;
        description: string | null;
        default_image: {
            thumbnail: string | null;
        };
    }

    let indoorPlants: Plant[] = [];
    let outdoorPlants: Plant[] = [];
    let originalIndoorPlants: Plant[] = [];
    let originalOutdoorPlants: Plant[] = [];
    let loading: boolean = true;
    let error: string | null = null;

    onMount(async () => {
        try {
            const [indoorResponse, outdoorResponse] = await Promise.all([
                fetch("https://perenual.com/api/species-list?key=sk-L9WP675b80ec7662a7987&indoor=1"),
                fetch("https://perenual.com/api/species-list?key=sk-L9WP675b80ec7662a7987")
            ]);

            const [indoorData, outdoorData] = await Promise.all([
                indoorResponse.json(),
                outdoorResponse.json(),
            ]);

            indoorPlants = indoorData.data;
            outdoorPlants = outdoorData.data.filter((plant: Plant) => plant.indoor !== true);

            // Save original order
            originalIndoorPlants = [...indoorPlants];
            originalOutdoorPlants = [...outdoorPlants];
        } catch (err) {
            error = "Failed to fetch plant data.";
            console.error(err);
        } finally {
            loading = false;
        }
    });

    function sortPlantsByName() {
        indoorPlants = [...indoorPlants].sort((a, b) => a.common_name.localeCompare(b.common_name));
        outdoorPlants = [...outdoorPlants].sort((a, b) => a.common_name.localeCompare(b.common_name));
    }

    function resetOrder() {
        indoorPlants = [...originalIndoorPlants];
        outdoorPlants = [...originalOutdoorPlants];
    }
</script>

<div class="container mx-auto p-4">
    {#if loading}
        <p class="text-center">Loading...</p>
    {:else if error}
        <p class="text-center text-red-500">{error}</p>
    {:else}
        <div class="flex gap-4 mb-4">
            <button on:click={sortPlantsByName} class="px-4 py-2 bg-ground-brown text-white rounded">Sort Alphabetically</button>
            <button on:click={resetOrder} class="px-4 py-2 bg-gray-500 text-white rounded">Reset Order</button>
        </div>

        <h2 class="text-xl font-bold mb-2">Indoor Plants</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each indoorPlants as plant}
                <List {plant} />
            {/each}
        </div>

        <h2 class="text-xl font-bold mt-8 mb-2">Outdoor Plants</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each outdoorPlants as plant}
                <List {plant} />
            {/each}
        </div>
    {/if}
</div>
