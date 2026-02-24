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
            { title: "Text", key: "Text", content: "Typing / Gradient text / Letter spacing" },
            { title: "Image", key: "Image", content: "Image hover" },
            { title: "Background Effects", key: "Background", content: "Gradient / Blur / Particles" },
            { title: "Micro Interactions", key: "Micro", content: "Button hover" },
            { title: "Action Buttons", key: "Action-buttons", content: "Favorite / Toggle" },
            { title: "Slider", key: "Slider", content: "" },
            { title: "Tab", key: "Tab", content: "" },
            { title: "Hamburger", key: "Hamburger", content: "" },
            { title: "Menu", key: "Menu", content: "Hamburger Menu / FAQ" },
            { title: "Form Parts", key: "Form-Parts", content: "Textbox / Select / Checkbox / Rate" },
            { title: "Search Box", key: "Search-Box",content: "" },
            { title: "Animated Parts", key: "Animated-parts", content: "SVG / CSS " },
            { title: "Line", key: "Line", content: "Line Animation" },
            { title: "Pagination", key: "Pagination", content: "" },
            { title: "Ribbon", key: "Ribbon", content: "" },
            { title: "List", key: "List", content: "" },
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