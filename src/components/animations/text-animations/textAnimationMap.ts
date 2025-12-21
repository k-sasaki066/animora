import type { ComponentType } from "react";
import TypingText from "./examples/TypingText";
import TextSlideUp from "./examples/TextSlideUp";
import FadeText from "./examples/FadeText";
import TwistInText from "./examples/TwistInText";
import TextScaleStagger from "./examples/TextScaleStagger";
import TextSlice from "./examples/TextSlice";
import WipeText from "./examples/WipeText";
import ReductionText from "./examples/ReductionText";

export const textAnimationMap: Record<string, ComponentType> = {
    typing: TypingText,
    slideUp: TextSlideUp,
    fade: FadeText,
    twist: TwistInText,
    scaleStagger: TextScaleStagger,
    slice: TextSlice,
    wipe: WipeText,
    reduction: ReductionText,
};