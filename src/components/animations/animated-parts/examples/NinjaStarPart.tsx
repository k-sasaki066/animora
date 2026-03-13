import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";

export default function NinjaStarPart() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const size = width ? Math.min(width * 0.3, 100): 68;

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                className="
                    bg-[#3e445d]
                    [clip-path:polygon(100%_50%,64.14%_64.14%,50%_100%,35.86%_64.14%,0%_50%,35.86%_35.86%,50%_0%,64.14%_35.86%)]
                    [mask:radial-gradient(circle_5px,transparent_90%,black)]
                "
                style={{
                    width: size,
                    height: size,
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1.8,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
        </div>
    );
}