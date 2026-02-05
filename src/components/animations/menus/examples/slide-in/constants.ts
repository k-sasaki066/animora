
export const BASE_WIDTH = 480;
export const NAV_MENUS = ["ホーム", "about", "サービス", "お問い合わせ"];

// ハンバーガー線定義
type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
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