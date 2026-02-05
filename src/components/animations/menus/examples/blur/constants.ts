export const BASE_WIDTH = 480;

export const NAV_MENUS = [
    "My Account",
    "Billing Information",
    "Order Tracker",
    "Change Password",
    "Log Out",
];

// ハンバーガー線定義
type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        y?: number;
        rotate?: number;
    };
};

export const HAMBURGER_LINES: LineConfig[] = [
    {
        key: "top",
        className: "top-2.5",
        animate: (isOpen) => ({
            y: isOpen ? 5 : 0,
            rotate: isOpen ? -45 : 0,
        }),
    },
    {
        key: "bottom",
        className: "bottom-2.5",
        animate: (isOpen) => ({
            y: isOpen ? -5 : 0,
            rotate: isOpen ? 45 : 0,
        }),
    },
];