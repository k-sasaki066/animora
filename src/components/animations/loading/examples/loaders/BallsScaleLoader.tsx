import { motion } from "framer-motion";

interface Props {
    paused?: boolean;
}

export default function BallsScaleLoader({ paused = false }: Props) {
    const opacities = paused ? [1, 0.5, 0.25] : [];

    return (
        <div className="flex justify-center items-center space-x-2 w-12 h-12 text-purple-600">
            {[0, 0.33, 0.66].map((delay, i) => (
                <motion.div
                    key={i}
                    className="w-4 h-4 bg-purple-600 rounded-full"
                    animate={
                        paused
                            ? { opacity: opacities[i] }
                            : { opacity: [1, 0.25, 0.25, 1] }
                    }
                    transition={
                        paused
                            ? { duration: 0 }
                            : {
                                repeat: Infinity,
                                duration: 1,
                                ease: "linear",
                                times: [0, 0.33, 0.66, 1],
                                delay,
                            }
                    }
                />
            ))}
        </div>
    );
}