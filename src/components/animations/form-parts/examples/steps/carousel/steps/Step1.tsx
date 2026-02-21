"use client";

import { motion } from "framer-motion";
import type { StepComponentProps } from "../types";

type Props = StepComponentProps & {
    inputId: string;
};

export default function Step1({
    formData,
    setFormData,
    errors,
    reduce,
    inputId,
}: Props) {
    return (
        <>
            {/* name */}
            {errors.name && (
                <motion.p
                    id="name-error"
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.3 }
                    }
                    className="text-left text-red-500 text-sm mt-1"
                >
                    {errors.name}
                </motion.p>
            )}

            <label htmlFor={`name-${inputId}`} className="sr-only">
                Name
            </label>
            <input
                id={`name-${inputId}`}
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full mb-5 px-4 py-2 border rounded focus:border-orange-500 outline-none"
            />

            {/* email */}
            {errors.email && (
                <motion.p
                    id="email-error"
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.3 }
                    }
                    className="text-left text-red-500 text-sm mt-1"
                >
                    {errors.email}
                </motion.p>
            )}

            <label htmlFor={`email-${inputId}`} className="sr-only">
                Email
            </label>
            <input
                id={`email-${inputId}`}
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full mb-5 px-4 py-2 border rounded focus:border-orange-500 outline-none"
            />
        </>
    );
}
