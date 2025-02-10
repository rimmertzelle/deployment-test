<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    // Emit event to close the menu
    function closeMenu() {
        dispatch("close");
    }
</script>

<!-- Menu Overlay -->
<div
    class="fixed inset-0 bg-light-green flex flex-col items-center justify-center p-6 z-50"
>
    <!-- Close Button -->
    <button
        class="absolute top-4 right-4 text-3xl font-bold text-black"
        on:click={closeMenu}
    >
        &times;
    </button>

    <!-- Menu Items -->
    <nav class="space-y-10 text-center">
        <a href="/" class="text-5xl text-black block" on:click={closeMenu}>Home Page</a>
        <a href="/list" class="text-5xl text-black block" on:click={closeMenu}>List</a>
        <a href="/about" class="text-5xl text-black block" on:click={closeMenu}>About</a>
    </nav>
</div>
