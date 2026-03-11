import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";
import { useIsHoverDevice } from "@/hooks/useIsHoverDevice";

export default function FancyTextButton() {
    const { active, bind } = useToggleHover();
    const isDesktop = useIsHoverDevice();

    return (
        <motion.div
            className="relative rounded-sm border border-black  overflow-hidden w-40 h-12 cursor-pointer"
            {...bind}
        >
            {/* 背景 */}
            <motion.div
                className="absolute left-0 w-full h-full bg-black"
                animate={
                    active
                        ? { bottom: 0 }
                        : { bottom: "-100%" }
                }
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            />

            {/* テキスト */}
            <div className="relative z-10 w-full h-full space-x-px flex justify-center items-center">
                {"FANCY".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ color: "#000", y: 0 }}
                        animate={{
                            color: active ? "#fff" : "#000",
                            y: active && !isDesktop ? [0, -6, 0] : 0
                        }}
                        transition={{
                            color: {
                                duration: 0.25,
                                ease: [0.19, 1, 0.22, 1]
                            },
                            y: {
                                delay: active && !isDesktop ? 0.45 + i * 0.05 : 0,
                                duration: active && !isDesktop ? 0.4 : 0.25,
                                ease: "easeOut"
                            }
                        }}
                        whileHover={{ y: -4 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}