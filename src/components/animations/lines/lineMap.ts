import type { ComponentType } from "react";
import SolidLine from "./examples/SolidLine";
import DoubleLine from "./examples/DoubleLine";
import DottedLine from "./examples/DottedLine";

export const lineMap: Record<string, ComponentType> = {
    solidLine: SolidLine,
    doubleLine: DoubleLine,
    dottedLine: DottedLine,
};