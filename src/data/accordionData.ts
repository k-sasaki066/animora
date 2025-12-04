"use client";

export interface AccordionItem {
    title: string;
    content?: string;
}

export interface AccordionCategory {
    title: string;
    items: AccordionItem[];
}

export const accordionData: AccordionCategory[] = [
    {
        title: "CSS Animations",
        items: [
        { title: "Basic", content: "Fade / Slide / Rotate / Scale" },
        { title: "Loading", content: "Spinner / Pulse / Bounce" },
        { title: "Appearance", content: "Fade-in / Slide-in / Zoom-in" },
        { title: "Text", content: "Typing / Gradient text / Letter spacing" },
        { title: "Logo & SVG", content: "Stroke / Fill / Morph" },
        { title: "Background Effects", content: "Gradient / Blur / Particles" },
        { title: "Micro Interactions", content: "Button hover / Card hover" },
        { title: "UI Components", content: "Accordion / Modal / Drawer" },
        ],
    },
    {
        title: "JavaScript",
        items: [
        { title: "DOM Manipulation", content: "Element selection, event handling" },
        { title: "Animations", content: "JS-driven animations using requestAnimationFrame" },
        { title: "Utilities", content: "Debounce, throttle, etc." },
        ],
    },
    {
        title: "HTML",
        items: [
        { title: "Tags", content: "div, section, header, footer..." },
        { title: "Forms", content: "input, select, textarea..." },
        { title: "Media", content: "img, video, audio..." },
        ],
    },
    {
        title: "Class Names",
        items: [
        { title: "Tailwind Classes", content: "bg-, text-, flex-, grid-" },
        { title: "Custom CSS Classes", content: "自作クラスの使い方" },
        ],
    },
    {
        title: "Notes",
        items: [
        { title: "Personal Notes", content: "自分用メモ" },
        { title: "Tips", content: "便利な小技集" },
        ],
    },
];