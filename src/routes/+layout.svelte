<script>
    import "../app.css";
    import MenuButton from "$lib/assets/Menu.png";
    import PlantNav from "$lib/assets/plant.png";
    import History from "$lib/assets/Scroll.png";

    import Menu from "../routes/menu/+page.svelte";

    let showMenu = false;
</script>

<div class="flex flex-col min-h-screen relative">
    <!-- Header with Menu -->
    <header class="flex flex-row-reverse p-4">
        <!-- Menu button -->
        <button class="menu-button p-2" on:click={() => (showMenu = true)}>
            <img src={MenuButton} alt="Menu button" class="h-6 w-6" />
        </button>
    </header>

    {#if showMenu}
        <Menu on:close={() => (showMenu = false)} />
    {/if}

    <!-- Main content -->
    <main class="flex-grow p-4">
        <slot />
    </main>

    <!-- Navbar -->
    <nav class="bg-ground-brown py-4 fixed bottom-0 w-full flex justify-around">
        <a href="/" class="">
            <img src={PlantNav} alt="plant icon" />
        </a>
        <a href="/list" class="">
            <img src={History} alt="history icon" />
        </a>
    </nav>
</div>
