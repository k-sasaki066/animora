import type { ComponentType } from "react";
import SimpleRibbon from "./examples/SimpleRibbon";
import FoldedRibbon from "./examples/FoldedRibbon";
import BookMarkRibbon from "./examples/BookMarkRibbon";
import FoldedBookMarkRibbon from "./examples/FoldedBookMarkRibbon";
import CornerRibbon from "./examples/CornerRibbon";
import VerticalRibbon from "./examples/VerticalRibbon";
import BadgeRibbon from "./examples/BadgeRibbon";
import SoldOutRibbon from "./examples/SoldOutRibbon";
import StarRibbon from "./examples/StarRibbon";

export const ribbonMap: Record<string, ComponentType> = {
    simpleRibbon: SimpleRibbon,
    foldedRibbon: FoldedRibbon,
    bookMarkRibbon: BookMarkRibbon,
    foldedBookMarkRibbon: FoldedBookMarkRibbon,
    cornerRibbon: CornerRibbon,
    verticalRibbon: VerticalRibbon,
    badgeRibbon: BadgeRibbon,
    soldOutRibbon: SoldOutRibbon,
    starRibbon: StarRibbon,
};