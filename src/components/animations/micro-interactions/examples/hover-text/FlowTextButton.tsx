import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

function lighten(hex: string, amount = 0.2) {
    hex = hex.replace("#", "");

    const num = parseInt(hex, 16);
    let r = (num >> 16) + 255 * amount;
    let g = ((num >> 8) & 0x00ff) + 255 * amount;
    let b = (num & 0x0000ff) + 255 * amount;

    r = Math.min(255, Math.floor(r));
    g = Math.min(255, Math.floor(g));
    b = Math.min(255, Math.floor(b));

    return `rgb(${r}, ${g}, ${b})`;
}

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