import type { ComponentType } from "react";
import DotsLoader from "./examples/loaders/DotsLoader";
import PulseLoader from "./examples/loaders/PulseLoader";
import BounceLoader from "./examples/loaders/BounceLoader";

export const loadingMap: Record<string, ComponentType> = {
    dots: DotsLoader,
    pulse: PulseLoader,
    bounce: BounceLoader,
};