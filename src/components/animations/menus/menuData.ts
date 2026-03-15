export interface VideoSource {
    pc: string;
    mobile: string;
}

export interface MenuItem {
    key: string;
    title: string;
    video: VideoSource;
}

export const menuData: MenuItem[] = [
    {
        key: "centerAccordionMenu",
        title: "Center Accordion Menu",
        video: {
            pc: "/videos/menus/center-accordion-pc.mp4",
            mobile: "/videos/menus/center-accordion-mobile.mp4",
        },
    },
    {
        key: "faqAccordionMenu",
        title: "Faq Accordion Menu",
        video: {
            pc: "/videos/menus/faq-accordion-pc.mp4",
            mobile: "/videos/menus/faq-accordion-mobile.mp4",
        },
    },
    {
        key: "circleMenu",
        title: "Circle Menu",
        video: {
            pc: "/videos/menus/circle-menu.mp4",
            mobile: "/videos/menus/circle-menu.mp4",
        },
    },
    {
        key: "speechBubbleMenu",
        title: "Speech Bubble Menu",
        video: {
            pc: "/videos/menus/speech-bubble-pc.mp4",
            mobile: "/videos/menus/speech-bubble-mobile.mp4",
        },
    },
    {
        key: "foldingMenu",
        title: "Folding Menu",
        video: {
            pc: "/videos/menus/folding-pc.mp4",
            mobile: "/videos/menus/folding-mobile.mp4",
        },
    },
    {
        key: "collapsibleMenu",
        title: "Collapsible Menu",
        video: {
            pc: "/videos/menus/collapsible-pc.mp4",
            mobile: "/videos/menus/collapsible-mobile.mp4",
        },
    },
    {
        key: "activeRailMenu",
        title: "Active Rail Menu",
        video: {
            pc: "/videos/menus/active-rail-pc.mp4",
            mobile: "/videos/menus/active-rail-mobile.mp4",
        },
    },
    {
        key: "blurMenu",
        title: "Blur Menu",
        video: {
            pc: "/videos/menus/blur-pc.mp4",
            mobile: "/videos/menus/blur-mobile.mp4",
        },
    },
    {
        key: "circleSpreadMenu",
        title: "Circle Spread Menu",
        video: {
            pc: "/videos/menus/circle-spread-pc.mp4",
            mobile: "/videos/menus/circle-spread-mobile.mp4",
        },
    },
    {
        key: "curtainRevealMenu",
        title: "Curtain Reveal Menu",
        video: {
            pc: "/videos/menus/curtain-reveal-pc.mp4",
            mobile: "/videos/menus/curtain-reveal-mobile.mp4",
        },
    },
    {
        key: "deepNaviMenu",
        title: "Deep Navi Menu",
        video: {
            pc: "/videos/menus/deep-navi-pc.mp4",
            mobile: "/videos/menus/deep-navi-mobile.mp4",
        },
    },
    {
        key: "explodingMenu",
        title: "Exploding Menu",
        video: {
            pc: "/videos/menus/exploding-pc.mp4",
            mobile: "/videos/menus/exploding-mobile.mp4",
        },
    },
    {
        key: "gridOverlayMenu",
        title: "Grid Overlay Menu",
        video: {
            pc: "/videos/menus/grid-overlay-pc.mp4",
            mobile: "/videos/menus/grid-overlay-mobile.mp4",
        },
    },
    {
        key: "orbitMenu",
        title: "Orbit Menu",
        video: {
            pc: "/videos/menus/orbit-pc.mp4",
            mobile: "/videos/menus/orbit-mobile.mp4",
        },
    },
    {
        key: "overlayMenu",
        title: "Overlay Menu",
        video: {
            pc: "/videos/menus/overlay-pc.mp4",
            mobile: "/videos/menus/overlay-mobile.mp4",
        },
    },
    {
        key: "pushDownMenu",
        title: "Push Down Menu",
        video: {
            pc: "/videos/menus/push-down-pc.mp4",
            mobile: "/videos/menus/push-down-mobile.mp4",
        },
    },
    {
        key: "slideInMenu",
        title: "Slide In Menu",
        video: {
            pc: "/videos/menus/slide-in-pc.mp4",
            mobile: "/videos/menus/slide-in-mobile.mp4",
        },
    },
    {
        key: "yellowSlideMenu",
        title: "Yellow Slide Menu",
        video: {
            pc: "/videos/menus/yellow-slide-pc.mp4",
            mobile: "/videos/menus/yellow-slide-mobile.mp4",
        },
    },
];