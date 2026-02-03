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