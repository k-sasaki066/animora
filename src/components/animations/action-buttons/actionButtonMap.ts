import type { ComponentType } from "react";
import StandardHeart from "./examples/favorites/StandardHeart";
import ParticlesHeart from "./examples/favorites/ParticlesHeart";
import BubblyHeart from "./examples/favorites/BubblyHeart";
import RotateHeart from "./examples/favorites/RotateHeart";
import ReactionHeart from "./examples/favorites/ReactionHeart";
import CircleHeart from "./examples/favorites/CircleHeart";
import BurstCircleHeart from "./examples/favorites/burst/BurstCircleHeart";
import PawsHeart from "./examples/favorites/paws/PawsHeart";

import SplatterButton from "./examples/splatter/SplatterButton";

export const actionButtonMap: Record<string, ComponentType> = {
    particles: ParticlesHeart,
    bubbly: BubblyHeart,
    standard: StandardHeart,
    rotate: RotateHeart,
    reaction: ReactionHeart,
    circle: CircleHeart,
    burstCircle: BurstCircleHeart,
    paws: PawsHeart,

    splatter: SplatterButton,
};