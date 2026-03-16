import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type BackgroundComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const backgroundMap: Record<string, BackgroundComponent> = {
    wave: lazy(() => import("./examples/WaveBackground")),
    shine: lazy(() => import("./examples/ShineTextBackground")),
    floating: lazy(() =>
        import("./examples/floating-bubbles/FloatingBubblesBackground")
    ),
    hex: lazy(() => import("./examples/HexBackground")),
    plane: lazy(() => import("./examples/paper-plane/PaperPlaneBackground")),
    path: lazy(() => import("./examples/PlanePathBackground")),
    particles: lazy(() =>
        import("./examples/particles/ParticlesBackground")
    ),
    magic: lazy(() => import("./examples/MagicBackground")),
    snow: lazy(() => import("./examples/SnowBackground")),
    diagonal: lazy(() => import("./examples/DiagonalBackground")),
    cloud: lazy(() => import("./examples/CloudBackground")),
    grid: lazy(() => import("./examples/GridBackground")),
    fireflies: lazy(() =>
        import("./examples/fireflies/FirefliesBackground")
    ),
    color: lazy(() => import("./examples/ColorDiagonalBackground")),
    lines: lazy(() => import("./examples/lines/LinesBackground")),
    ripple: lazy(() => import("./examples/RippleBackground")),
    streamlines: lazy(() =>
        import("./examples/StreamlinesBackground")
    ),
    rain: lazy(() => import("./examples/rain/RainBackground")),
    circles: lazy(() =>
        import("./examples/FloatingCirclesBackground")
    ),
    starfield: lazy(() =>
        import("./examples/StarfieldBackground")
    ),
    static: lazy(() =>
        import("./examples/StaticNoiseBackground")
    ),
    shapes: lazy(() =>
        import("./examples/drifting-shapes/DriftingShapesBackground")
    ),
    sunsetSky: lazy(() =>
        import("./examples/sunset-sky/SunsetSkyBackground")
    ),
    bubble: lazy(() => import("./examples/BubbleBackground")),
    confetti: lazy(() => import("./examples/ConfettiBackground")),
};