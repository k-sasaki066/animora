import { useToggleHover } from "@/hooks/useToggleHover";
import { motion } from "framer-motion";

export default function OpacityImage() {
    const { active, bind } = useToggleHover();

    return (
        <div className="w-full aspect-video max-w-md mx-auto overflow-hidden">
            <motion.img
                {...bind}
                src="./images/samples/sample-01.webp"
                alt=""
                className="w-full h-full object-cover"
                initial="rest"
                animate={active ? "hover" : "rest"}
                variants={{
                    rest: {
                        opacity: 1,
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