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
            { title: "Helpers", key: "Helpers", content: "" },
        ],
    },
    {
        title: "HTML",
        items: [
            { title: "Entity", key: "Entity", content: "" },
            { title: "imgタグ", key: "ImageTag", content: "" },
            { title: "Videoタグ", key: "VideoTag", content: "" },
            { title: "Sourceタグ", key: "SourceTag", content: "" },
            { title: "colorモデル", key: "ColorModel", content: "" },
            { title: "color比較", key: "ColorComparison",content: "" },
        ],
    },
    {
        title: "CLI",
        items: [
            { title: "CLI", key: "CLI", content: "" },
            { title: "Docker", key: "Docker", content: "" },
            { title: "Docker Compose", key: "DockerCompose", content: "" },
        ],
    },
    {
        title: "React",
        items: [
            { title: "Lazy", key: "Lazy", content: "" },
            { title: "Intersection-Observer", key: "IntersectionObserver", content: "" },
            { title: "Reduced Motion", key: "ReducedMotion", content: "" },
        ],
    },
];