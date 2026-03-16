import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function ReductionImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 12,
        max: 24,
        ratio: 0.06,
    });

    const badgeSize = scaleText(width, {
        min: 10,
        max: 20,
        ratio: 0.05,
    });

    const padding = scaleText(width, {
        min: 6,
        max: 28,
        ratio: 0.05,
    });

    const { active, bind } = useToggleHover();

    return (
        <motion.div
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-gray-900 text-white"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
            variants={{
                rest: {},
                hover: {},
            }}
        >
            <motion.img
                src="/images/samples/sample-29.webp"
                alt=""
                className="absolute left-1/2 -translate-x-1/2"
                variants={{
                    rest: {
                        width: "100%",
                        bottom: "0%",
                    },
                    hover: {
                        width: "50%",
                        bottom: "0%",
                        transition: {
                            duration: 0.35,
                            ease: "easeOut"
                        },
                    },
                }}
            />

            <figcaption
                className="relative z-10 text-center" style={{
                    padding: `${padding}px`,
                }}
            >
                <motion.h2
                    className="uppercase font-semibold"
                    style={{
                        fontSize: `${titleSize}px`,
                    }}
                    variants={{
                    rest: { y: 20, opacity: 0 },
                    hover: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.35 },
                    },
                    }}
                >
                    Title
                </motion.h2>

                <motion.p
                    className="opacity-80 leading-none"
                    style={{
                        fontSize: `${badgeSize}px`,
                    }}
                    variants={{
                    rest: { y: 20, opacity: 0 },
                    hover: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.35,
                            delay: 0.05
                        },
                    },
                    }}
                >
                    Example Text
                </motion.p>
            </figcaption>
        </motion.div>
    );
}