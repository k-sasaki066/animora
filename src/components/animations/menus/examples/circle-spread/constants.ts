export const BASE_WIDTH = 480;

export const NAV_MENUS = ["Home", "About", "Portfolio", "Contact"] as const;

export type NavMenu = (typeof NAV_MENUS)[number];

export type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        width?: number;
        x?: number;
        y?: number;
        rotate?: number;
        opacity?: number;
    };
};

export const HAMBURGER_LINES: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        animate: (isOpen) => ({
            width: isOpen ? 20 : 32,
            x: isOpen ? -3 : 0,
            y: isOpen ? 6 : 0,
            rotate: isOpen ? -45 : 0,
        }),
    },
    {
        key: "middle",
        className: "top-[12px]",
        animate: () => ({ opacity: 1 }),
    },
    {
        key: "bottom",
        className: "bottom-0",
        animate: (isOpen) => ({
            width: isOpen ? 20 : 32,
            x: isOpen ? -3 : 0,
            y: isOpen ? -6 : 0,
            rotate: isOpen ? 45 : 0,
        }),
    },
];