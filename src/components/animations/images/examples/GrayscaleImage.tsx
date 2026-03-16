import { useToggleHover } from "@/hooks/useToggleHover";
import { motion } from "framer-motion";

export default function GrayscaleImage() {
    const { active, bind } = useToggleHover();

    return (
        <div className="w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <motion.img
                {...bind}
                src="./images/samples/sample-06.webp"
                alt=""
                className="w-full h-full object-cover"
                initial="rest"
                animate={active ? "hover" : "rest"}
                variants={{
                    rest: {
                        filter: "grayscale(0%)"
                    },
                    hover: {
                        filter: "grayscale(80%)"
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