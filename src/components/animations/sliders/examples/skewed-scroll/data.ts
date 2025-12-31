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
        leftBg: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-1.jpg')",
        textSide: "right",
    },
    {
        title: "Page 2",
        description: "Nothing to do here, continue scrolling.",
        rightBg: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg')",
        textSide: "left",
    },
    {
        title: "Page 3",
        description: "The end is near, I promise!",
        leftBg: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg')",
        textSide: "right",
    },
]