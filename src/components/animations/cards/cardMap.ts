import type { ComponentType } from "react";
import DateBadgeCard from "./examples/DateBadgeCard";
import SlideMetaCard from "./examples/SlideMetaCard";

export const cardMap: Record<string, ComponentType> = {
    dateBadgeCard: DateBadgeCard,
    slideMetaCard: SlideMetaCard,
};