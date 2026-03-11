import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function FlowTextButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative group rounded-md overflow-hidden bg-green-600 w-40 h-12 cursor-pointer flex justify-center items-center"
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
                    duration: 0.3
                }}
            >
                HOVER
            </motion.span>

            {/* Hover Arrow */}
            <motion.div
                className="absolute -right-7 h-12 py-2 px-2 text-xl text-white bg-green-400/75 z-10"
                initial={{ x: 0 }}
                variants={{
                    rest: { x: 0 },
                    hover: { x: -28 },
                }}
                transition={{ duration: 0.3 }}
            >
                &raquo;
            </motion.div>
        </motion.div>
    );
}