import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";
import { lighten } from "@/utils/color";

export default function FlowTextButton({
    speed = 0.3,
    color = "#16A34A",
}: ButtonParams) {
    const { active, bind } = useToggleHover();
    const arrowColor = lighten(color, 0.25);

    return (
        <motion.div
            className="relative group rounded-md overflow-hidden w-40 h-12 cursor-pointer flex justify-center items-center"
            style={{
                backgroundColor: color,
            }}
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
            variants={{
                rest: {},
                hover: {}
            }}
        >
            <motion.span
                className="text-white font-semibold"
                variants={{
                    rest: { x: 0 },
                    hover: { x: -16 },
                }}
                transition={{
                    type: "tween",
                    duration: speed
                }}
            >
                HOVER
            </motion.span>

            {/* Hover Arrow */}
            <motion.div
                className="absolute -right-7 h-12 py-2 px-2 text-xl text-white z-10"
                style={{
                    backgroundColor: arrowColor,
                    opacity: 0.75
                }}
                initial={{ x: 0 }}
                variants={{
                    rest: { x: 0 },
                    hover: { x: -28 },
                }}
                transition={{ duration: speed }}
            >
                &raquo;
            </motion.div>
        </motion.div>
    );
}