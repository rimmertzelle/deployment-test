<script>
    import Blob from "$lib/assets/Vector.png";
    import Vine from "$lib/assets/vine.png";
    import Default from "$lib/assets/default-plant.jpg";
    import Bumblebee from "$lib/assets/Bumblebee.png";

    export let plantData;

    // State to toggle the visibility of the info box
    let showInfo = false;

    function toggleInfo() {
        showInfo = !showInfo;
    }
</script>

<div class="flex flex-wrap items-center justify-center gap-10 mt-5">
    <!-- Image Box -->
    <div class="relative w-80 h-80 flex items-center justify-center">
        <img
            src={Blob}
            alt="Background vector"
            class="absolute top-0 left-0 w-full h-full"
        />

        <!-- Circle Image with Content -->
        <div
            class="relative w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-300"
        >
            <img
                src={plantData.default_image?.regular_url || Default}
                alt={plantData.common_name || "Default Plant"}
                class="w-full h-full object-cover rounded-full"
            />
            <button
                class="absolute bottom-2 left-2 bg-black text-white text-sm px-2 py-1 rounded-full cursor-pointer"
                on:click={toggleInfo}
            >
                ➤ see more
            </button>
        </div>
        <img src={Vine} alt="Vine" class="absolute bottom-0 right-0 w-32" />
    </div>

    <!-- Info Box (conditionally rendered) -->
    {#if showInfo}
        <div
            class="w-80 h-60 bg-white shadow-md border border-forest-green p-4 relative"
        >
            <!-- Bee Icon (Top Right) -->
            <span class="absolute w-24 h-21 -top-4 right-0 flex items-center">
                <img src={Bumblebee} alt="Bumblebee" />
            </span>

            <!-- Plant Info -->
            <div class="space-y-2 text-gray-800">
                <div>
                    <span class="font-semibold">Common Name:</span>
                    {plantData.common_name || "Unknown Plant"}
                </div>
                <div>
                    <span class="font-semibold">Scientific Name:</span>
                    {plantData.scientific_name
                        ? plantData.scientific_name.join(", ")
                        : "Not available"}
                </div>
                {#if plantData.family}
                    <div>
                        <span class="font-semibold">Family:</span>
                        {plantData.family}
                    </div>
                {/if}
                {#if plantData.watering}
                    <div>
                        <span class="font-semibold">Watering:</span>
                        {plantData.watering}
                    </div>
                {/if}
                {#if plantData.cycle}
                    <div>
                        <span class="font-semibold">Cycle:</span>
                        {plantData.cycle}
                    </div>
                {/if}
                {#if plantData.attracts?.length}
                    <div>
                        <span class="font-semibold">Attracts:</span>
                        {plantData.attracts.join(", ")}
                    </div>
                {/if}
                {#if plantData.growth_rate}
                    <div>
                        <span class="font-semibold">Growth Rate:</span>
                        {plantData.growth_rate}
                    </div>
                {/if}
                {#if plantData.maintenance}
                    <div>
                        <span class="font-semibold">Maintenance:</span>
                        {plantData.maintenance}
                    </div>
                {/if}
                {#if plantData.hardiness?.min && plantData.hardiness?.max}
                    <div>
                        <span class="font-semibold">Hardiness Zone:</span>
                        {plantData.hardiness.min} - {plantData.hardiness.max}
                    </div>
                {/if}
                <div>
                    <span class="font-semibold">Edible:</span>
                    {plantData.edible_fruit ? "Yes" : "No"}
                </div>
                <div>
                    <span class="font-semibold">Poisonous to Humans:</span>
                    {plantData.poisonous_to_humans ? "Yes" : "No"}
                </div>
                <div>
                    <span class="font-semibold">Poisonous to Pets:</span>
                    {plantData.poisonous_to_pets ? "Yes" : "No"}
                </div>
                {#if plantData.flowers}
                    <div>
                        <span class="font-semibold">Flowering Season:</span>
                        {plantData.flowering_season || "Not specified"}
                    </div>
                {/if}
                {#if plantData.propagation?.length}
                    <div>
                        <span class="font-semibold">Propagation:</span>
                        {plantData.propagation.join(", ")}
                    </div>
                {/if}
                {#if plantData.description}
                    <div>
                        <span class="font-semibold">Description:</span>
                        {plantData.description}
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>
