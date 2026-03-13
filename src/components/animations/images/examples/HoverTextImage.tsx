import { motion } from "framer-motion";
import { scaleText } from "@/utils/scaleText";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function HoverTextImage() {
    const { ref, width } = useContainerSize<HTMLDivElement>();

    const circleSize = scaleText(width, {
        min: 48,
        max: 102,
        ratio: 0.2
    });

    const textSize = scaleText(width, {
        min: 8,
        max: 18,
        ratio: 0.05
    });

    const { active, bind } = useToggleHover();

    return (
        <motion.div
            ref={ref}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="initial"
            animate={active ? "hover" : "initial"}
            variants={{
                initial: {},
                hover: {},
            }}
            {...bind}
        >
            <img
                alt=""
                src="/images/sample-10.webp"
                className="w-full h-full object-cover"
            />

            <motion.div
                className="
                absolute left-1/2 top-1/2
                bg-black/60 text-white text-sm rounded-full flex justify-center items-center"
                style={{
                    width: `${circleSize}px`,
                    height: `${circleSize}px`,
                    fontSize: `${textSize}px`,
                }}
                variants={{
                    initial: {
                        opacity: 0,
                        scale: 0.5,
                        x: "-50%",
                        y: "-50%"
                    },
                    hover: {
                        opacity: 1,
                        scale: 1,
                        x: "-50%",
                        y: "-50%"
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                VIEW →
            </motion.div>
        </motion.div>
    );
}