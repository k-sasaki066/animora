import type { ComponentType } from "react";
import ChatBubbleList from "./examples/ChatBubbleList";
import CircleArrowList from "./examples/CircleArrowList";
import StepsList from "./examples/StepsList";
import NumberedTimelineList from "./examples/NumberedTimelineList";
import BoxedList from "./examples/BoxedList";
import GradationNumberList from "./examples/GradationNumberList";

export const listMap: Record<string, ComponentType> = {
    chatBubbleList: ChatBubbleList,
    circleArrowList: CircleArrowList,
    stepsList: StepsList,
    numberedTimelineList: NumberedTimelineList,
    boxedList: BoxedList,
    gradationNumberList: GradationNumberList,
};