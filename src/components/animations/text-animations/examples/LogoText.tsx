"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOGO_TEXT = "animation";
const RANDOM_CHARS = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";

export default function LogoAnimation() {
    const [displayText, setDisplayText] = useState("");
    const [visible, setVisible] = useState(false);

    const play = () => {
        setVisible(true);
        let frame = 0;

        const interval = setInterval(() => {
            let result = "";
            for (let i = 0; i < LOGO_TEXT.length; i++) {
                if (i < frame) {
                    result += LOGO_TEXT[i];
                } else {
                    result += RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
                }
            }

            setDisplayText(result);
            frame++;

            if (frame > LOGO_TEXT.length) {
                setDisplayText(LOGO_TEXT);
                clearInterval(interval);

                // 次の再生（少し間を空ける）
                setTimeout(() => {
                    setDisplayText("");
                    setVisible(false);
                    play();
                }, 1500);
            }
        }, 70);
    };

    useEffect(() => {
        const timer = setTimeout(play, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full flex justify-center">
            {/* テキスト */}
            <motion.div
                className="font-bold text-gray-600 text-[3vw] text-center"
                style={{
                    fontFamily: "Dosis, sans-serif",
                    width: `${LOGO_TEXT.length}ch`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
            >
                {displayText}
            </motion.div>
        </div>
    );
}