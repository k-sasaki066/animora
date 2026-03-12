import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const text = "Twist Text";

export default function TwistInText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            {/* アクセシビリティ用 */}
            <span className="sr-only">{text}</span>

            <div
                aria-hidden
                className="font-bold overflow-hidden"
                style={{ fontSize }}
            >
                {text.split("").map((char, index) =>
                    char === " " ? (
                        <motion.span
                            key={index}
                            className="inline-block whitespace-pre"
                        >
                            {"\u00A0"}
                        </motion.span>
                    ) : (
                        <motion.span
                            key={index}
                            className="inline-block"
                            initial={{
                                y: "-110%",
                                rotate: -45,
                            }}
                            animate={
                                active
                                ? { y: "0%", rotate: 0 }
                                : { y: "-110%", rotate: -45 }
                            }
                            transition={{
                                duration: 0.6,
                                ease: [0.77, 0, 0.175, 1],
                                delay: index * 0.02,
                            }}
                        >
                            {char}
                        </motion.span>
                    )
                )}
            </div>
        </div>
    );
}