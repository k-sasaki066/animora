import { useState } from "react";
import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { FaHome, FaPhone, FaPlane, FaSnowflake, FaBatteryFull, FaCode } from "react-icons/fa";

const icons = [
    FaHome,
    FaPhone,
    FaPlane,
    FaSnowflake,
    FaBatteryFull,
    FaCode,
];

// 基準サイズ（px）
const BASE_WIDTH = 350;

export default function NeumorphismButton() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    const size = 60 * scale;
    const gap = 20 * scale;
    const padding = 18 * scale;
    const iconSize = 24 * scale;

    const [active, setActive] = useState<number[]>([]);

    const toggle = (index: number) => {
        setActive(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div
            ref={ref}
            className="w-full h-full flex items-center justify-center"
        >
            <ul
                style={{
                    gap,
                    padding,
                    gridTemplateColumns: `repeat(3, ${size}px)`
                }}
                className="max-w-130 grid justify-center rounded-xl bg-[#ebf5fc] shadow-[-2px_-2px_5px_rgba(255,255,255,1),3px_3px_5px_rgba(0,0,0,0.1)]"
            >
                {icons.map((Icon, i) => {
                    const isActive = active.includes(i);

                    return (
                        <li key={i}>
                            <button onClick={() => toggle(i)}>
                                <motion.div
                                    style={{
                                        width: size,
                                        height: size,
                                    }}
                                    className="rounded-xl flex items-center justify-center bg-[#ebf5fc]"
                                    animate={{
                                        boxShadow: isActive
                                        ? "inset -2px -2px 5px rgba(255,255,255,1), inset 3px 3px 5px rgba(0,0,0,0.1)"
                                        : "-2px -2px 5px rgba(255,255,255,1), 3px 3px 5px rgba(0,0,0,0.1)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }}
                                >
                                    <motion.div
                                        className="text-[#6a9bd8]"
                                        style={{ fontSize: iconSize }}
                                        animate={{
                                            scale: isActive ? 0.95 : 1
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300
                                        }}
                                    >
                                        <Icon />
                                    </motion.div>
                                </motion.div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}