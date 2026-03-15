import { useId, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useCarouselStep } from "./useCarouselStep";
import { steps } from "./steps";

const BASE_WIDTH = 420;

export default function CarouselStep() {
    const inputId = useId();

    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;

    const {
        reduce,
        step,
        phase,
        formData,
        setFormData,
        errors,
        isSubmitting,
        handleSubmit,
        reset,
    } = useCarouselStep();

    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        headingRef.current?.focus();
    }, [step]);

    const CurrentStep = steps[step].component;

    return (
        <div ref={ref} className="w-full h-full bg-orange-300 overflow-y-auto no-scrollbar">
            <motion.div className="min-w-57.5 w-[70%] h-full mx-auto mt-4 relative origin-top" animate={{scale}}>
                {/* Modal Wrapper */}
                <motion.div
                    animate={
                        phase === "done"
                        ? { y: -500, rotate: 30, opacity: 0 }
                        : { y: 0, rotate: 0, opacity: 1 }
                    }
                    transition={
                        reduce
                            ? { duration: 0 }
                                : phase === "done"
                                ? { duration: 0.6 }
                                : { duration: 0 }
                    }
                    className="relative"
                >
                    {/* Header Dots */}
                    <div
                        role="progressbar"
                        aria-valuenow={step + 1}
                        aria-valuemin={1}
                        aria-valuemax={steps.length}
                        className="h-12 bg-white border-b flex items-center justify-center"
                    >
                        {steps.map((_, index) => (
                            <span
                                key={index}
                                className={`h-3 w-3 mx-1 rounded-full transition-all
                                    ${step === index
                                        ? "bg-orange-500"
                                        : "bg-black/20"
                                    }
                                `}
                            />
                        ))}
                    </div>

                    {/* Body */}
                    <form
                        noValidate
                        onSubmit={handleSubmit}
                        className="relative perspective-[1000px] min-h-80"
                    >
                        <AnimatePresence mode="wait">
                            {phase !== "done" && (
                                <motion.div
                                    key={step}
                                    role="region"
                                    aria-labelledby={`step-title-${step}`}
                                    initial={{ opacity: 1, rotateX: -90, y: 0, rotate: 0 }}
                                    animate={{ opacity: 1, rotateX: 0 }}
                                    exit={{
                                        rotate: [0, 15, 30, 80],
                                        y: [0, 0, 0, 800],
                                        opacity: [1, 1, 1, 0]
                                    }}
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            : {
                                                duration: 0.9,
                                                times: [0, 0.3, 0.6, 1],
                                                ease: ["easeOut", "easeIn", "easeIn", "easeIn"]
                                            }
                                    }
                                    className="bg-white px-4 py-3 shadow-2xl absolute w-full origin-top-left"
                                >
                                    <h2
                                        ref={headingRef}
                                        id={`step-title-${step}`}
                                        tabIndex={-1} className="text-center text-orange-400 text-xl mb-3 uppercase tracking-wide font-light"
                                    >
                                        {steps[step].title}
                                    </h2>

                                    <p className="text-center text-gray-500 mb-2">
                                        {steps[step].description}
                                    </p>

                                    <CurrentStep
                                        inputId={inputId}
                                        formData={formData}
                                        setFormData={setFormData}
                                        errors={errors}
                                        reduce={reduce}
                                    />

                                    <div className="text-center mt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-5 py-2 bg-orange-500 text-white rounded uppercase tracking-wide hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                        >
                                            {step === 2
                                                ? isSubmitting
                                                    ? "Sending..."
                                                    : "Send"
                                                : "Next"
                                            }
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>

                {/* Rerun Button */}
                <AnimatePresence>
                    {phase === "done" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : { duration: 0.4, delay: 0.2 }
                            }
                            className="absolute inset-0 flex items-center justify-center text-center mt-10"
                        >
                            <button
                                onClick={reset}
                                className="px-6 py-3 border border-white/60 shadow-lg bg-orange-500 text-white uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            >
                                ReRun
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
