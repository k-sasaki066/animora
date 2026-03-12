import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type RibbonComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const ribbonMap: Record<string, RibbonComponent> = {
    simpleRibbon: lazy(() => import("./examples/SimpleRibbon")),
    foldedRibbon: lazy(() => import("./examples/FoldedRibbon")),
    bookMarkRibbon: lazy(() => import("./examples/BookMarkRibbon")),
    foldedBookMarkRibbon: lazy(() => import("./examples/FoldedBookMarkRibbon")),
    cornerRibbon: lazy(() => import("./examples/CornerRibbon")),
    verticalRibbon: lazy(() => import("./examples/VerticalRibbon")),
    badgeRibbon: lazy(() => import("./examples/BadgeRibbon")),
    soldOutRibbon: lazy(() => import("./examples/SoldOutRibbon")),
    starRibbon: lazy(() => import("./examples/StarRibbon")),
    crownRibbon: lazy(() => import("./examples/CrownRibbon")),
};