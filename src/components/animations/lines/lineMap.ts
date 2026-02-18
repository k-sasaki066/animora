import type { ComponentType } from "react";
import SolidLine from "./examples/SolidLine";
import DoubleLine from "./examples/DoubleLine";
import DottedLine from "./examples/DottedLine";
import CutLine from "./examples/CutLine";
import DotSeparator from "./examples/DotSeparator";
import SpiderSeparator from "./examples/spider/SpiderSeparator";

export const lineMap: Record<string, ComponentType> = {
    solidLine: SolidLine,
    doubleLine: DoubleLine,
    dottedLine: DottedLine,
    cutLine: CutLine,
    dotSeparator: DotSeparator,
    spiderSeparator: SpiderSeparator,
};