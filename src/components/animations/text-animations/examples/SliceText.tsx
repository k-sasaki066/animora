import { motion, Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

export default function SliceText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const [active, setActive] = useState(false);
    const text = "SLICE ANIMATION";

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => !prev);
        }, 3200);

        return () => clearInterval(timer);
    }, []);

    const transition: Transition = {
        duration: 0.4,
        ease: [0.165, 0.84, 0.44, 1],
    };

    const slices = [
        {
            mask: "linear-gradient(to bottom, black 33.3%, transparent 33.3%)",
            startX: "-110%",
            skew: 40,
        },
        {
            mask: "linear-gradient(to bottom, transparent 33.3%, black 33.3%, black 66.6%, transparent 66.6%)",
            startX: "110%",
            skew: -40,
        },
        {
            mask: "linear-gradient(to bottom, transparent 66.6%, black 66.6%)",
            startX: "-110%",
            skew: 40,
        },
    ];

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <div
                className="relative font-bold leading-none overflow-hidden"
                style={{ fontSize }}
            >

                {/* ベース文字 */}
                <div className="opacity-0 select-none">
                    {text}
                </div>

                {/* slices */}
                {slices.map((slice, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            WebkitMaskImage: slice.mask,
                        }}
                        animate={{
                            x: active ? 0 : slice.startX,
                            skewX: active ? 0 : slice.skew,
                        }}
                        transition={transition}
                    >
                        {text}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}







