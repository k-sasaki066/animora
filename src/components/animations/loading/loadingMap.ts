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

import DefaultLoader from "./examples/spinners/DefaultLoader";
import DualLoader from "./examples/spinners/DualLoader";
import FadeLoader from "./examples/spinners/FadeLoader";
import RotateScaleLoader from "./examples/spinners/RotateScaleLoader";
import SlicesLoader from "./examples/spinners/SlicesLoader";
import ClockLoader from "./examples/spinners/ClockLoader";
import WavesLoader from "./examples/spinners/WavesLoader";
import SquareLoader from "./examples/spinners/SquareLoader";
import EaseSpinLoader from "./examples/spinners/EaseSpinLoader";

import TextLoader from "./examples/loading-texts/TextLoader";
import SlideTextLoader from "./examples/loading-texts/SlideTextLoader";

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

    // spinner
    default: DefaultLoader,
    dual: DualLoader,
    fade: FadeLoader,
    rotateScale: RotateScaleLoader,
    slices: SlicesLoader,
    clock: ClockLoader,
    waves: WavesLoader,
    square: SquareLoader,
    easeSpin: EaseSpinLoader,

    // loading-texts
    text: TextLoader,
    slideText: SlideTextLoader,
};