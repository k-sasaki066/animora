"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Step } from "./steps";

interface StepCardProps {
    step: Step;
    index: number;
    current: number;
    nextStep: () => void;
    totalSteps: number;
}

export default function StepCard({ step, index, current, nextStep, totalSteps }: StepCardProps) {
    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const offset = index - current;
    const isActive = offset === 0;

    if (offset < 0) return null;

    const bgColors = [
        "bg-cyan-300",
        "bg-cyan-400",
        "bg-cyan-500",
        "bg-cyan-600",
    ];

    const bgColor = isActive
        ? "bg-white"
        : bgColors[Math.min(offset - 1, bgColors.length - 1)];

    return (
        <motion.div
            role="region"
            aria-labelledby={`step-title-${index}`}
            aria-hidden={!isActive}
            animate={{
                scale: 1 - offset * 0.05,
                y: offset * -16,
                opacity: 1,
            }}
            transition={
                reduce
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 40,
                        damping: 12,
                    }
            }
            className={`absolute left-0 w-full rounded-md shadow-xl p-8 h-full flex flex-col justify-between ${bgColor}`}
            style={{ zIndex: 10 - offset }}
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : { delay: isActive ? 0.2 : 0, duration: 0.4, ease: "easeOut" }
                }
                className="space-y-4"
            >
                <h1
                    className="text-3xl font-bold text-cyan-500"
                    id={`step-title-${index}`}
                >
                    {step.title}
                </h1>

                <p className="text-gray-500">{step.text}</p>

                {isActive && (
                    <motion.button
                        type="button"
                        onClick={nextStep}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        aria-label={`Go to next step: ${step.title}`}
                        className="text-cyan-400 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                    >
                        Next step →
                        <motion.span
                            variants={{
                                rest: { width: "0%" },
                                hover: { width: "80%" }
                            }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : { duration: 0.3, ease: "easeInOut" }
                            }
                            className="absolute left-0 bottom-0 h-0.5 bg-cyan-400"
                        />
                    </motion.button>
                )}
            </motion.div>

            {/* progressbar */}
            {isActive && (
                <div
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={totalSteps}
                    aria-valuenow={current + 1}
                    aria-label={`Step ${current + 1} of ${totalSteps}`}
                    className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-200 rounded-b-md overflow-hidden"
                >
                    <motion.div
                        key={current}
                        initial={{ width: `${(current / totalSteps) * 100}%` }}
                        animate={{ width: `${((current + 1) / totalSteps) * 100}%` }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.4, ease: "easeInOut" }
                        }
                        className="h-full bg-blue-500"
                    />
                </div>
            )}
        </motion.div>
    );
}