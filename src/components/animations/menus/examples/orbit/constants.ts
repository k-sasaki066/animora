import { IconType } from "react-icons";
import { FaUser, FaHeart, FaEnvelope, FaTools } from "react-icons/fa";

export const BASE_WIDTH = 480;

export const NAV_MENUS: { name: string; icon: IconType }[] = [
    { name: 'profile', icon: FaUser },
    { name: 'like', icon: FaHeart },
    { name: 'message', icon: FaEnvelope },
    { name: 'tools', icon: FaTools }
];

export const BUTTON_MOVE = { x: 16, y: 16 };

export const ITEM_POSITIONS = [
        { x: 128, y: 5 }, // profile
        { x: 125, y: 70 }, // like
        { x: 75, y: 116 }, // message
        { x: 10, y: 125 } // tools
    ];