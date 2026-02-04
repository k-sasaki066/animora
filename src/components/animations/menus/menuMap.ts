import type { ComponentType } from "react";
import CenterAccordionMenu from "./examples/center-accordion/CenterAccordionMenu";
import CircleMenu from "./examples/CircleMenu";
import SpeechBubbleMenu from "./examples/speech-bubble/SpeechBubbleMenu";
import FoldingMenu from "./examples/folding/FoldingMenu";
import CollapsibleMenu from "./examples/collapsible/CollapsibleMenu";

export const menuMap: Record<string, ComponentType> = {
    centerAccordionMenu: CenterAccordionMenu,
    circleMenu: CircleMenu,
    speechBubbleMenu: SpeechBubbleMenu,
    foldingMenu: FoldingMenu,
    collapsibleMenu: CollapsibleMenu,
};