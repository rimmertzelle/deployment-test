<script>
  import Default from "$lib/assets/default-plant.jpg";
  export let plant;
</script>

<div class="bg-light-green p-4 rounded-md shadow-md flex items-center transition transform hover:scale-105">
  <img
    src={plant.default_image?.thumbnail || Default} 
    alt={plant.common_name || "Unknown Plant"}
    class="w-16 h-16 object-cover rounded mr-4"
  />
  <div>
    <h2 class="font-bold text-lg">{plant.common_name || "Unknown Name"}</h2>
    <p class="text-sm italic">
      {plant.scientific_name?.[0] || "Unknown Scientific Name"}
    </p>
    <p class="text-sm mt-2 text-green-600 hover:text-green-800">
      <strong>Fun Fact:</strong> {plant.description || "No fun fact available."}
    </p>
  </div>
</div>
