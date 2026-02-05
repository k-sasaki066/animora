export const BASE_WIDTH = 480;

export const NAV_MENUS = [
    {
        label: "Home",
        bg: "bg-[#29363B]/80",
        hoverText: "hover:text-[#D7DEE1]"
    },
    {
        label: "About",
        bg: "bg-[#EA495F]/80",
        hoverText: "hover:text-[#FFD6DB]"
    },
    {
        label: "Skills",
        bg: "bg-[#F4837D]/80",
        hoverText: "hover:text-[#FFE2DF]"
    },
    {
        label: "Works",
        bg: "bg-[#FDCEA9]/80",
        hoverText: "hover:text-[#FFF1E4]"
    },
    {
        label: "Contact",
        bg: "bg-[#99B998]/80",
        hoverText: "hover:text-[#EAF3EA]"
    },
];

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