import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function SlideImage() {
    const { active, bind } = useToggleHover();

    return (
        <motion.div
            className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden"
            initial="rest"
            animate={active ? "hover" : "rest"}
            {...bind}
            variants={{
                rest: {},
                hover: {},
            }}
        >
            <motion.img
                alt=""
                src="/images/samples/sample-16.webp"
                className="absolute top-0 left-0 min-w-[120%] h-full object-cover"
                variants={{
                    rest: {
                        x: 0,
                        transition: {
                            duration: 2,
                            ease: "easeOut"
                        }
                    },
                    hover: {
                        x: "-15%",
                        transition: {
                            duration: 2,
                            ease: "easeOut"
                        }
                    },
                }}
            />
        </motion.div>
    );
}