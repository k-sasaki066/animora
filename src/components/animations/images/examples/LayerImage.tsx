import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function LayerImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 16,
        max: 28,
        ratio: 0.08,
    });

    const badgeSize = scaleText(width, {
        min: 8,
        max: 20,
        ratio: 0.06,
    });

    const padding = scaleText(width, {
        min: 12,
        max: 32,
        ratio: 0.08,
    });

    const { active, bind } = useToggleHover();

    return (
        <motion.figure
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-black"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            <motion.img
                alt=""
                src="/images/samples/sample-23.webp"
                className="w-full h-full object-cover"
                variants={{
                    hover: {
                        opacity: 0.5,
                        scale: 1.05
                    },
                }}
                transition={{ duration: 0.4 }}
            />

            {/* 黒いオーバーレイ */}
            <motion.div
                className="absolute inset-0 bg-black/60 opacity-0"
                variants={{
                    hover: {
                        opacity: 1,
                        inset: "10px"
                    },
                }}
                transition={{ duration: 0.4 }}
            />

            {/* テキスト */}
            <motion.figcaption
                className="absolute inset-0 flex flex-col gap-3 justify-center items-center text-white"
                style={{
                    padding: `${padding}px`,
                }}
            >
                <motion.h3
                    className="font-bold opacity-0"
                    style={{
                        fontSize: `${titleSize}px`,
                    }}
                    variants={{
                        hover: {
                            opacity: 1,
                            y: 0
                        },
                    }}
                    transition={{ duration: 0.4 }}
                >
                    HELLO!
                </motion.h3>

                <motion.p
                    className="opacity-0"
                    style={{
                        fontSize: `${badgeSize}px`,
                    }}
                    variants={{
                        hover: {
                            opacity: 1,
                            y: -12
                        },
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 0.1
                    }}
                >
                    Displays on a layer when hovered.
                </motion.p>
            </motion.figcaption>
        </motion.figure>
    );
}