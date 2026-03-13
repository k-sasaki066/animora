import { useToggleHover } from "@/hooks/useToggleHover";
import { motion } from "framer-motion";

export default function OverlayImage() {
    const { active, bind } = useToggleHover();

    return (
        <div className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <img
                alt=""
                src="/images/sample-09.webp"
                className="w-full h-full object-cover"
            />

            <motion.div
                {...bind}
                className="absolute inset-0 bg-gray-600"
                initial="rest"
                animate={active ? "hover" : "rest"}
                variants={{
                    rest: {
                        opacity: 0
                    },
                    hover: {
                        opacity: 0.6
                    }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}