import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { z } from "zod";

export const useQuestionStep = (questions: string[]) => {
    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const totalSteps = questions.length;

    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [answers, setAnswers] = useState<string[]>(
        Array(totalSteps).fill("")
    );
    const [touched, setTouched] = useState<boolean[]>(
        Array(totalSteps).fill(false)
    );
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isConfirmStep = step === totalSteps;

    const answerSchema = z
        .string()
        .min(1, "This field is required.")
        .max(100, "Maximum 100 characters allowed.");

    const validate = (value: string) => {
        const result = answerSchema.safeParse(value);
        return result.success ? null : result.error.issues[0].message;
    };

    const next = () => {
        if (isConfirmStep) return;

        const validationMessage = validate(answers[step]);

        if (validationMessage) {
            const updatedTouched = [...touched];
            updatedTouched[step] = true;
            setTouched(updatedTouched);
            setError(validationMessage);
            return;
        }

        setError(null);
        if (step < totalSteps) {
            setDirection(1);
            setStep(prev => prev + 1);
        };
    };

    const previous = () => {
        if (step > 0) {
            setDirection(-1);
            setStep(prev => prev - 1);
        }
    };

    const updateAnswer = (value: string) => {
        const updated = [...answers];
        updated[step] = value;
        setAnswers(updated);

        if (touched[step]) {
            setError(validate(value));
        }
    };

    const touchCurrent = () => {
        const updatedTouched = [...touched];
        updatedTouched[step] = true;
        setTouched(updatedTouched);
        setError(validate(answers[step]));
    };

    const reset = () => {
        setAnswers(Array(totalSteps).fill(""));
        setTouched(Array(totalSteps).fill(false));
        setStep(0);
        setError(null);
    };

    const submit = async (onSuccess: () => void) => {
        setIsSubmitting(true);
        try {
            answers.forEach(answer => answerSchema.parse(answer));
            await new Promise(res => setTimeout(res, 1200));
            onSuccess();
            reset();
        } catch (err) {
            if (err instanceof z.ZodError) {
                setError(err.issues[0].message);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        reduce,
        answerSchema,
        step,
        direction,
        answers,
        touched,
        error,
        isSubmitting,
        isConfirmStep,
        totalSteps,
        next,
        previous,
        updateAnswer,
        touchCurrent,
        submit,
    };
};