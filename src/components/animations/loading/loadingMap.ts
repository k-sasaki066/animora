import type { ComponentType } from "react";
import DotsLoader from "./examples/loaders/DotsLoader";
import WaveDotsLoader from "./examples/loaders/WaveDotsLoader";
import PulseLoader from "./examples/loaders/PulseLoader";
import BounceLoader from "./examples/loaders/BounceLoader";
import CloudLoader from "./examples/loaders/CloudLoader";
import BallsScaleLoader from "./examples/loaders/BallsScaleLoader";
import CubeMetronomeLoader from "./examples/loaders/CubeMetronomeLoader";
import NewtonCradleLoader from "./examples/loaders/NewtonCradleLoader";
import MarchingDotsLoader from "./examples/loaders/MarchingDotsLoader";
import CornerDotsLoader from "./examples/loaders/CornerDotsLoader";
import HoppingDotsLoader from "./examples/loaders/HoppingDotsLoader";
import HopperBarsLoader from "./examples/loaders/HopperBarsLoader";
import BouncyLoader from "./examples/loaders/BouncyLoader";
import GrowBarsLoader from "./examples/loaders/GrowBarsLoader";
import GridBuildupLoader from "./examples/loaders/GridBuildupLoader";
import BarProgressLoader from "./examples/loaders/BarProgressLoader";
import StepBarLoader from "./examples/loaders/StepBarLoader";
import StepCircleLoader from "./examples/loaders/StepCircleLoader";
import RhombusGradientLoader from "./examples/loaders/RhombusGradientLoader";
import StripeSlideLoader from "./examples/loaders/StripeSlideLoader";

import DefaultLoader from "./examples/spinners/DefaultLoader";
import StarRotateLoader from "./examples/spinners/StarRotateLoader";
import FadeLoader from "./examples/spinners/FadeLoader";
import RotateScaleLoader from "./examples/spinners/RotateScaleLoader";
import SlicesLoader from "./examples/spinners/SlicesLoader";
import ClockLoader from "./examples/spinners/ClockLoader";
import WavesLoader from "./examples/spinners/WavesLoader";
import SquareLoader from "./examples/spinners/SquareLoader";
import EaseSpinLoader from "./examples/spinners/EaseSpinLoader";
import HourglassLoader from "./examples/spinners/HourglassLoader";
import OrbitSpinLoader from "./examples/spinners/orbit-spin/OrbitSpinLoader";
import StepRotateLoader from "./examples/spinners/StepRotateLoader";
import ArrowRotateLoader from "./examples/spinners/ArrowRotateLoader";
import QuadSpinLoader from "./examples/spinners/QuadSpinLoader";
import ScaleDotsSpinLoader from "./examples/spinners/ScaleDotsSpinLoader";

import TextLoader from "./examples/loading-texts/TextLoader";
import SlideTextLoader from "./examples/loading-texts/SlideTextLoader";
import BarcodeLoader from "./examples/loading-texts/BarcodeLoader";
import WaveFillLoader from "./examples/loading-texts/WaveFillLoader";
import ShutterLoader from "./examples/loading-texts/ShutterLoader";


export const loadingMap: Record<string, ComponentType> = {
    dots: DotsLoader,
    waveDots: WaveDotsLoader,
    pulse: PulseLoader,
    bounce: BounceLoader,
    cloud: CloudLoader,
    ballsScale: BallsScaleLoader,
    cubeMetronome: CubeMetronomeLoader,
    newtonCradle: NewtonCradleLoader,
    marchingDots: MarchingDotsLoader,
    cornerDots: CornerDotsLoader,
    hoppingDots: HoppingDotsLoader,
    hopperBars: HopperBarsLoader,
    bouncy: BouncyLoader,
    growBars: GrowBarsLoader,
    gridBuildup: GridBuildupLoader,
    barProgress: BarProgressLoader,
    stepBar: StepBarLoader,
    stepCircle: StepCircleLoader,
    rhombusGradient: RhombusGradientLoader,
    stripeSlide: StripeSlideLoader,

    // spinner
    default: DefaultLoader,
    starRotate: StarRotateLoader,
    fade: FadeLoader,
    rotateScale: RotateScaleLoader,
    slices: SlicesLoader,
    clock: ClockLoader,
    waves: WavesLoader,
    square: SquareLoader,
    easeSpin: EaseSpinLoader,
    hourglass: HourglassLoader,
    orbitSpin: OrbitSpinLoader,
    stepRotate: StepRotateLoader,
    arrowRotate: ArrowRotateLoader,
    quadSpin: QuadSpinLoader,
    scaleDotsSpin: ScaleDotsSpinLoader,

    // loading-texts
    text: TextLoader,
    slideText: SlideTextLoader,
    barcode: BarcodeLoader,
    waveFill: WaveFillLoader,
    shutter: ShutterLoader,
};