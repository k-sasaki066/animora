import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type LineComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>>;

export const lineMap: Record<string, LineComponent> = {
    solidLine: lazy(() => import("./examples/SolidLine")),
    doubleLine: lazy(() => import("./examples/DoubleLine")),
    dottedLine: lazy(() => import("./examples/DottedLine")),
    cutLine: lazy(() => import("./examples/CutLine")),
    verticalStitchLine: lazy(() => import("./examples/VerticalStitchLine")),
    hatchedStitchLine: lazy(() => import("./examples/HatchedStitchLine")),
    stripeLine: lazy(() => import("./examples/StripeLine")),
    crayonLine: lazy(() => import("./examples/CrayonLine")),
    dotSeparator: lazy(() => import("./examples/DotSeparator")),
    spiderSeparator: lazy(() => import("./examples/spider/SpiderSeparator")),
    waveLine: lazy(() => import("./examples/WaveLine")),
    shapeRunner: lazy(() => import("./examples/shape-runner/ShapeRunner")),
    waveHero: lazy(() => import("./examples/wave-hero/WaveHero")),
};