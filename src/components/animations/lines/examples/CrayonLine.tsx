"use client";

import { motion } from "framer-motion";

export default function CrayonLine() {

    return (
        <motion.div
            className="h-0.75 w-[60%] border-0 bg-repeat-x"
            style={{
                backgroundSize: "0.7em 0.3em, 1.7em 0.3em, 3.5em 0.3em, 3.7em 0.3em",
                backgroundImage: `
                    radial-gradient(0.3em 0.2em at center center, #94c79e, rgba(246,89,115,0)),
                    radial-gradient(0.5em 0.2em at center center, #94c79e, rgba(246,89,115,0)),
                    radial-gradient(0.8em 0.2em at center center, #94c79e, rgba(246,89,115,0)),
                    radial-gradient(7.2em 0.2em at center center, #94c79e, rgba(246,89,115,0))
                `,
                backgroundPosition: "right bottom",
            }}
        />
    );
}