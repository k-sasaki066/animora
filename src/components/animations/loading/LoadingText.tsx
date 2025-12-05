import { motion } from "framer-motion";

interface LoadingTextProps {
    className?: string;
    type: "loadingText" | "textSlide";
}

export function LoadingText({ className = "w-12 h-12 text-purple-600", type}: LoadingTextProps) {
    const text = ["L", "o", "a", "d", "i", "n", "g"];
    const animations = {

        loadingText: (
            <div className={`flex justify-center items-center space-x-1 text-3xl font-bold ${className}`}>
                {text.map((char, index) => (
                    <motion.span
                    key={index}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut",
                    }}
                    className={
                        index === 2 ? "text-purple-500" : "text-black"
                    }
                    >
                    {char}
                    </motion.span>
                ))}
            </div>
        ),
        
        textSlide: (
            <div className="relative text-3xl font-bold uppercase tracking-[5px]">
                <span className="text-black">{text}</span>

                <motion.span
                    className="absolute top-0 left-0 text-[#be7cba] border-r-4 border-[#be7cba] whitespace-nowrap overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    }}
                >
                    {text}
                </motion.span>
            </div>
        ),
    };

    return animations[type];
}