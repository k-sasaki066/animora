import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
import type { ButtonParams } from "./button-animation";

type ButtonComponent = LazyExoticComponent<
    ComponentType<ButtonParams>
    >;

type ButtonMeta = {
    component: ButtonComponent;
    defaultParams: ButtonParams;
};

export const buttonAnimationMap: Record<string, ButtonMeta> = {
    floating: {
        component: lazy(() => import("./examples/basic/FloatingButton")),
        defaultParams: {
            speed: 2,
            color: "#fb7185",
            yRange: -10,
        },
    },
    bulbul: {
        component: lazy(() => import("./examples/basic/BulbulButton")),
        defaultParams: {
            speed: 0.8,
            color: "#84cc16",
            xRange: 8,
        },
    },
    thump: {
        component: lazy(() => import("./examples/basic/ThumpButton")),
        defaultParams: {
            speed: 1.3,
            color: "#e879f9",
            scale: 1.1,
        },
    },
    swaying: {
        component: lazy(() => import("./examples/basic/SwayingButton")),
        defaultParams: {
            speed: 2,
            color: "#818CF8",
            rotate: 2,
        },
    },
    shaky: {
        component: lazy(() => import("./examples/basic/ShakyButton")),
        defaultParams: {
            speed: 0.1,
            color: "#38BDF8",
            yRange: 2,
            rotate: 1,
        },
    },
    sparkling: {
        component: lazy(() => import("./examples/basic/SparklingButton")),
        defaultParams: {
            speed: 3,
            color: "#FBBF24",
            rotate: 45,
            scale: 8,
        },
    },
    ripples: {
        component: lazy(() => import("./examples/basic/RipplesButton")),
        defaultParams: {
            speed: 1.5,
            color: "#C084FC",
            scale: 1.3,
        },
    },
    skew: {
        component: lazy(() => import("./examples/basic/SkewButton")),
        defaultParams: {
            speed: 2,
            color: "#fda5d5",
            rotate: 20,
        },
    },
    spin: {
        component: lazy(() => import("./examples/basic/SpinButton")),
        defaultParams: {
            speed: 1,
            color: "#71717b",
            rotate: 180,
        },
    },
    jiggly: {
        component: lazy(() => import("./examples/basic/JigglyButton")),
        defaultParams: {
            speed: 1.6,
            scale: 1.2,
        },
    },
    clickMove: {
        component: lazy(() => import("./examples/basic/ClickMoveButton")),
        defaultParams: {
            speed: 1.4,
            color: "#2DD4BF",
            yRange: 6,
        },
    },
    gradientMove: {
        component: lazy(() => import("./examples/basic/GradientMoveButton")),
        defaultParams: {
            speed: 4,
            color: "#fb7185",
        },
    },

    changeText: {
        component: lazy(() => import("./examples/hover-text/ChangeTextButton")),
        defaultParams: {
            speed: 0.3,
            color: "#f59e0b",
        },
    },
    flowText: {
        component: lazy(() => import("./examples/hover-text/FlowTextButton")),
        defaultParams: {
            speed: 0.3,
            color: "#16A34A",
        },
    },
    fancyText: {
        component: lazy(() => import("./examples/hover-text/FancyTextButton")),
        defaultParams: {
            speed: 0.4,
            color: "#000000",
            yRange: -4,
        },
    },
    smokeText: {
        component: lazy(() => import("./examples/hover-text/SmokeTextButton")),
        defaultParams: {
            speed: 0.4,
            color: "#000000",
        },
    },
    bouncyText: {
        component: lazy(() => import("./examples/hover-text/BouncyTextButton")),
        defaultParams: {
            speed: 0.7,
            color: "#155dfc",
            yRange: 3,
        },
    },

    extendLeft: {
        component: lazy(() => import("./examples/hover/ExtendLeftButton")),
        defaultParams: {
            speed: 0.4,
            color: "#99a1af",
        },
    },
    diagonalSwipe: {
        component: lazy(() => import("./examples/hover/DiagonalSwipeButton")),
        defaultParams: {
            speed: 0.5,
            color: "#fb7185",
        },
    },
    doubleSwipe: {
        component: lazy(() => import("./examples/hover/DoubleSwipeButton")),
        defaultParams: {
            speed: 0.5,
            color: "#05df72",
        },
    },
    stopSwipe: {
        component: lazy(() => import("./examples/hover/StopSwipeButton")),
        defaultParams: {
            speed: 0.5,
            color: "#fb923c",
        },
    },
    passing: {
        component: lazy(() => import("./examples/hover/PassingButton")),
        defaultParams: {
            speed: 1,
            color: "#818CF8",
        },
    },
    circleOut: {
        component: lazy(() => import("./examples/hover/CircleOutButton")),
        defaultParams: {
            size: 20,
            speed: 0.3,
            color: "#99a1af",
        },
    },
    click: {
        component: lazy(() => import("./examples/hover/ClickButton")),
        defaultParams: {
            color: "#7DD3FC",
            xRange: 3,
        },
    },
    flip: {
        component: lazy(() => import("./examples/hover/FlipButton")),
        defaultParams: {
            speed: 0.5,
            color: "#9810fa",
        },
    },
    colorCycle: {
        component: lazy(() => import("./examples/hover/ColorCycleButton")),
        defaultParams: {
            speed: 0.3,
            color: "#16A34A",
        },
    },
    colorIntoCenter: {
        component: lazy(() => import("./examples/hover/ColorIntoCenterButton")),
        defaultParams: {
            speed: 0.2,
            color: "#52525c",
        },
    },
    changeShape: {
        component: lazy(() => import("./examples/hover/ChangeShapeButton")),
        defaultParams: {
            speed: 0.6,
            color: "#ffc800",
        },
    },
    hiddenText: {
        component: lazy(() => import("./examples/hover/HiddenTextButton")),
        defaultParams: {
            speed: 0.4,
            color: "#fda5d5",
        },
    },
    colorFlow: {
        component: lazy(() => import("./examples/hover/ColorFlowButton")),
        defaultParams: {
            speed: 0.3,
            color: "#fb2c36",
            xRange: -10,
        },
    },
    mochi: {
        component: lazy(() => import("./examples/hover/MochiButton")),
        defaultParams: {
            speed: 1,
            color: "#99a1af",
        },
    },
    wave: {
        component: lazy(() => import("./examples/hover/WaveButton")),
        defaultParams: {
            speed: 0.8,
            color: "#3B82F6",
        },
    },
    backgroundMoves: {
        component: lazy(() => import("./examples/hover/BackgroundMovesButton")),
        defaultParams: {
            speed: 5,
            color: "#e5e5e5",
        },
    },
    gradientSlide: {
        component: lazy(() => import("./examples/hover/GradientSlideButton")),
        defaultParams: {
            speed: 0.5,
        },
    },
    pixelHover: {
        component: lazy(() => import("./examples/hover/PixelHoverButton")),
        defaultParams: {
            speed: 0.8,
        },
    },
    bubble: {
        component: lazy(() => import("./examples/hover/BubbleButton")),
        defaultParams: {
            speed: 1.5,
            color: "#A855F7",
        },
    },
    letterFill: {
        component: lazy(() => import("./examples/hover/LetterFillButton")),
        defaultParams: {
            speed: 0.2,
            color: "#1e3a8a",
        },
    },
    everChanging: {
        component: lazy(() => import("./examples/hover/EverChangingButton")),
        defaultParams: {
            speed: 2,
            color: "#ffc3a0",
            rotate: 5,
        },
    },
    liquid: {
        component: lazy(() => import("./examples/hover/LiquidButton")),
        defaultParams: {},
    },
    gradient3D: {
        component: lazy(() => import("./examples/hover/Gradient3DButton")),
        defaultParams: {
            speed: 0.2,
            yRange: 8,
        },
    },

    sideBrackets: {
        component: lazy(() => import("./examples/hover-line/SideBracketsButton")),
        defaultParams: {
            speed: 0.25,
            size: 24,
            color: "#FACC15",
            xRange: 10,
        },
    },
    transformShape: {
        component: lazy(() => import("./examples/hover-line/TransformShapeButton")),
        defaultParams: {
            speed: 0.5,
            color: "#d1d5dc",
        },
    },
    hoverLine: {
        component: lazy(() => import("./examples/hover-line/HoverLineButton")),
        defaultParams: {
            speed: 0.8,
            color: "#059669",
        },
    },
    rotate: {
        component: lazy(() => import("./examples/hover-line/RotateButton")),
        defaultParams: {
            speed: 1.6,
            color: "#D8B4FE",
        },
    },
    arrowExtend: {
        component: lazy(() => import("./examples/hover-line/ArrowExtendButton")),
        defaultParams: {
            speed: 0.4,
            color: "#FACC15",
        },
    },
    sporty: {
        component: lazy(() => import("./examples/hover-line/SportyButton")),
        defaultParams: {
            speed: 0.6,
        },
    },
    hoverOutline: {
        component: lazy(() => import("./examples/hover-line/HoverOutlineButton")),
        defaultParams: {
            speed: 1,
            color: "#06D6A0",
        },
    },
    hover4Corner: {
        component: lazy(() => import("./examples/hover-line/Hover4CornerButton")),
        defaultParams: {
            speed: 0.4,
            color: "#059669",
        },
    },
    hoverSurround: {
        component: lazy(() => import("./examples/hover-line/HoverSurroundButton")),
        defaultParams: {
            speed: 0.6,
            size: 24,
            color: "#FB923C",
        },
    },
    pileUp: {
        component: lazy(() => import("./examples/hover-line/PileUpButton")),
        defaultParams: {
            speed: 0.2,
            color: "#000000",
            xRange: 3
        },
    },
    parallelogram: {
        component: lazy(() => import("./examples/hover-line/ParallelogramButton")),
        defaultParams: {
            size: 30,
            color: "#FB923C",
            rotate: -40,
        },
    },
    parallelogram2: {
        component: lazy(() => import("./examples/hover-line/Parallelogram2Button")),
        defaultParams: {
            size: 30,
            color: "#3B82F6",
            rotate: -40,
        },
    },
    outlineHover: {
        component: lazy(() => import("./examples/hover-line/OutlineHoverButton")),
        defaultParams: {
            speed: 0.8,
            color: "#a855f7",
        },
    },
    moveAndSurround: {
        component: lazy(() => import("./examples/hover-line/MoveAndSurroundButton")),
        defaultParams: {
            speed: 0.8,
            color: "#a855f7",
        },
    },
    lineSurround: {
        component: lazy(() => import("./examples/hover-line/LineSurroundButton")),
        defaultParams: {
            speed: 0.8,
            color: "#000000",
        },
    },
};