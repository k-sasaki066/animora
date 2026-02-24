"use client";

import { motion } from "framer-motion";

const color = "#DFBA69";

export default function StarRibbon() {
    const darken = (hex: string, amount = 0.35) => {
        const num = parseInt(hex.replace("#", ""), 16);
        let r = (num >> 16) - 255 * amount;
        let g = ((num >> 8) & 0x00ff) - 255 * amount;
        let b = (num & 0x0000ff) - 255 * amount;
        r = Math.max(0, Math.min(255, r));
        g = Math.max(0, Math.min(255, g));
        b = Math.max(0, Math.min(255, b));
        return `rgb(${r},${g},${b})`;
    };

    const darkColor = darken(color);

    return (
        <div className="relative w-full h-full bg-gray-100 shadow-md box-border z-0">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute top-2 left-2 w-[10%] min-w-9"
            >
                <div className="relative w-full aspect-square">
                    {/* 下リボン */}
                    <div
                        className="absolute left-0 top-1/2 w-full aspect-square"
                        style={{
                            background: darkColor,
                            clipPath:
                                "polygon(calc(100%/3) 0,calc(200%/3) 0,100% 90%,80% 85%,calc(200%/3) 100%,calc(100%/3) 0,calc(200%/3) 0,calc(100%/3) 100%,20% 85%,0 90%)",
                        }}
                    />

                    {/* 星型バッジ本体 */}
                    <div
                        className="absolute inset-0 grid place-items-center text-center z-10"
                        style={{
                            background: `
                                radial-gradient(35% 35%,transparent 96%,rgba(0,0,0,0.2) 97% 99%,transparent),
                                ${color}
                            `,
                            clipPath:
                                "polygon(100% 50%,89.23% 57.8%,96.19% 69.13%,83.26% 72.22%,85.36% 85.36%,72.22% 83.26%,69.13% 96.19%,57.8% 89.23%,50% 100%,42.2% 89.23%,30.87% 96.19%,27.78% 83.26%,14.64% 85.36%,16.74% 72.22%,3.81% 69.13%,10.77% 57.8%,0% 50%,10.77% 42.2%,3.81% 30.87%,16.74% 27.78%,14.64% 14.64%,27.78% 16.74%,30.87% 3.81%,42.2% 10.77%,50% 0%,57.8% 10.77%,69.13% 3.81%,72.22% 16.74%,85.36% 14.64%,83.26% 27.78%,96.19% 30.87%,89.23% 42.2%)",
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
