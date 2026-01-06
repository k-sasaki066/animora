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
import SunPart from "./examples/SunPart";
import MoonPart from "./examples/MoonPart";
import RainbowArcPart from "./examples/RainbowArcPart";
import ClockPart from "./examples/ClockPart";
import AlarmClockPart from "./examples/AlarmClockPart";
import FootPrintPart from "./examples/FootPrintPart";

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
    sun: SunPart,
    moon: MoonPart,
    rainbowArc: RainbowArcPart,
    clock: ClockPart,
    alarmClock: AlarmClockPart,
    footPrint: FootPrintPart,
};