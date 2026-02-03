export const BASE_WIDTH = 450;

type MenuItem = {
    title: string;
    items: string[];
};

export const MENU_ITEMS: MenuItem[] = [
    {
        title: "History",
        items: ["History book 1", "History book 2", "History book 3"],
    },
    {
        title: "Fiction",
        items: ["Fiction book 1", "Fiction book 2", "Fiction book 3"],
    },
    {
        title: "Fantasy",
        items: ["Fantasy book 1", "Fantasy book 2", "Fantasy book 3"],
    },
    {
        title: "Action",
        items: ["Action book 1", "Action book 2", "Action book 3"],
    },
];