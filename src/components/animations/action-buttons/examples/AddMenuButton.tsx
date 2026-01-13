"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { FILE_ICON, LIST_ICON, PLUS_ICON, RECORDING_ICON, NOTE_ICON
} from "@/assets/svg/icons";

// 基準サイズ（px）
const BASE_WIDTH = 350;

const icons = [
    { name: "file", ...FILE_ICON },
    { name: "list", ...LIST_ICON },
    { name: "center", ...PLUS_ICON },
    { name: "recording", ...RECORDING_ICON},
    { name: "note", ...NOTE_ICON },
];

export default function AddMenuButton() {
    const [open, setOpen] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1.3)
        : 1;
    const buttonDistance = 50; // 中心からの距離

    return (
        <div ref={ref} className="relative w-full h-full flex justify-center items-center">
            <motion.div
                className="absolute bg-[#f273ca] w-12.5 h-12.5 rounded-full flex justify-center items-center"
                animate={{
                    width: open ? 50 + buttonDistance * (icons.length - 1) : 50,
                    scale,
                }}
                transition={{
                    duration: 0.3
                }}
            >
                {icons.map((icon, i) => {
                    // ボタン数の半分を軸にして左右に配置
                    const centerIndex = (icons.length - 1) / 2;
                    const offset = (i - centerIndex) * buttonDistance;

                    const isCenter = icon.name === "center";

                    return (
                        <motion.span
                            key={icon.name}
                            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer"
                            animate={{
                                x: open ? offset : 0,
                                scale: open || isCenter ? 1 : 0,
                                rotate: isCenter ? (open ? 45 : 0) : 0, // 中央ボタンだけ回転
                            }}
                            initial={{
                                scale: 0,
                                x: 0
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            onClick={isCenter ? () => setOpen(!open) : undefined}
                        >
                            <svg viewBox={icon.viewBox} className="w-6 h-6 fill-white">
                                <path d={icon.path} />
                            </svg>
                        </motion.span>
                    );
                })}
            </motion.div>
        </div>
    );
}