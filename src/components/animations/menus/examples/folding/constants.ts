export const BASE_WIDTH = 450;

type MenuData = {
    title: string;
    color: string;
    hoverColor: string;
    items: string[];
};

export const MENUS: MenuData[] = [
    {
        title: "animals",
        color: "#9dc852",
        hoverColor: "#8db842",
        items: ["cat", "dog", "horse", "cow", "pig"],
    },
    {
        title: "names",
        color: "#4e96b3",
        hoverColor: "#3e86a3",
        items: ["Kevin", "Jim", "Andy"],
    },
    {
        title: "things",
        color: "#c97676",
        hoverColor: "#b96666",
        items: [ "bench", "pizza", "space", "black matter", "apple", "philodendron", "liver" ],
    },
    {
        title: "movies",
        color: "#dbab58",
        hoverColor: "#cb9b48",
        items: ["Godzilla", "Man on Wire", "Spirited Away", "Interstellar"],
    },
];

type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        width?: number;
        x?: number | string;
        y?: number;
        rotate?: number;
        opacity?: number;
        scaleY?: number;
        backgroundColor?: string;
    };
};

export const LINES: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        animate: (isOpen) => ({
            width: isOpen ? 20 : 32,
            x: isOpen ? -5 : 0,
            y: isOpen ? 3 : 0,
            rotate: isOpen ? -45 : 0,
            backgroundColor: isOpen ? "#000" : "#FFF",
        }),
    },
    {
        key: "middle",
        className: "top-[9px]",
        animate: (isOpen) => ({
            opacity: isOpen ? 1 : 1,
            backgroundColor: isOpen ? "#000" : "#FFF",
        }),
    },
    {
        key: "bottom",
        className: "bottom-0",
        animate: (isOpen) => ({
            width: isOpen ? 20 : 32,
            x: isOpen ? -5 : 0,
            y: isOpen ? -3 : 0,
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "#000" : "#FFF",
        }),
    },
];