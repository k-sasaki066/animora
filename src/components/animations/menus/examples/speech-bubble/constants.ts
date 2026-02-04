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
        label: "Services",
        link: "#"
    },
    {
        label: "More",
        submenu: ["About", "Contact", "---", "Support", "FAQs"],
    },
];

type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        y?: number;
        rotate?: number;
        opacity?: number;
    };
};

export const LINES: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        animate: (isOpen) => ({
            y: isOpen ? 9 : 0,
            rotate: isOpen ? -45 : 0,
        }),
    },
    {
        key: "middle",
        className: "top-[9px]",
        animate: (isOpen) => ({
            opacity: isOpen ? 0 : 1,
        }),
    },
    {
        key: "bottom",
        className: "bottom-0",
        animate: (isOpen) => ({
            y: isOpen ? -9 : 0,
            rotate: isOpen ? 45 : 0,
        }),
    },
];