import type { ComponentType } from "react";
import DotsLoader from "./examples/loaders/DotsLoader";
import PulseLoader from "./examples/loaders/PulseLoader";
import BounceLoader from "./examples/loaders/BounceLoader";
import CloudLoader from "./examples/loaders/CloudLoader";
import BallsScaleLoader from "./examples/loaders/BallsScaleLoader";
import CubeMetronomeLoader from "./examples/loaders/CubeMetronomeLoader";
import BouncyLoader from "./examples/loaders/BouncyLoader";
import GrowBarsLoader from "./examples/loaders/GrowBarsLoader";
import GridBuildupLoader from "./examples/loaders/GridBuildupLoader";
import BarProgressLoader from "./examples/loaders/BarProgressLoader";

export const loadingMap: Record<string, ComponentType> = {
    dots: DotsLoader,
    pulse: PulseLoader,
    bounce: BounceLoader,
    cloud: CloudLoader,
    ballsScale: BallsScaleLoader,
    cubeMetronome: CubeMetronomeLoader,
    bouncy: BouncyLoader,
    growBars: GrowBarsLoader,
    gridBuildup: GridBuildupLoader,
    barProgress: BarProgressLoader,
};