export interface SkewedPageData {
    title: string;
    description: string;
    leftBg?: string;
    rightBg?: string;
    textSide: "left" | "right";
}

export const skewedPages: SkewedPageData[] = [
    {
        title: "Page 1",
        description: "Just scroll down",
        leftBg: "url('/images/samples/sample-03.webp')",
        textSide: "right",
    },
    {
        title: "Page 2",
        description: "Nothing to do here, continue scrolling.",
        rightBg: "url('/images/samples/sample-04.webp')",
        textSide: "left",
    },
    {
        title: "Page 3",
        description: "The end is near, I promise!",
        leftBg: "url('/images/samples/sample-05.webp')",
        textSide: "right",
    },
]