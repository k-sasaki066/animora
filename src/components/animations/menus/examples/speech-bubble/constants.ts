export const BASE_WIDTH = 450;

type MenuItem = {
    label: string;
    link?: string;
    submenu?: (string | "---")[];
};

export const MENU_ITEMS: MenuItem[] = [
    {
        label: "Home",
        link: "#"
    },
    {
        label: "Products",
        submenu: ["Product #1", "Product #2", "Product #3"],
    },
    {
        label: "News",
        link: "#"
    },
    {
        label: "More",
        submenu: ["About", "Contact", "---", "Support", "FAQs"],
    },
];