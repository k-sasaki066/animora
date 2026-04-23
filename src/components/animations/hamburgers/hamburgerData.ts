export interface HamburgerItem {
    key: string;
    title: string;
    video: string;
}

export const hamburgerData: HamburgerItem[] = [
    {
        key: "standardHamburger",
        title: "Standard Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/standard-hamburger.mp4`,
    },
    {
        key: "rotate315Hamburger",
        title: "Rotate 315 Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/rotate-315-hamburger.mp4`,
    },
    {
        key: "rotateHamburger",
        title: "Rotate Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/rotate-hamburger.mp4`,
    },
    {
        key: "extractHamburger",
        title: "Extract Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/extract-hamburger.mp4`,
    },
    {
        key: "resetCrossHamburger",
        title: "Reset Cross Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/reset-cross-hamburger.mp4`,
    },
    {
        key: "arrowHamburger",
        title: "Arrow Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/arrow-hamburger.mp4`,
    },
    {
        key: "rotateArrowHamburger",
        title: "Rotate Arrow Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/rotate-arrow-hamburger.mp4`,
    },
    {
        key: "rotate90Hamburger",
        title: "Rotate 90 Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/rotate-90-hamburger.mp4`,
    },
    {
        key: "circleAppearHamburger",
        title: "Circle Appear Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/circle-appear-hamburger.mp4`,
    },
    {
        key: "labelHamburger",
        title: "Label Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/label-hamburger.mp4`,
    },
    {
        key: "dotsHamburger",
        title: "Dots Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/dots-hamburger.mp4`,
    },
    {
        key: "iconHamburger",
        title: "Icon Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/icon-hamburger.mp4`,
    },
    {
        key: "elasticMorphHamburger",
        title: "Elastic Morph Hamburger",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/hamburgers/elastic-morph-hamburger.mp4`,
    },
];