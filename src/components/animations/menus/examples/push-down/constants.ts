import { IconType } from "react-icons";
import { FaTools, FaCog, FaLifeRing, FaWater, FaSuitcase } from "react-icons/fa";

export const BASE_WIDTH = 480;

export const COLORS = {
    burgerLine: "#000000", // ハンバーガー閉
    burgerLineOpen: "#ffffff", // ハンバーガー開
    menuBg: "#25262b", // メニュー背景色
    hoverText: "#58473c", // メニューリンクホバー色
    iconBg: "#14B8A6",
    label: "#ffffff",
};

type NavMenuItem = {
    icon: IconType;
    label: string;
};


export const NAV_MENUS: NavMenuItem[] = [
    { icon: FaTools, label: "TOOLS" },
    { icon: FaCog, label: "SETTINGS" },
    { icon: FaLifeRing, label: "LEARN" },
    { icon: FaWater, label: "WAVES" },
    { icon: FaSuitcase, label: "TRAVEL" },
];

type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        y?: number;
        rotate?: number;
        opacity?: number;
        backgroundColor?: string;
    };
};

export const HAMBURGER_LINES: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        animate: (isOpen: boolean) => ({
            y: isOpen ? 8 : 0,
            rotate: isOpen ? -45 : 0,
            backgroundColor: isOpen ? COLORS.burgerLineOpen : COLORS.burgerLine,
        }),
    },
    {
        key: "middle",
        className: "top-[8px]",
        animate: (isOpen: boolean) => ({
            opacity: isOpen ? 0 : 1,
            backgroundColor: isOpen ? COLORS.burgerLineOpen : COLORS.burgerLine,
        }),
    },
    {
        key: "bottom",
        className: "bottom-0",
        animate: (isOpen: boolean) => ({
            y: isOpen ? -8 : 0,
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? COLORS.burgerLineOpen : COLORS.burgerLine,
        }),
    },
];