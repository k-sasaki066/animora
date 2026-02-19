import type { ComponentType } from "react";
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

export const lineMap: Record<string, ComponentType> = {
    solidLine: SolidLine,
    doubleLine: DoubleLine,
    dottedLine: DottedLine,
    cutLine: CutLine,
    verticalStitchLine: VerticalStitchLine,
    hatchedStitchLine: HatchedStitchLine,
    stripeLine: StripeLine,
    crayonLine: CrayonLine,
    dotSeparator: DotSeparator,
    spiderSeparator: SpiderSeparator,
    waveLine: WaveLine,
    shapeRunner: ShapeRunner,
    waveHero: WaveHero,
};