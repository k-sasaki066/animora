import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function HoverOutlineButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative w-40 h-12 cursor-pointer"
            initial="initial"
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* SVG の線 */}
            <motion.svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 150 40"
                fill="none"
            >
                <motion.rect
                    x="3"
                    y="3"
                    width="144"
                    height="34"
                    rx="4"
                    stroke="#009FFD"
                    strokeWidth={2}
                    variants={{
                        initial: {
                            strokeDasharray: "85 400",
                            strokeDashoffset: -200,
                            stroke: "#009FFD",
                        },
                        hover: {
                            strokeDasharray: "50 0",
                            strokeDashoffset: 0,
                            stroke: "#06D6A0",
                            transition: { duration: 1, ease: "easeInOut" },
                        },
                    }}
                    className="hover:stroke-1"
                />
            </motion.svg>

            {/* テキスト */}
            <span className="absolute inset-0 text-gray-600 font-light flex justify-center items-center">
                BUTTON
            </span>
        </motion.div>
    );
}