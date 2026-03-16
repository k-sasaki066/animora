import { useToggleHover } from "@/hooks/useToggleHover";
import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function MosaicImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 16,
        max: 24,
        ratio: 0.08,
    });

    const badgeSize = scaleText(width, {
        min: 10,
        max: 20,
        ratio: 0.08,
    });

    const { active, bind } = useToggleHover();

    return (
        <motion.div
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden text-white font-sans"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            <img
                src="/images/samples/sample-22.webp"
                alt=""
                className="w-full h-full object-cover"
            />

            {/* 上下の黒帯アニメーション */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1/4 bg-black"
                initial={{
                    scaleX: 0,
                    opacity: 0
                }} //中央に圧縮
                variants={{
                    hover: {
                        scaleX: 1,
                        opacity: 0.8
                    },
                    rest: {
                        scaleX: 0,
                        opacity: 0
                    },
                }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0.5 }}
            />

            <motion.div
                className="absolute top-1/4 left-0 right-0 h-1/4 bg-black opacity-0"
                initial={{
                    scaleX: 0,
                    opacity: 0
                }}
                variants={{
                    hover: {
                        scaleX: 1,
                        opacity: 0.8
                    },
                    rest: {
                        scaleX: 0,
                        opacity: 0
                    },
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.1
                }}
                style={{ originX: 0.5 }}
            />

            <motion.div
                className="absolute top-1/2 left-0 right-0 h-1/4 bg-black opacity-0"
                initial={{
                    scaleX: 0,
                    opacity: 0
                }}
                variants={{
                    hover: {
                        scaleX: 1,
                        opacity: 0.8
                    },
                    rest: {
                        scaleX: 0,
                        opacity: 0
                    },
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.2
                }}
                style={{ originX: 0.5 }}
            />

            <motion.div
                className="absolute top-3/4 left-0 right-0 h-1/4 bg-black opacity-0"
                initial={{
                    scaleX: 0,
                    opacity: 0
                }}
                variants={{
                    hover: {
                        scaleX: 1,
                        opacity: 0.8
                    },
                    rest: {
                        scaleX: 0,
                        opacity: 0
                    },
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.2
                }}
                style={{ originX: 0.5 }}
            />

            <motion.figcaption
                className="absolute inset-0 p-4 z-10 flex-col text-center flex justify-center items-center"
            >
                <motion.h2
                    className="font-bold leading-none"
                    style={{
                        fontSize: `${titleSize}px`,
                    }}
                    variants={{
                        hover: { opacity: 1 },
                        rest: { opacity: 0 }
                    }}
                    transition={{ delay: 0.25 }}
                >
                    THANKS!
                </motion.h2>

                <motion.p
                    className="mt-1 leading-none"
                    style={{
                        fontSize: `${badgeSize}px`,
                    }}
                    variants={{
                        hover: { opacity: 0.7 }, rest: { opacity: 0 }
                    }}
                    transition={{ delay: 0.25 }}
                >
                    Sample Text
                </motion.p>
            </motion.figcaption>
        </motion.div>
    );
}