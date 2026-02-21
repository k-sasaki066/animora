"use client";

import { useState } from "react";
import { z } from "zod";
import { useReducedMotion } from "framer-motion";
import type { FormData, Errors } from "./types";

type Phase = "normal" | "done";

const initialFormState: FormData= {
    name: "",
    email: "",
    choice: "",
};

const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
        .string()
        .min(1, "Email is required")
        .regex(/^[\x20-\x7E]*$/, "Please use only half-width characters")
        .pipe(z.email("Invalid email")),
    choice: z.string().min(1, "Please select one option"),
});

export function useCarouselStep() {
    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [step, setStep] = useState(0);
    const [phase, setPhase] = useState<Phase>("normal");
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState<Errors>({});;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateStep = () => {
        let result;

        if (step === 0) {
            result = FormSchema.pick({ name: true, email: true }).safeParse(formData);
        } else if (step === 1) {
            result = FormSchema.pick({ choice: true }).safeParse(formData);
        } else {
            result = FormSchema.safeParse(formData);
        }

        if (!result.success) {
            const fieldErrors: typeof errors = {};
            result.error.issues.forEach((err) => {
                const key = err.path[0] as keyof typeof formData;
                fieldErrors[key] = err.message;
            });
            setErrors(fieldErrors);
            return false;
        }

        setErrors({});
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = validateStep();
        if (!isValid) return;

        if (step < 2) {
            setStep((prev) => prev + 1);
            return;
        }

        try {
            setIsSubmitting(true);
            await new Promise((r) => setTimeout(r, 800));

            setPhase("done");
            setFormData(initialFormState);
        } finally {
            setIsSubmitting(false);
        }
    };

    const reset = () => {
        setStep(0);
        setPhase("normal");
        setFormData(initialFormState);
        setErrors({});
    };

    return {
        reduce,
        step,
        phase,
        formData,
        setFormData,
        errors,
        isSubmitting,
        handleSubmit,
        reset,
    };
}
