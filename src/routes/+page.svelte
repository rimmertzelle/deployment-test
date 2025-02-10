<script>
    import "../app.css";
    import Plant from "$lib/components/plants.svelte";
    import CurrentDate from "$lib/components/CurrentDate.svelte";
    import PlantTimer from "$lib/components/PlantTimer.svelte";
</script>

<section class="flex flex-col items-center mb-4">
    <div class="text-6xl font-bold mb-4 text-center">Plant of the Day</div>
</section>

<section class="flex justify-center mb-6">
    <CurrentDate />
</section>

<section class="flex flex-col items-center mb-6">
    <div class="text-xl font-semibold mb-2">Time till new plant:</div>
    <PlantTimer />
</section>

<section class="mb-32">
    <Plant />
</section>
