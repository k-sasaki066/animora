"use client";

import { motion } from "framer-motion";

export default function PixelHoverButton() {

    return (
        <motion.div
            className="relative border border-red-500 text-black uppercase bg-position-[180px] w-40 h-12 cursor-pointer flex justify-center items-center"
            style={{
                backgroundSize: "180px",
            }}
            whileHover="hover"
            variants={{
                hover: {
                    color: "#ffffff",
                    backgroundImage:
                    "url(https://i.postimg.cc/wBXGXbWN/pixel.png)",
                    backgroundPositionY: [
                        "0px",
                        "-60px",
                        "-120px",
                        "-180px",
                        "-240px",
                        "-300px",
                        "-360px",
                        "-420px",
                        "-480px",
                    ], //コマ送りで背景画像をずらす
                    transition: {
                        duration: 0.8,
                        ease: "linear",
                        times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
                    },
                },
            }}
        >
            Button
        </motion.div>
    );
}