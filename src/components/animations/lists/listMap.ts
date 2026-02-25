import type { ComponentType } from "react";
import SoftPastelList from "./examples/SoftPastelList";
import ColorfulList from "./examples/ColorfulList";
import ChatBubbleList from "./examples/ChatBubbleList";
import CircleArrowList from "./examples/CircleArrowList";
import StepsList from "./examples/StepsList";
import NumberedTimelineList from "./examples/NumberedTimelineList";
import BoxedList from "./examples/BoxedList";
import GradationNumberList from "./examples/GradationNumberList";
import StickyNoteList from "./examples/StickyNoteList";
import RecipeTimelineList from "./examples/RecipeTimelineList";
import ProcessFlowList from "./examples/ProcessFlowList";

export const listMap: Record<string, ComponentType> = {
    softPastelList: SoftPastelList,
    colorfulList: ColorfulList,
    chatBubbleList: ChatBubbleList,
    circleArrowList: CircleArrowList,
    stepsList: StepsList,
    numberedTimelineList: NumberedTimelineList,
    boxedList: BoxedList,
    gradationNumberList: GradationNumberList,
    stickyNoteList: StickyNoteList,
    recipeTimelineList: RecipeTimelineList,
    processFlowList: ProcessFlowList,
};