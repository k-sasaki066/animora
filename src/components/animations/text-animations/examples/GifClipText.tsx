"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const text = "AWESOME";

export default function GifClipText() {
    const [value, setValue] = useState(text);

    return (
        <motion.div
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => setValue(e.currentTarget.textContent || "")}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="text-center font-bold outline-none select-text cursor-text
            text-[3vw] leading-none bg-clip-text
            text-transparent"
            style={{
                backgroundImage:
                "url(https://media.giphy.com/media/3o6Ztb45EYezY9x9gQ/giphy.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
        {value}
        </motion.div>
    );
}