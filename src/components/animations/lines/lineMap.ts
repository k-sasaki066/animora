import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type LineComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>>;

import SolidLine from "./examples/SolidLine";
import DoubleLine from "./examples/DoubleLine";
import DottedLine from "./examples/DottedLine";
import CutLine from "./examples/CutLine";
import VerticalStitchLine from "./examples/VerticalStitchLine";
import HatchedStitchLine from "./examples/HatchedStitchLine";
import StripeLine from "./examples/StripeLine";
import CrayonLine from "./examples/CrayonLine";
import DotSeparator from "./examples/DotSeparator";
import SpiderSeparator from "./examples/spider/SpiderSeparator";
import WaveLine from "./examples/WaveLine";
import ShapeRunner from "./examples/shape-runner/ShapeRunner";
import WaveHero from "./examples/wave-hero/WaveHero";

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