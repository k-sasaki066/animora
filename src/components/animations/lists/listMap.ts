import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type ListComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const listMap: Record<string, ListComponent> = {
    softPastelList: lazy(() => import("./examples/SoftPastelList")),
    colorfulList: lazy(() => import("./examples/ColorfulList")),
    chatBubbleList: lazy(() => import("./examples/ChatBubbleList")),
    circleArrowList: lazy(() => import("./examples/CircleArrowList")),
    stepsList: lazy(() => import("./examples/StepsList")),
    numberedTimelineList: lazy(() => import("./examples/NumberedTimelineList")),
    boxedList: lazy(() => import("./examples/BoxedList")),
    gradationNumberList: lazy(() => import("./examples/GradationNumberList")),
    stickyNoteList: lazy(() => import("./examples/StickyNoteList")),
    recipeTimelineList: lazy(() => import("./examples/RecipeTimelineList")),
    processFlowList: lazy(() => import("./examples/ProcessFlowList")),
};