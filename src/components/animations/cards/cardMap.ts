import type { ComponentType } from "react";
import DateBadgeCard from "./examples/DateBadgeCard";
import SlideMetaCard from "./examples/SlideMetaCard";
import OpacityContentCard from "./examples/OpacityContentCard";
import SkewHeaderCard from "./examples/SkewHeaderCard";
import TicketCard from "./examples/TicketCard";
import CharacterCard from "./examples/character/CharacterCard";
import PastelBubbleCard from "./examples/pastel-bubble/PastelBubbleCard";
import FloatingTiltCard from "./examples/FloatingTiltCard";
import EnvelopeCard from "./examples/EnvelopeCard";
import ConcaveCornerCard from "./examples/ConcaveCornerCard";
import FlipCard from "./examples/FlipCard";

export const cardMap: Record<string, ComponentType> = {
    dateBadgeCard: DateBadgeCard,
    slideMetaCard: SlideMetaCard,
    opacityContentCard: OpacityContentCard,
    skewHeaderCard: SkewHeaderCard,
    ticketCard: TicketCard,
    characterCard: CharacterCard,
    pastelBubbleCard: PastelBubbleCard,
    floatingTiltCard: FloatingTiltCard,
    envelopeCard: EnvelopeCard,
    concaveCornerCard: ConcaveCornerCard,
    flipCard: FlipCard,
};