"use client"

import { useId } from "react";
import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useQuestionStep } from "./useQuestionStep";
import ProgressBar from "./ProgressBar";
import QuestionForm from "./QuestionForm";

const BASE_WIDTH = 375;

const QUESTIONS = [
    "Tell us a little about yourself.",
    "What kind of projects do you enjoy working on?",
    "What technologies are you most comfortable with?",
    "What are you currently learning?",
    "What are your future goals?",
];

export default function QuestionStep() {
    const textareaId = useId();
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.8), 1)
        : 1;

    const {
        reduce,
        answerSchema,
        step,
        direction,
        answers,
        touched,
        error,
        isSubmitting,
        isConfirmStep,
        next,
        previous,
        updateAnswer,
        touchCurrent,
        submit,
    } = useQuestionStep(QUESTIONS);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submit(() => {
            alert("Form submitted successfully!");
        });
    };

    return (
        <div ref={ref} className="w-full h-full bg-[#2e2d2d] overflow-y-auto no-scrollbar">
            <motion.div className="w-full max-w-85 mx-auto origin-top p-4" animate={{scale}}>
                {/* Progress Bar */}
                <ProgressBar
                    total={QUESTIONS.length}
                    currentStep={step}
                />

                {/* FORM */}
                <QuestionForm
                    QUESTIONS={QUESTIONS}
                    step={step}
                    direction={direction}
                    answers={answers}
                    touched={touched}
                    error={error}
                    isSubmitting={isSubmitting}
                    isConfirmStep={isConfirmStep}
                    reduce={reduce}
                    textareaId={textareaId}
                    answerSchema={answerSchema}
                    next={next}
                    previous={previous}
                    updateAnswer={updateAnswer}
                    touchCurrent={touchCurrent}
                    onSubmit={handleSubmit}
                />
            </motion.div>
        </div>
    );
}