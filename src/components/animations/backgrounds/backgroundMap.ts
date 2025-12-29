import type { ComponentType } from "react";
import WaveBackground from "./examples/WaveBackground";
import ShineTextBackground from "./examples/ShineTextBackground";
import FloatingBubblesBackground from "./examples/floating-bubbles/FloatingBubblesBackground";
import HexBackground from "./examples/HexBackground";
import PaperPlaneBackground from "./examples/paper-plane/PaperPlaneBackground";
import PlanePathBackground from "./examples/PlanePathBackground";
import ParticlesBackground from "./examples/particles/ParticlesBackground";
import MagicBackground from "./examples/MagicBackground";
import SnowBackground from "./examples/SnowBackground";
import DiagonalBackground from "./examples/DiagonalBackground";
import CloudBackground from "./examples/CloudBackground";
import GridBackground from "./examples/GridBackground";
import FirefliesBackground from "./examples/fireflies/FirefliesBackground";
import ColorDiagonalBackground from "./examples/ColorDiagonalBackground";
import LinesBackground from "./examples/lines/LinesBackground";
import RippleBackground from "./examples/RippleBackground";
import StreamlinesBackground from "./examples/StreamlinesBackground";
import RainBackground from "./examples/rain/RainBackground";
import FloatingCirclesBackground from "./examples/FloatingCirclesBackground";
import StarfieldBackground from "./examples/StarfieldBackground";
import StaticNoiseBackground from "./examples/StaticNoiseBackground";
import DriftingShapesBackground from "./examples/drifting-shapes/DriftingShapesBackground";
import SunsetSkyBackground from "./examples/sunset-sky/SunsetSkyBackground";

export const backgroundMap: Record<string, ComponentType> = {
    wave: WaveBackground,
    shine: ShineTextBackground,
    floating: FloatingBubblesBackground,
    hex: HexBackground,
    plane: PaperPlaneBackground,
    path: PlanePathBackground,
    particles: ParticlesBackground,
    magic: MagicBackground,
    snow: SnowBackground,
    diagonal: DiagonalBackground,
    cloud: CloudBackground,
    grid: GridBackground,
    fireflies: FirefliesBackground,
    color: ColorDiagonalBackground,
    lines: LinesBackground,
    ripple: RippleBackground,
    streamlines: StreamlinesBackground,
    rain: RainBackground,
    circles: FloatingCirclesBackground,
    starfield: StarfieldBackground,
    static: StaticNoiseBackground,
    shapes: DriftingShapesBackground,
    sunsetSky: SunsetSkyBackground,
};