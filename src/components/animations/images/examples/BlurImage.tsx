import { useToggleHover } from "@/hooks/useToggleHover";
import { motion } from "framer-motion";

export default function BlurImage() {
    const { active, bind } = useToggleHover();

    return (
        <div className="w-full aspect-video max-w-sm mx-auto overflow-hidden">
            <motion.img
                {...bind}
                src="/images/sample-07.webp"
                alt=""
                className="w-full h-full object-cover"
                initial="rest"
                animate={active ? "hover" : "rest"}
                variants={{
                    rest: {
                        filter: "blur(0px)"
                    },
                    hover: {
                        filter: ["blur(0px)", "blur(2px)"]
                    }
                }}
                transition={{
                    duration: 0.25,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}