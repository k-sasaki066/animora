import type { ComponentType } from "react";
import ParticlesHeart from "./examples/favorites/ParticlesHeart";
import BubblyHeart from "./examples/favorites/BubblyHeart";

export const actionButtonMap: Record<string, ComponentType> = {
    particles: ParticlesHeart,
    bubbly: BubblyHeart,
};