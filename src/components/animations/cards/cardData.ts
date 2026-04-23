export interface CardItem {
    key: string;
    title: string;
    video: string;
}

export const cardData: CardItem[] = [
    {
        key: "dateBadgeCard",
        title: "Date Badge Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/date-badge-card.mp4`,
    },
    {
        key: "slideMetaCard",
        title: "Slide Meta Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/slide-meta-card.mp4`,
    },
    {
        key: "opacityContentCard",
        title: "Opacity Content Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/opacity-content-card.mp4`,
    },
    {
        key: "skewHeaderCard",
        title: "Skew Header Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/skew-header-card.mp4`,
    },
    {
        key: "ticketCard",
        title: "Ticket Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/ticket-card.mp4`,
    },
    {
        key: "characterCard",
        title: "Character Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/character-card.mp4`,
    },
    {
        key: "pastelBubbleCard",
        title: "Pastel Bubble Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/pastel-bubble-card.mp4`,
    },
    {
        key: "floatingTiltCard",
        title: "Floating Tilt Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/floating-tilt-card.mp4`,
    },
    {
        key: "envelopeCard",
        title: "Envelope Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/envelope-card.mp4`,
    },
    {
        key: "concaveCornerCard",
        title: "Concave Corner Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/concave-corner-card.mp4`,
    },
    {
        key: "flipCard",
        title: "Flip Card",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/cards/flip-card.mp4`,
    },
];