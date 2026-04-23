export interface ListItem {
    key: string;
    title: string;
    video: string;
}

export const listData: ListItem[] = [
    {
        key: "softPastelList",
        title: "Soft Pastel List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/soft-pastel-list.mp4`,
    },
    {
        key: "colorfulList",
        title: "Colorful List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/colorful-list.mp4`,
    },
    {
        key: "chatBubbleList",
        title: "Chat Bubble List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/chat-bubble-list.mp4`,
    },
    {
        key: "circleArrowList",
        title: "Circle Arrow List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/circle-arrow-list.mp4`,
    },
    {
        key: "stepsList",
        title: "Steps List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/steps-list.mp4`,
    },
    {
        key: "numberedTimelineList",
        title: "Numbered Timeline List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/numbered-timeline-list.mp4`,
    },
    {
        key: "boxedList",
        title: "Boxed List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/boxed-list.mp4`,
    },
    {
        key: "gradationNumberList",
        title: "Gradation Number List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/gradation-number-list.mp4`,
    },
    {
        key: "stickyNoteList",
        title: "Sticky Note List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/sticky-note-list.mp4`,
    },
    {
        key: "recipeTimelineList",
        title: "Recipe Timeline List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/recipe-timeline-list.mp4`,
    },
    {
        key: "processFlowList",
        title: "Process Flow List",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lists/process-flow-list.mp4`,
    },
];