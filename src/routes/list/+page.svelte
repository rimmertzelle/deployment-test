<script>
    import List from "$lib/components/PlantList.svelte";

    let showRandomPlant = false;

    function toggleRandomPlant() {
        showRandomPlant = !showRandomPlant;
    }
</script>

<header class="flex justify-center text-6xl text-center mb-6">
    <div>List of plants</div>
</header>

<section class="mb-32">
    <List />
</section>
