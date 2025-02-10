import { writable } from "svelte/store";

// Initialize with the remaining time until the next midnight
const calculateTimeLeft = () => {
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0);
    const difference = Number(nextMidnight) - Number(now);

    return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export const plantTimer = writable(calculateTimeLeft());
