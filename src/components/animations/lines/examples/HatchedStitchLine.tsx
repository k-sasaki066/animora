"use client";

import { motion } from "framer-motion";

export default function HatchedStitchLine() {
    return (
        <motion.hr
            className="h-2 w-[60%] border-0 bg-size-[8px_8px]"
            style={{
                backgroundImage: `
                    repeating-linear-gradient(
                        45deg,
                        #e2d1c3 0px,
                        #e2d1c3 1px,
                        rgba(0,0,0,0) 0%,
                        rgba(0,0,0,0) 50%
                    ),
                    repeating-linear-gradient(
                        135deg,
                        #e2d1c3 0px,
                        #e2d1c3 1px,
                        rgba(0,0,0,0) 0%,
                        rgba(0,0,0,0) 50%
                    )
                `,
            }}
        />
    );
}