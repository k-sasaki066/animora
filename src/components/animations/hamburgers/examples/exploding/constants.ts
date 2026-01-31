import { IconType } from "react-icons";
import { FaHome, FaUser, FaUpload, FaWrench } from "react-icons/fa";

type NavMenuItem = {
    icon: IconType;
    color: string;
};

export const NAV_MENUS: NavMenuItem[] = [
    { icon: FaHome, color: "bg-teal-400" },
    { icon: FaUser, color: "bg-green-400" },
    { icon: FaUpload, color: "bg-blue-400" },
    { icon: FaWrench, color: "bg-purple-400" },
];

export const PARTICLE_COLORS = [
    "text-yellow-300",
    "text-orange-300",
    "text-red-300",
    "text-pink-300",
    "text-amber-300",
    "text-sky-300",
];

export const BASE_WIDTH = 450;