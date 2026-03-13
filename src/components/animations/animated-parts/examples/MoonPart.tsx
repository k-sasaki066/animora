import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function MoonPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const color = "#fecfef";
    const size = width ? Math.min(width * 0.22, 80): 50;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="flex items-center justify-center"
                animate={{
                    filter: [
                    `drop-shadow(0 0 1px ${color})`,
                    `drop-shadow(0 0 16px ${color})`,
                    ],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                }}
            >
                <div
                    className="rounded-full"
                    style={{
                        width: size,
                        height: size,
                        WebkitMask:
                            "radial-gradient(circle closest-side at 66% 40%, transparent 115%, black 118%)",
                        mask:
                            "radial-gradient(circle closest-side at 66% 40%, transparent 115%, black 118%)",
                        background: `
                            radial-gradient(
                                circle at 30% 30%,
                                #ffe6f3 0%,
                                #f6c1e6 35%,
                                #d8c8f2 60%,
                                #c7e6ff 85%,
                                #b5dcff 100%
                            )
                        `,
                    }}
                />
            </motion.div>
        </div>
    );
}