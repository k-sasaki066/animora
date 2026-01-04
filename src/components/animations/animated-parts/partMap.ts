import type { ComponentType } from "react";
import NinjaStarPart from "./examples/NinjaStarPart";
import PredatorPart from "./examples/PredatorPart";

export const partMap: Record<string, ComponentType> = {
    ninjaStar: NinjaStarPart,
    predator: PredatorPart,

};