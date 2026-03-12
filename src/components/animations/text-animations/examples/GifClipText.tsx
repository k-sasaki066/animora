import { motion } from "framer-motion";
import { useState } from "react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const text = "AWESOME";

export default function GifClipText() {
    const { ref, fontSize } = useResponsiveFontSize<HTMLDivElement>();
    const [value, setValue] = useState(text);

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.div
                contentEditable
                suppressContentEditableWarning
                onInput={(e) => setValue(e.currentTarget.textContent || "")}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="font-bold outline-none select-text cursor-text leading-none bg-clip-text text-transparent"
                style={{
                    backgroundImage:
                    "url(https://media.giphy.com/media/3o6Ztb45EYezY9x9gQ/giphy.gif)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    fontSize
                }}
            >
                {value}
            </motion.div>
        </div>
    );
}