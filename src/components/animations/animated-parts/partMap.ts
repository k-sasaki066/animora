import type { ComponentType } from "react";
import NinjaStarPart from "./examples/NinjaStarPart";
import PredatorPart from "./examples/PredatorPart";
import JuiceGaugePart from "./examples/JuiceGaugePart";
import IcePopPart from "./examples/IcePopPart";
import PizzaPart from "./examples/PizzaPart";
import CookiePart from "./examples/CookiePart";
import ChocolatePart from "./examples/ChocolatePart";
import SliceHamPart from "./examples/SliceHamPart";
import QuadSwapPart from "./examples/QuadSwapPart";
import QuadCirclePart from "./examples/QuadCirclePart";

export const partMap: Record<string, ComponentType> = {
    ninjaStar: NinjaStarPart,
    predator: PredatorPart,
    juiceGauge: JuiceGaugePart,
    icePop: IcePopPart,
    pizza: PizzaPart,
    cookie: CookiePart,
    chocolate: ChocolatePart,
    sliceHam: SliceHamPart,
    quadSwap: QuadSwapPart,
    quadCircle: QuadCirclePart,

};