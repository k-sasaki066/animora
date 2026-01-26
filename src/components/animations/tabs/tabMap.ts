import type { ComponentType } from "react";
import StandardTab from "./examples/StandardTab";
import ModernTab from "./examples/ModernTab";
import IndexTab from "./examples/IndexTab";
import IconTab from "./examples/IconTab";
import SimpleTab from "./examples/SimpleTab";
import SlideTab from "./examples/SlideTab";
import MotionTab from "./examples/MotionTab";
import BubbleSlideTab from "./examples/BubbleSlideTab";
import FileTab from "./examples/FileTab";
import ScrollTab from "./examples/ScrollTab";

export const tabMap: Record<string, ComponentType> = {
    standardTab: StandardTab,
    modernTab: ModernTab,
    indexTab: IndexTab,
    iconTab: IconTab,
    simpleTab: SimpleTab,
    slideTab: SlideTab,
    motionTab: MotionTab,
    bubbleSlideTab: BubbleSlideTab,
    fileTab: FileTab,
    scrollTab: ScrollTab,
};