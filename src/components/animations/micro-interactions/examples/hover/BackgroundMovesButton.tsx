import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function BackgroundMovesButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.button
            className="flex justify-center items-center w-40 h-12 rounded-sm border-3 font-bold bg-transparent border-[#e5e5e5] text-[#9ca3af] transition-all duration-300 cursor-pointer"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
            variants={{
                rest: {
                    backgroundPosition: "0px 0px",
                    backgroundSize: "12px 16px",
                    borderColor: "#e5e5e5",
                    color: "#9ca3af",
                    backgroundImage: "repeating-linear-gradient(-25deg, #fff, #fff 3px, transparent 4px, transparent 7px)"
                },
                hover: {
                    borderColor: "#50514f",
                    color: "#50514f",
                    backgroundPosition: ["0px 0px", "400px 0px"],
                    backgroundImage: "repeating-linear-gradient(-25deg, #e5e5e5, #e5e5e5 3px, transparent 4px, transparent 7px)"
                }
            }}
            transition={{
                backgroundPosition: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                },
                duration: 0.8,
            }}
        >
            BUTTON
        </motion.button>
    );
}