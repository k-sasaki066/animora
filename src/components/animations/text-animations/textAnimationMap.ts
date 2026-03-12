import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type TextComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const textAnimationMap: Record<string, TextComponent> = {
    typing: lazy(() => import("./examples/TypingText")),
    slideUp: lazy(() => import("./examples/SlideUpText")),
    fade: lazy(() => import("./examples/FadeText")),
    twist: lazy(() => import("./examples/TwistInText")),
    scaleStagger: lazy(() => import("./examples/ScaleStaggerText")),
    slice: lazy(() => import("./examples/SliceText")),
    wipe: lazy(() => import("./examples/WipeText")),
    reduction: lazy(() => import("./examples/ReductionText")),
    blur: lazy(() => import("./examples/BlurText")),
    popRise: lazy(() => import("./examples/PopRiseText")),
    classic: lazy(() => import("./examples/ClassicText")),
    logo: lazy(() => import("./examples/LogoText")),
    explode: lazy(() => import("./examples/explode/ExplodeText")),
    pressed: lazy(() => import("./examples/PressedText")),
    spark: lazy(() => import("./examples/SparkText")),
    squiggly: lazy(() => import("./examples/SquigglyText")),
    verticalRotation: lazy(() => import("./examples/VerticalRotationText")),
    motion: lazy(() => import("./examples/MotionText")),
    sway: lazy(() => import("./examples/SwayText")),
    glitch: lazy(() => import("./examples/GlitchText")),
    gifClip: lazy(() => import("./examples/GifClipText")),
    movingClipped: lazy(() => import("./examples/MovingClippedText")),
    cursorBlob: lazy(() => import("./examples/CursorBlobText")),
    rotatingWords: lazy(() => import("./examples/RotatingWordsText")),
    svgText: lazy(() => import("./examples/SvgText")),
    circularText: lazy(() => import("./examples/CircularText")),
    popOut: lazy(() => import("./examples/PopOutText")),
    division: lazy(() => import("./examples/DivisionText")),
    strobo: lazy(() => import("./examples/StroboText")),
    neon: lazy(() => import("./examples/NeonText")),
    svgGlitch: lazy(() => import("./examples/SvgGlitchText")),
};