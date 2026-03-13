import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type TabComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const tabMap: Record<string, TabComponent> = {
    standardTab: lazy(() => import("./examples/StandardTab")),
    modernTab: lazy(() => import("./examples/ModernTab")),
    indexTab: lazy(() => import("./examples/IndexTab")),
    iconTab: lazy(() => import("./examples/IconTab")),
    simpleTab: lazy(() => import("./examples/SimpleTab")),
    slideTab: lazy(() => import("./examples/SlideTab")),
    motionTab: lazy(() => import("./examples/MotionTab")),
    bubbleSlideTab: lazy(() => import("./examples/BubbleSlideTab")),
    fileTab: lazy(() => import("./examples/FileTab")),
    scrollTab: lazy(() => import("./examples/ScrollTab")),
};