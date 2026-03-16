import { motion } from "framer-motion";
import { useState } from "react";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
    weight: "900",
    subsets: ["latin"],
});

const images = [
    "https://i.imgur.com/hkqNXDo.jpeg",
    "https://i.imgur.com/XFTODrD.jpeg",
];

export default function ShineTextBackground() {
    const [index, setIndex] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center w-full aspect-video space-y-6 bg-black">
            {/* Shine Text */}
            <motion.h1
                className={`
                ${montserrat.className}
                text-[5vw] font-black tracking-[1vw]
                text-transparent bg-clip-text
                `}
                style={{
                    backgroundImage: `url(${images[index]})`,
                    backgroundSize: "auto 200%",
                }}
                animate={{
                    backgroundPositionY: ["0%", "200%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                COOL
            </motion.h1>

            {/* Image Switch Button */}
            <button
                onClick={() => setIndex((prev) => (prev + 1) % images.length)}
                className="px-4 py-2 rounded-md bg-purple-600 text-white text-[1vw] hover:bg-purple-700 transition"
            >
                Change Texture
            </button>
        </div>
    );
}