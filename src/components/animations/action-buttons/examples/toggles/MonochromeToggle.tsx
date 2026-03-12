import { motion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function MonochromeToggle() {
    const [isOn, setIsOn] = useState(false);
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.3)
        : 1;

    return (
        <div ref={ref} className="w-full h-full flex items-center justify-center bg-[#ccc]">
            <motion.button
                type="button"
                role="switch"
                aria-checked={isOn}
                onClick={() => setIsOn(v => !v)}
                whileTap={{ y: 1 }}
                className="relative w-48 h-12 rounded-full overflow-hidden"
                animate={{
                    backgroundColor: isOn ? "#1E1E1E" : "#FFFFFF",
                    scale
                }}
            >
                {/* スライド背景 */}
                <motion.div
                    className="absolute top-0 left-0 h-full flex w-[200%] rounded-full z-10"
                    animate={{
                        x: isOn ? "-50%" : "0%"
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                >
                    <div className="w-1/2 h-full bg-black rounded-full" />
                    <div className="w-1/2 h-full bg-white rounded-full" />
                </motion.div>

                {/* ON/OFF文字 */}
                <div className="absolute inset-0 flex items-center justify-between px-5 font-bold text-lg z-10">
                    <span className="text-black">ON</span>
                    <span className="text-white">OFF</span>
                </div>
            </motion.button>
        </div>
    );
}