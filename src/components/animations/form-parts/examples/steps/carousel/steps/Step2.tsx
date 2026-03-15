import { motion } from "framer-motion";
import type { StepComponentProps } from "../types";

export default function Step2({
    formData,
    setFormData,
    errors,
    reduce,
}: StepComponentProps) {
    return (
        <>
            {errors.choice && (
                <motion.p
                    id="choice-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.3 }
                    }
                    className="text-left text-red-500 text-sm mt-1"
                >
                    {errors.choice}
                </motion.p>
            )}

            <fieldset className="text-left border-t">
                <legend className="sr-only">
                    Choose your life option
                </legend>
                <label className="block border-b px-8 py-4 cursor-pointer">
                    <input
                        type="radio"
                        name="choice"
                        value="1000years"
                        checked={formData.choice === "1000years"}
                        onChange={(e) =>
                            setFormData({ ...formData, choice: e.target.value })
                        }
                        aria-invalid={!!errors.choice}
                        aria-describedby={errors.choice ? "choice-error" : undefined}
                        className="mr-2"
                    />
                    live one life that lasts 1,000 years?
                </label>

                <label className="block border-b px-8 py-4 cursor-pointer">
                    <input
                        type="radio"
                        name="choice"
                        value="100years"
                        checked={formData.choice === "100years"}
                        onChange={(e) =>
                            setFormData({ ...formData, choice: e.target.value })
                        }
                        aria-invalid={!!errors.choice}
                        aria-describedby={errors.choice ? "choice-error" : undefined}
                        className="mr-2"
                    />
                    live 10 lives that last 100 years each?
                </label>
            </fieldset>
        </>
    );
}
