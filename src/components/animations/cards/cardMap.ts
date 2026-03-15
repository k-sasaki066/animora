import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type CardComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const cardMap: Record<string, CardComponent> = {
    dateBadgeCard: lazy(() => import("./examples/DateBadgeCard")),
    slideMetaCard: lazy(() => import("./examples/SlideMetaCard")),
    opacityContentCard: lazy(() => import("./examples/OpacityContentCard")),
    skewHeaderCard: lazy(() => import("./examples/SkewHeaderCard")),
    ticketCard: lazy(() => import("./examples/TicketCard")),
    characterCard: lazy(() => import("./examples/character/CharacterCard")),
    pastelBubbleCard: lazy(() => import("./examples/pastel-bubble/PastelBubbleCard")),
    floatingTiltCard: lazy(() => import("./examples/FloatingTiltCard")),
    envelopeCard: lazy(() => import("./examples/EnvelopeCard")),
    concaveCornerCard: lazy(() => import("./examples/ConcaveCornerCard")),
    flipCard: lazy(() => import("./examples/FlipCard")),
};