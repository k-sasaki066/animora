import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function RotateButton() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative px-8 py-4 bg-transparent text-purple-600 w-40 h-12 cursor-pointer flex justify-center items-center"
            initial="initial"
            animate={active ? "hover" : "initial"}
            {...bind}
        >
            {/* 外枠（時計回り） */}
            <motion.div
                className="absolute inset-0 border border-purple-300 pointer-events-none"
                style={{
                    margin: "auto",
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
                                duration: 1.6,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        },
                    },
                }}
            />

            {/* 内枠（反時計回り） */}
            <motion.div
                className="absolute inset-0 border border-purple-300 pointer-events-none"
                style={{
                    margin: "auto",
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
                                duration: 2,
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