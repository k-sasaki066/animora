import type { ComponentType } from "react";
import SimpleRibbon from "./examples/SimpleRibbon";
import FoldedRibbon from "./examples/FoldedRibbon";

export const ribbonMap: Record<string, ComponentType> = {
    simpleRibbon: SimpleRibbon,
    foldedRibbon: FoldedRibbon,
};