import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function RainbowArcPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const RainbowWidth = width ? Math.min(width * 0.44, 180) : 100;
    const RainbowHeight = Math.min(RainbowWidth / 2, 90);

    return (
        <div
            ref={ref}
            className="w-full h-full flex justify-center items-center"
        >
            <div
                className="relative overflow-hidden rounded-t-full"
                style={{
                    width: RainbowWidth,
                    height: RainbowHeight,
                }}
            >
                <motion.div
                    className="absolute inset-x-0  -bottom-full w-full h-[200%] rotate-0"
                    style={{
                        background:
                            "radial-gradient(farthest-side at top,#0000 40%, #e9d5ff, #dbeafe, #ccfbf1, #dcfce7, #fef9c3, #ffedd5, #fee2e2, #0000)", //円形や楕円形に広がるグラデーション
                        backgroundSize: "100% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom",
                    }}
                    animate={{
                        rotate: 180,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.4, 0.6, 1],
                        repeatDelay: 1,
                    }}
                />
            </div>
        </div>
    );
}