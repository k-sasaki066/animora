import { useToggleHover } from "@/hooks/useToggleHover";
import { motion } from "framer-motion";

export default function FloatImage() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            {...bind}
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            animate={active ? "hover" : "rest"}
            variants={{
                rest: {
                    y: 0,
                    boxShadow: "0 5px 5px rgba(0,0,0,0.1)"
                },
                hover: {
                    y: -8,
                    boxShadow: "0 10px 10px rgba(0,0,0,0.2)"
                }
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
        >
            <img
                src="./images/samples/sample-05.webp"
                alt=""
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
}