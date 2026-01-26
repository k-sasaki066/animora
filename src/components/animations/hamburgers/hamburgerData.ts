export interface HamburgerItem {
    key: string;
    title: string;
    previewText: string;
}

export const hamburgerData: HamburgerItem[] = [
    {
        key: "standardHamburger",
        title: "Standard Hamburger",
        previewText: "Standard Hamburger Example",
    },
    {
        key: "rotate315Hamburger",
        title: "Rotate 315 Hamburger",
        previewText: "Rotate 315 Hamburger Example",
    },
    {
        key: "rotateHamburger",
        title: "Rotate Hamburger",
        previewText: "Rotate Hamburger Example",
    },
];