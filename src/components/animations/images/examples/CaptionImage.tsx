import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function CaptionImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const titleSize = scaleText(width, {
        min: 10,
        max: 24,
        ratio: 0.06,
    });

    const lineWidth = scaleText(width, {
        min: 32,
        max: 100,
        ratio: 0.15,
    });

    const bottomOffset = scaleText(width, {
        min: 6,
        max: 32,
        ratio: 0.08,
    });

    const { active, bind } = useToggleHover();

    return (
        <motion.figure
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden bg-[#0c1116] text-white"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
        >
            <motion.img
                src="/images/samples/sample-31.webp"
                alt=""
                className="w-full h-full object-cover"
                variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0.15 },
                }}
                transition={{ duration: 0.35 }}
            />

            <figcaption className="absolute inset-0 flex justify-center items-center">
                <motion.div
                    className="absolute"
                    style={{
                        width: `${lineWidth}px`,
                        height: `${lineWidth}px`,
                    }}
                    variants={{
                        rest: { rotate: -90, opacity: 0 },
                        hover: { rotate: 0, opacity: 0.7 },
                    }}
                    transition={{
                        duration: 0.35,
                        delay: 0.2
                    }}
                >
                    <span className="absolute top-1/2 left-0 right-0 h-px bg-white/70" />
                    <span className="absolute left-1/2 top-0 bottom-0 w-px bg-white/70" />
                </motion.div>

                <motion.p
                    className="absolute tracking-widest"
                    style={{
                        fontSize: `${titleSize}px`,
                        bottom: `${bottomOffset}px`,
                    }}
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.6
                    }}
                >
                    VIEW MORE
                </motion.p>
            </figcaption>
        </motion.figure>
    );
}