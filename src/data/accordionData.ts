"use client";

export interface AccordionItem {
    title: string;
    content?: string;
    key: string;
}

export interface AccordionCategory {
    title: string;
    items: AccordionItem[];
}

export const accordionData: AccordionCategory[] = [
    {
        title: "CSS Animations",
        items: [
        { title: "Basic", key: "Basic", content: "Fade / Slide / Rotate / Scale"},
        { title: "Loading", key: "Loading", content: "Spinner / Pulse / Bounce" },
        { title: "Appearance", key: "Appearance", content: "Fade-in / Slide-in / Zoom-in" },
        { title: "Text", key: "Text", content: "Typing / Gradient text / Letter spacing" },
        { title: "Logo & SVG", key: "Logo-Svg", content: "Stroke / Fill / Morph" },
        { title: "Background Effects", key: "Background", content: "Gradient / Blur / Particles" },
        { title: "Micro Interactions",  key: "Micro",content: "Button hover / Card hover" },
        { title: "UI Components", key: "UI-components",content: "Accordion / Modal / Drawer" },
        ],
    },
    {
        title: "JavaScript",
        items: [
        { title: "DOM Manipulation", key: "DOM", content: "Element selection, event handling" },
        { title: "Animations", key: "Animations", content: "JS-driven animations using requestAnimationFrame" },
        { title: "Utilities", key: "Utilities", content: "Debounce, throttle, etc." },
        ],
    },
    {
        title: "HTML",
        items: [
        { title: "Tags", key: "Tags", content: "div, section, header, footer..." },
        { title: "Forms", key: "Forms",content: "input, select, textarea..." },
        { title: "Media", key: "Media",content: "img, video, audio..." },
        ],
    },
    {
        title: "Class Names",
        items: [
        { title: "Tailwind Classes", key: "Classes", content: "bg-, text-, flex-, grid-" },
        { title: "Custom CSS Classes", key: "Custom CSS", content: "自作クラスの使い方" },
        ],
    },
    {
        title: "Notes",
        items: [
        { title: "Personal Notes", key: "Personal Notes", content: "自分用メモ" },
        { title: "Tips", key: "Tips", content: "便利な小技集" },
        ],
    },
];