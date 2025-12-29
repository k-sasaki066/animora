import type { ComponentType } from "react";
import TypingText from "./examples/TypingText";
import TextSlideUp from "./examples/TextSlideUp";
import FadeText from "./examples/FadeText";
import TwistInText from "./examples/TwistInText";
import TextScaleStagger from "./examples/TextScaleStagger";
import TextSlice from "./examples/TextSlice";
import WipeText from "./examples/WipeText";
import ReductionText from "./examples/ReductionText";
import TextBlur from "./examples/TextBlur";
import PopRiseText from "./examples/PopRiseText";
import ClassicText from "./examples/ClassicText";
import LogoText from "./examples/LogoText";
import ExplodeText from "./examples/explode/ExplodeText";
import PressedText from "./examples/PressedText";
import SparkText from "./examples/SparkText";
import SquigglyText from "./examples/SquigglyText";
import VerticalRotationText from "./examples/VerticalRotationText";
import MotionText from "./examples/MotionText";
import SwayText from "./examples/SwayText";
import GlitchText from "./examples/GlitchText";
import GifClipText from "./examples/GifClipText";
import MovingClippedText from "./examples/MovingClippedText";
import CursorBlobText from "./examples/CursorBlobText";
import RotatingWordsText from "./examples/RotatingWordsText";
import SvgText from "./examples/SvgText";
import CircularText from "./examples/CircularText";
import PopOutText from "./examples/PopOutText";
import DivisionText from "./examples/DivisionText";
import StroboText from "./examples/StroboText";
import NeonText from "./examples/NeonText";
import SvgGlitchText from "./examples/SvgGlitchText";

export const textAnimationMap: Record<string, ComponentType> = {
    typing: TypingText,
    slideUp: TextSlideUp,
    fade: FadeText,
    twist: TwistInText,
    scaleStagger: TextScaleStagger,
    slice: TextSlice,
    wipe: WipeText,
    reduction: ReductionText,
    blur: TextBlur,
    popRise: PopRiseText,
    classic: ClassicText,
    logo: LogoText,
    explode: ExplodeText,
    pressed: PressedText,
    spark: SparkText,
    squiggly: SquigglyText,
    verticalRotation: VerticalRotationText,
    motion: MotionText,
    sway: SwayText,
    glitch: GlitchText,
    gifClip: GifClipText,
    movingClipped: MovingClippedText,
    cursorBlob: CursorBlobText,
    rotatingWords: RotatingWordsText,
    svgText: SvgText,
    circularText: CircularText,
    popOut: PopOutText,
    division: DivisionText,
    strobo: StroboText,
    neon: NeonText,
    svgGlitch: SvgGlitchText,
};