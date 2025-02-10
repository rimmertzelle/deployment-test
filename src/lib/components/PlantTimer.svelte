<script>
    import { onMount } from "svelte";
    import { plantTimer } from "$lib/stores/timer";

    let timeLeft;

    onMount(() => {
        const interval = setInterval(() => {
            plantTimer.update(calculateTimeLeft => {
                const now = new Date();
                const nextMidnight = new Date();
                nextMidnight.setHours(24, 0, 0, 0);
                const difference = Number(nextMidnight) - Number(now);

                return {
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<div>
    {#if $plantTimer}
        <p>New plant in: {$plantTimer.hours}h {$plantTimer.minutes}m {$plantTimer.seconds}s</p>
    {/if}
</div>
