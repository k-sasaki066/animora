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
            { title: "Micro Interactions", key: "Micro", content: "Button hover" },
            { title: "Line", key: "Line", content: "Line Animation" },
            { title: "Ribbon", key: "Ribbon", content: "" },
            { title: "Text", key: "Text", content: "Text-Animation" },
            { title: "Action Buttons", key: "Action-buttons", content: "Favorite / Toggle" },
            { title: "Animated Parts", key: "Animated-parts", content: "SVG / CSS " },
            { title: "Image", key: "Image", content: "Image hover" },
            { title: "Slider", key: "Slider", content: "" },
            { title: "Tab", key: "Tab", content: "" },
            { title: "List", key: "List", content: "" },
            { title: "Table", key: "Table", content: "" },
            { title: "Card", key: "Card", content: "" },
            { title: "Hamburger", key: "Hamburger", content: "" },
            { title: "Menu", key: "Menu", content: "Hamburger Menu / FAQ" },
            { title: "Form Parts", key: "Form-Parts", content: "Textbox / Select / Checkbox / Rate" },
            { title: "Search Box", key: "Search-Box",content: "" },
            { title: "Pagination", key: "Pagination", content: "" },
            { title: "Background Effects", key: "Background", content: "" },
            { title: "Graph", key: "Graph", content: "" },
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