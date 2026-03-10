import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function CubeMetronomeLoader({ paused = false }: Props) {

    return (
        <div className="relative flex items-center justify-center w-12 h-12">
            <motion.div
                className="absolute bg-[#ec6ead] rounded-sm"
                style={{ width: 14, height: 14 }}
                animate={
                    paused
                        ? { x: 0 }
                        : { x: [-8, 0, 8, 0, -8] }
                }
                transition={
                    paused
                        ? { duration: 0 }
                        : {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                }
            />
        </div>
    );
}