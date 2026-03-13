import { motion } from "framer-motion";
import { useToggleHover } from "@/hooks/useToggleHover";

export default function Tilt3dImage() {
    const { active, bind, } = useToggleHover();

    return (
        <div
            className="card-box"
            style={{ perspective: 600 }}
        >
            <motion.div
                className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden flex justify-center items-center"
                style={{
                    transformOrigin: "50% 100%", // 下を軸に回転
                }}
                initial="rest"
                animate={active ? "hover" : "rest"}
                variants={{
                    rest: {
                        rotateX: 45
                    },
                    hover: {
                        rotateX: 0
                    }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut"
                }}
                {...bind}
            >
                <motion.img
                    alt=""
                    src="/images/sample-17.webp"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
    );
}