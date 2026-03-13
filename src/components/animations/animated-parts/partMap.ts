import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type AnimatedPartComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const partMap: Record<string, AnimatedPartComponent> = {
    ninjaStar: lazy(() => import("./examples/NinjaStarPart")),
    predator: lazy(() => import("./examples/PredatorPart")),
    juiceGauge: lazy(() => import("./examples/JuiceGaugePart")),
    icePop: lazy(() => import("./examples/IcePopPart")),
    pizza: lazy(() => import("./examples/PizzaPart")),
    cookie: lazy(() => import("./examples/CookiePart")),
    chocolate: lazy(() => import("./examples/ChocolatePart")),
    sliceHam: lazy(() => import("./examples/SliceHamPart")),
    quadSwap: lazy(() => import("./examples/QuadSwapPart")),
    quadCircle: lazy(() => import("./examples/QuadCirclePart")),
    sun: lazy(() => import("./examples/SunPart")),
    moon: lazy(() => import("./examples/MoonPart")),
    rainbowArc: lazy(() => import("./examples/RainbowArcPart")),
    clock: lazy(() => import("./examples/ClockPart")),
    alarmClock: lazy(() => import("./examples/AlarmClockPart")),
    footPrint: lazy(() => import("./examples/FootPrintPart")),
    tetrisBlock: lazy(() => import("./examples/TetrisBlockPart")),
    collapse: lazy(() => import("./examples/CollapsePart")),
    invader: lazy(() => import("./examples/invader/InvaderPart")),
    lookAround: lazy(() => import("./examples/LookAroundPart")),
    blinkEyes: lazy(() => import("./examples/BlinkEyesPart")),
    ECGLine: lazy(() => import("./examples/ecg/ECGLinePart")),
    heartDashed: lazy(() => import("./examples/HeartDashedPart")),
    checkCircle: lazy(() => import("./examples/CheckCirclePart")),
};