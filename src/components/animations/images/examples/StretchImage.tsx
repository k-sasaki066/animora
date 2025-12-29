"use client"

import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function StretchImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 16,
        max: 24,
        ratio: 0.08,
    });

    const badgeSize = scaleText(width, {
        min: 8,
        max: 16,
        ratio: 0.06,
    });

    const lineWidth = scaleText(width, {
        min: 24,
        max: 80,
        ratio: 0.24,
    });

    return (
        <motion.figure
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-black text-white shadow-md"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <motion.div
                className="absolute inset-0"
                variants={{
                    rest: {
                        opacity: 0.9,
                        scale: 1
                    },
                    hover: {
                        opacity: 0.15,
                        scale: 1.1
                    },
                }}
                transition={{ duration: 0.4 }}
                >
                <img
                    src="/lavender.jpg"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.figcaption
                className="absolute left-[7%] right-[7%] border-white"
                style={{
                    borderLeftWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                }}
                variants={{
                    rest: {
                        top: "10%",
                        bottom: "80%"
                    },
                    hover: {
                        top: "10%",
                        bottom: "10%"
                    },
                }}
                transition={{ duration: 0.4 }}
            >

                <div className="w-full flex flex-col items-center relative -translate-y-2">
                    <span
                        className="absolute border-t border-white top-2 right-0"
                        style={{
                            width: `${lineWidth}px`,
                        }}
                    ></span>

                    <h3
                        className="absolute -top-2 font-light z-20"
                        style={{
                            fontSize: `${titleSize}px`,
                        }}
                    >
                        HELLO!
                    </h3>

                    <span
                        className="absolute border-t border-white top-2 left-0"
                        style={{
                            width: `${lineWidth}px`,
                        }}
                    ></span>
                </div>

                <motion.p
                    className="px-4 inset-0 w-full h-full flex justify-center items-center"
                    style={{
                        fontSize: `${badgeSize}px`,
                    }}
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.45 }}
                >
                    Displays on a layer when hovered.
                </motion.p>
            </motion.figcaption>
        </motion.figure>
    );
}