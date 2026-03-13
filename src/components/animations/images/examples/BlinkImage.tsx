import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function BlinkImage() {
    const { active, bind } = useToggleHover();

    return (
        <div className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <img
                src="/images/sample-32.webp"
                alt=""
                className="w-full h-full object-cover"
            />

            <motion.div
                {...bind}
                className="absolute inset-0 bg-gray-200 opacity-0"
                initial="rest"
                animate={active ? "hover" : "rest"}
                variants={{
                    rest: {
                        opacity: 0
                    },
                    hover: {
                        opacity: [0, 0.6, 0],
                        transition: { duration: 1, repeat: Infinity },
                    }
                }}
            />
        </div>
    );
}