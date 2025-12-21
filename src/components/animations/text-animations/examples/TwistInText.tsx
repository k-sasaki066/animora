"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Text Animation";

export default function TwistInText() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
        const interval = setInterval(() => {
            setActive((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full px-4 flex items-center justify-center overflow-hidden ">
            {/* アクセシビリティ用 */}
            <span className="sr-only">{text}</span>

            <div
                aria-hidden
                className="flex font-mono text-[3vw] font-bold"
            >
                {text.split("").map((char, index) =>
                    char === " " ? (
                        <span key={index} className="w-[0.6em]" />
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