import { motion } from "framer-motion";
import { bubbles } from "./bubbles";

export default function FloatingBubblesBackground() {
    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-linear-to-l from-[#8f94fb] to-[#4e54c8]">
            {bubbles.map((bubble, index) => (
                <motion.span
                    key={index}
                    className="absolute -bottom-37.5 bg-white/20"
                    style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: bubble.x,
                    }}
                    animate={{
                        y: -1000,
                        rotate: 720,
                        opacity: 0,
                        borderRadius: "50%",
                    }}
                    transition={{
                        duration: bubble.duration,
                        delay: bubble.delay,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
            ))}
        </div>
    );
}