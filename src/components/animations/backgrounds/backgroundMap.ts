import type { ComponentType } from "react";
import WaveBackground from "./examples/WaveBackground";
import ShineTextBackground from "./examples/ShineTextBackground";
import FloatingBubblesBackground from "./examples/floating-bubbles/FloatingBubblesBackground";
import HexBackground from "./examples/HexBackground";

export const backgroundMap: Record<string, ComponentType> = {
    wave: WaveBackground,
    shine: ShineTextBackground,
    floating: FloatingBubblesBackground,
    hex: HexBackground,
};