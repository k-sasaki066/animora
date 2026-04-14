import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function RotateButton({
    speed = 1.6,
    color = "#D8B4FE",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative px-8 py-4 bg-transparent w-40 h-12 cursor-pointer flex justify-center items-center"
            style={{
                color: color,
            }}
            initial="initial"
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* 外枠（時計回り） */}
            <motion.div
                className="absolute inset-0 border pointer-events-none"
                style={{
                    margin: "auto",
                    borderColor: color,
                }}
                variants={{
                    initial: {
                        width: "100%",
                        height: "100%",
                        rotate: 0,
                        transition: {
                            width: { duration: 0.25, ease: "easeOut" },
                            height: { duration: 0.25, ease: "easeOut" },
                            rotate: { duration: 0.25 },
                        },
                    },
                    hover: {
                        width: 60,
                        height: 60,
                        rotate: 360,
                        transition: {
                            width: { duration: 0.25, ease: "easeOut" },
                            height: { duration: 0.25, ease: "easeOut" },
                            rotate: {
                                duration: speed,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        },
                    },
                }}
            />

            {/* 内枠（反時計回り） */}
            <motion.div
                className="absolute inset-0 border pointer-events-none"
                style={{
                    margin: "auto",
                    borderColor: color,
                }}
                variants={{
                    initial: {
                        width: "100%",
                        height: "100%",
                        rotate: 0,
                        transition: {
                            width: { duration: 0.25, ease: "easeOut" },
                            height: { duration: 0.25, ease: "easeOut" },
                            rotate: { duration: 0.25 },
                        },
                    },
                    hover: {
                        width: 60,
                        height: 60,
                        rotate: -360,
                        transition: {
                            width: { duration: 0.25, ease: "easeOut" },
                            height: { duration: 0.25, ease: "easeOut" },
                            rotate: {
                                duration: speed * 1.2,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        },
                    },
                }}
            />

            <span className="relative z-10">
                ROTATE
            </span>
        </motion.div>
    );
}