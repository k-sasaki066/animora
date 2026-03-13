import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function ChangeTextImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 16,
        max: 48,
        ratio: 0.12,
    });

    const badgeSize = scaleText(width, {
        min: 10,
        max: 32,
        ratio: 0.1,
    });

    const paddingX = scaleText(width, {
        min: 8,
        max: 32,
        ratio: 0.06,
    });

    const { active, bind } = useToggleHover();

    return (
        <motion.figure
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-black text-white"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            <motion.img
                src="/images/sample-13.webp"
                alt=""
                className="w-full h-full object-cover absolute inset-0"
                variants={{
                    hover: {
                        opacity: 0.3,
                        filter: "grayscale(80%)"
                    },
                    rest: {
                        opacity: 0.8,
                        filter: "grayscale(0%)"
                    }
                }}
            />

            <figcaption className="absolute inset-0 flex flex-col">
                {/* 上段 */}
                <div className="h-1/2 overflow-hidden relative">
                    <motion.p
                        className="absolute bottom-0 left-0"
                        style={{
                            fontSize: `${badgeSize}px`,
                            paddingLeft: `${paddingX}px`,
                            paddingRight: `${paddingX}px`,
                        }}
                        variants={{
                            rest: {
                                opacity: 1,
                                y: 0
                            },
                            hover: {
                                opacity: 0,
                                y: 50
                            }
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        Hello!
                    </motion.p>

                    <motion.p
                        className="absolute bottom-0 left-0"
                        style={{
                            fontSize: `${badgeSize}px`,
                            paddingLeft: `${paddingX}px`,
                            paddingRight: `${paddingX}px`,
                        }}
                        variants={{
                            rest: {
                                opacity: 0,
                                y: 50
                            },
                            hover: {
                                opacity: 1,
                                y: 0
                            }
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        Change
                    </motion.p>
                </div>

                {/* 下段 */}
                <div className="h-1/2 overflow-hidden relative leading-none">
                    <motion.h2
                        className="absolute top-0 left-0 font-bold"
                        style={{
                            fontSize: `${titleSize}px`,
                            paddingLeft: `${paddingX}px`,
                            paddingRight: `${paddingX}px`,
                        }}
                        variants={{
                            rest: {
                                color: "#ffffff"
                            },
                            hover: {
                                color: "#dfa138"
                            }
                        }}
                    >
                        SAMPLE
                    </motion.h2>
                </div>
            </figcaption>

            <a className="absolute inset-0" />
        </motion.figure>
    );
}