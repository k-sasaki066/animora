import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
import type { LoaderProps } from "./loader";

type LoaderComponent = LazyExoticComponent<
    ComponentType<LoaderProps>
>;

type LoaderMeta = {
    component: LoaderComponent;
    defaultParams: LoaderProps;
};

export const loadingMap: Record<string, LoaderMeta> = {
    dots: {
        component: lazy(() => import("./examples/loaders/DotsLoader")),
        defaultParams: {
            speed: 0.6,
            size: 12,
            color: "#7c3aed",
            delayStep: 0.16,
        },
    },
    waveDots: {
        component: lazy(() => import("./examples/loaders/WaveDotsLoader")),
        defaultParams: {
            speed: 2,
            size: 12,
            color: "#67e8f9",
            delayStep: 0.2,
            scale :2.5,
        },
    },
    pulse: {
        component: lazy(() => import("./examples/loaders/PulseLoader")),
        defaultParams: {
            speed: 2,
            size: 48,
            color: "#43c6ac",
        },
    },
    bounce: {
        component: lazy(() => import("./examples/loaders/BounceLoader")),
        defaultParams: {
            speed: 1.5,
            size: 48,
            color: "#c16ffc",
            yRange: -10,
        },
    },
    cloud: {
        component: lazy(() => import("./examples/loaders/CloudLoader")),
        defaultParams: {
            speed: 2.2,
            size: 60,
            color: "#7dd3fc",
            scale : 1.06,
            yRange: -2,
        },
    },
    ballsScale: {
        component: lazy(() => import("./examples/loaders/BallsScaleLoader")),
        defaultParams: {
            speed: 1,
            size: 16,
            color: "#9810fa",
            delayStep : 0.33,
        },
    },
    cubeMetronome: {
        component: lazy(() => import("./examples/loaders/CubeMetronomeLoader")),
        defaultParams: {
            speed: 2,
            size: 14,
            color: "#ec6ead",
            xRange : 8,
        },
    },
    newtonCradle: {
        component: lazy(() => import("./examples/loaders/NewtonCradleLoader")),
        defaultParams: {
            speed: 1,
            size: 12,
            color: "#ec6ead",
        },
    },
    marchingDots: {
        component: lazy(() => import("./examples/loaders/MarchingDotsLoader")),
        defaultParams: {
            speed: 1,
            size: 12,
            color: "#77db9a",
        },
    },
    cornerDots: {
        component: lazy(() => import("./examples/loaders/CornerDotsLoader")),
        defaultParams: {
            speed: 1.2,
            size: 12,
            color: "#f498f1",
        },
    },
    hoppingDots: {
        component: lazy(() => import("./examples/loaders/HoppingDotsLoader")),
        defaultParams: {
            speed: 1.5,
            size: 12,
            color: "#7aaed1",
        },
    },
    hopperBars: {
        component: lazy(() => import("./examples/loaders/HopperBarsLoader")),
        defaultParams: {
            speed: 2,
            size: 40,
            color: "#fb7185",
        },
    },
    bouncy: {
        component: lazy(() => import("./examples/loaders/BouncyLoader")),
        defaultParams: {
            speed: 1.75,
            size: 12,
            color: "#9333ea",
        },
    },
    growBars: {
        component: lazy(() => import("./examples/loaders/GrowBarsLoader")),
        defaultParams: {
            speed: 1,
            size: 35,
            color: "#ff758c",
        },
    },
    gridBuildup: {
        component: lazy(() => import("./examples/loaders/GridBuildupLoader")),
        defaultParams: {
            speed: 2.4,
            size: 48,
            color: "#6f86d6",
        },
    },
    barProgress: {
        component: lazy(() => import("./examples/loaders/BarProgressLoader")),
        defaultParams: {
            speed: 2,
            size: 120,
            color: "#9333EA",
        },
    },
    stepBar: {
        component: lazy(() => import("./examples/loaders/StepBarLoader")),
        defaultParams: {
            speed: 0.2,
            size: 12,
            color: "#2b9a23",
            boxCount: 5,
        },
    },
    stepCircle: {
        component: lazy(() => import("./examples/loaders/StepCircleLoader")),
        defaultParams: {
            speed: 2,
            size: 48,
            color: "#f8b01c",
        },
    },
    rhombusGradient: {
        component: lazy(() => import("./examples/loaders/RhombusGradientLoader")),
        defaultParams: {
            speed: 2.5,
            size: 112,
            color: "#05df72",
        },
    },
    stripeSlide: {
        component: lazy(() => import("./examples/loaders/StripeSlideLoader")),
        defaultParams: {
            speed: 2,
            size: 80,
            color: "#6f86d6",
        },
    },

    // spinner
    default: {
        component: lazy(() => import("./examples/spinners/DefaultLoader")),
        defaultParams: {
            speed: 1,
            size: 48,
            color: "#ff7e5f",
        },
    },
    starRotate: {
        component: lazy(() => import("./examples/spinners/StarRotateLoader")),
        defaultParams: {
            speed: 3,
            size: 48,
            color: "#70e1f5",
        },
    },
    fade: {
        component: lazy(() => import("./examples/spinners/FadeLoader")),
        defaultParams: {
            speed: 1.5,
            size: 48,
            color: "#66a6ff",
        },
    },
    rotateScale: {
        component: lazy(() => import("./examples/spinners/RotateScaleLoader")),
        defaultParams: {
            speed: 1.2,
            size: 48,
            color: "#80ac4c",
            scale: 1.3,
        },
    },
    slices: {
        component: lazy(() => import("./examples/spinners/SlicesLoader")),
        defaultParams: {
            speed: 1.5,
            size: 48,
            color: "#800080",
        },
    },
    clock: {
        component: lazy(() => import("./examples/spinners/ClockLoader")),
        defaultParams: {
            speed: 1.2,
            size: 50,
            color: "#f7b2e1",
        },
    },
    waves: {
        component: lazy(() => import("./examples/spinners/WavesLoader")),
        defaultParams: {
            speed: 0.6,
            size: 48,
            color: "#fdba74",
            scale: 1.5,
        },
    },
    square: {
        component: lazy(() => import("./examples/spinners/SquareLoader")),
        defaultParams: {
            speed: 1.2,
            size: 36,
            color: "#22c55e",
        },
    },
    easeSpin: {
        component: lazy(() => import("./examples/spinners/EaseSpinLoader")),
        defaultParams: {
            speed: 1.5,
            size: 40,
            color: "#fb7185",
        },
    },
    hourglass: {
        component: lazy(() => import("./examples/spinners/HourglassLoader")),
        defaultParams: {
            speed: 1,
            size: 40,
            color: "#08b7c8",
        },
    },
    orbitSpin: {
        component: lazy(() => import("./examples/spinners/orbit-spin/OrbitSpinLoader")),
        defaultParams: {
            speed: 1.15,
            size: 56,
        },
    },
    stepRotate: {
        component: lazy(() => import("./examples/spinners/StepRotateLoader")),
        defaultParams: {
            speed: 1.2,
            size: 50,
            color: "#f03355"
        },
    },
    arrowRotate: {
        component: lazy(() => import("./examples/spinners/ArrowRotateLoader")),
        defaultParams: {
            speed: 1,
            size: 50,
            color: "#8b5cf6"
        },
    },
    quadSpin: {
        component: lazy(() => import("./examples/spinners/QuadSpinLoader")),
        defaultParams: {
            speed: 1,
            size: 48,
        },
    },
    scaleDotsSpin: {
        component: lazy(() => import("./examples/spinners/ScaleDotsSpinLoader")),
        defaultParams: {
            speed: 1,
            size: 20,
            color: "#3393dd",
            scale: 3,
        },
    },
    weaveCircle: {
        component: lazy(() => import("./examples/spinners/WeaveCircleLoader")),
        defaultParams: {
            speed: 3,
            size: 120,
        },
    },

    // loading-texts
    text: {
        component: lazy(() => import("./examples/loading-texts/TextLoader")),
        defaultParams: {
            speed: 0.8,
            size: 30,
            color: "#9810fa",
            yRange: -4,
        },
    },
    slideText: {
        component: lazy(() => import("./examples/loading-texts/SlideTextLoader")),
        defaultParams: {
            speed: 4,
            size: 30,
            color: "#be7cba",
        },
    },
    barcode: {
        component: lazy(() => import("./examples/loading-texts/BarcodeLoader")),
        defaultParams: {
            speed: 2.6,
            size: 30,
            color: "#9810fa",
        },
    },
    waveFill: {
        component: lazy(() => import("./examples/loading-texts/WaveFillLoader")),
        defaultParams: {
            speed: 1.5,
            size: 40,
            color: "#326384",
        },
    },
    shutter: {
        component: lazy(() => import("./examples/loading-texts/ShutterLoader")),
        defaultParams: {
            speed: 2,
            size: 20,
            color: "#3f3f46",
        },
    },
};