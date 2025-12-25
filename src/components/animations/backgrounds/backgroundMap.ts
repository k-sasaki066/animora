import type { ComponentType } from "react";
import WaveBackground from "./examples/WaveBackground";
import ShineTextBackground from "./examples/ShineTextBackground";
import FloatingBubblesBackground from "./examples/floating-bubbles/FloatingBubblesBackground";
import HexBackground from "./examples/HexBackground";
import PaperPlaneBackground from "./examples/paper-plane/PaperPlaneBackground";
import PlanePathBackground from "./examples/PlanePathBackground";
import ParticlesBackground from "./examples/particles/ParticlesBackground";
import MagicBackground from "./examples/MagicBackground";

export const backgroundMap: Record<string, ComponentType> = {
    wave: WaveBackground,
    shine: ShineTextBackground,
    floating: FloatingBubblesBackground,
    hex: HexBackground,
    plane: PaperPlaneBackground,
    path: PlanePathBackground,
    particles: ParticlesBackground,
    magic: MagicBackground,
};