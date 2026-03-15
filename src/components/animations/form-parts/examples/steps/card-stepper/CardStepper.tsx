import { useState } from "react";
import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { steps } from "./steps";
import StepCard from "./StepCard";

const BASE_WIDTH = 480;

export default function CardStepper() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;

    const [current, setCurrent] = useState(0);

    const nextStep = () => {
        setCurrent((prev) => (prev + 1) % steps.length);
    };

    return (
        <div ref={ref} className="w-full h-full flex items-center justify-center bg-linear-to-b from-purple-600 to-blue-500 p-2 overflow-y-auto no-scrollbar">
            {/* card */}
            <motion.div className="w-[70%] min-w-58 h-3/4 min-h-50 mx-auto mt-6 relative origin-center" animate={{scale}}>
                {steps.map((step, index) => (
                    <StepCard
                        key={index}
                        step={step}
                        index={index}
                        current={current}
                        nextStep={nextStep}
                        totalSteps={steps.length}
                    />
                ))}
            </motion.div>
        </div>
    );
}