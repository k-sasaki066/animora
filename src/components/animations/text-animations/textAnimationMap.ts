import type { ComponentType } from "react";
import TypingText from "./examples/TypingText";
import TextSlideUp from "./examples/TextSlideUp";
import FadeText from "./examples/FadeText";

export const textAnimationMap: Record<string, ComponentType> = {
    typing: TypingText,
    slideUp: TextSlideUp,
    fade: FadeText,
};