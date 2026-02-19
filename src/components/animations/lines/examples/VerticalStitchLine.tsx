"use client";

import { motion } from "framer-motion";

export default function VerticalStitchLine() {
    return (
        <motion.div
            className="h-2 w-[60%] bg-[repeating-linear-gradient(90deg,#9e9e9e_0px,#9e9e9e_1px,transparent_1px,transparent_4px)]"
            style={{ backgroundSize: "8px 100%" }}
        />
    );
}