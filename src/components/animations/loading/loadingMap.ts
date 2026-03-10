import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type LoaderComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
>;

export const loadingMap: Record<string, LoaderComponent> = {
    dots: lazy(() => import("./examples/loaders/DotsLoader")),
    waveDots: lazy(() => import("./examples/loaders/WaveDotsLoader")),
    pulse: lazy(() => import("./examples/loaders/PulseLoader")),
    bounce: lazy(() => import("./examples/loaders/BounceLoader")),
    cloud: lazy(() => import("./examples/loaders/CloudLoader")),
    ballsScale: lazy(() => import("./examples/loaders/BallsScaleLoader")),
    cubeMetronome: lazy(() => import("./examples/loaders/CubeMetronomeLoader")),
    newtonCradle: lazy(() => import("./examples/loaders/NewtonCradleLoader")),
    marchingDots: lazy(() => import("./examples/loaders/MarchingDotsLoader")),
    cornerDots: lazy(() => import("./examples/loaders/CornerDotsLoader")),
    hoppingDots: lazy(() => import("./examples/loaders/HoppingDotsLoader")),
    hopperBars: lazy(() => import("./examples/loaders/HopperBarsLoader")),
    bouncy: lazy(() => import("./examples/loaders/BouncyLoader")),
    growBars: lazy(() => import("./examples/loaders/GrowBarsLoader")),
    gridBuildup: lazy(() => import("./examples/loaders/GridBuildupLoader")),
    barProgress: lazy(() => import("./examples/loaders/BarProgressLoader")),
    stepBar: lazy(() => import("./examples/loaders/StepBarLoader")),
    stepCircle: lazy(() => import("./examples/loaders/StepCircleLoader")),
    rhombusGradient: lazy(() => import("./examples/loaders/RhombusGradientLoader")),
    stripeSlide: lazy(() => import("./examples/loaders/StripeSlideLoader")),

    // spinner
    default: lazy(() => import("./examples/spinners/DefaultLoader")),
    starRotate: lazy(() => import("./examples/spinners/StarRotateLoader")),
    fade: lazy(() => import("./examples/spinners/FadeLoader")),
    rotateScale: lazy(() => import("./examples/spinners/RotateScaleLoader")),
    slices: lazy(() => import("./examples/spinners/SlicesLoader")),
    clock: lazy(() => import("./examples/spinners/ClockLoader")),
    waves: lazy(() => import("./examples/spinners/WavesLoader")),
    square: lazy(() => import("./examples/spinners/SquareLoader")),
    easeSpin: lazy(() => import("./examples/spinners/EaseSpinLoader")),
    hourglass: lazy(() => import("./examples/spinners/HourglassLoader")),
    orbitSpin: lazy(() => import("./examples/spinners/orbit-spin/OrbitSpinLoader")),
    stepRotate: lazy(() => import("./examples/spinners/StepRotateLoader")),
    arrowRotate: lazy(() => import("./examples/spinners/ArrowRotateLoader")),
    quadSpin: lazy(() => import("./examples/spinners/QuadSpinLoader")),
    scaleDotsSpin: lazy(() => import("./examples/spinners/ScaleDotsSpinLoader")),
    weaveCircle: lazy(() => import("./examples/spinners/WeaveCircleLoader")),

    // loading-texts
    text: lazy(() => import("./examples/loading-texts/TextLoader")),
    slideText: lazy(() => import("./examples/loading-texts/SlideTextLoader")),
    barcode: lazy(() => import("./examples/loading-texts/BarcodeLoader")),
    waveFill: lazy(() => import("./examples/loading-texts/WaveFillLoader")),
    shutter: lazy(() => import("./examples/loading-texts/ShutterLoader")),
};