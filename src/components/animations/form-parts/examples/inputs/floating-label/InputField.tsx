import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaInfoCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputFieldProps = {
    id: string;
    label: string;
    type: string;
    hint?: string;
    value: string;
    error?: string;
    register: UseFormRegisterReturn;
};

export function InputField({
    id,
    label,
    type,
    hint,
    value,
    error,
    register,
}: InputFieldProps) {
    const [focus, setFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [openTooltip, setOpenTooltip] = useState(false);

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const active = focus || value.length > 0;
    const hasError = !!error;

    return (
        <div className="relative w-full pt-6 mb-8">
            <div className="flex justify-between items-center border border-[#eee] gap-2 pr-2">
                <div className="flex flex-1 justify-between items-center">
                    <input
                        id={id}
                        type={type === "password" && showPassword ? "text" : type}
                        aria-invalid={hasError}
                        aria-describedby={hasError ? `${id}-error` : undefined}
                        required
                        {...register}
                        autoComplete={type === "email" ? "email" : "current-password"}
                        onFocus={() => setFocus(true)}
                        onBlur={(e) => {
                            register.onBlur(e);
                            setFocus(false);
                            if (type === "password") setShowPassword(false);
                        }}
                        className="w-full bg-transparent text-[#1e2939] text-sm p-2 focus:outline-none"
                    />

                    {type === "password" && (
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="text-[#99a1af] hover:text-[#4a5565]"
                            aria-label="パスワード表示切り替え"
                            aria-pressed={showPassword}
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    )}
                </div>

                {hint && (
                    <div className="leading-0">
                        <motion.button
                            type="button"
                            aria-label={`${label} の補足説明`}
                            aria-haspopup="true"
                            aria-expanded={openTooltip}
                            onClick={() => setOpenTooltip((v) => !v)}
                            whileHover={{ scale: 1.2 }}
                            className="text-[#05df72] hover:text-[#03b55c]"
                        >
                            <FaInfoCircle size={18} />
                        </motion.button>

                        <motion.div
                            role="tooltip"
                            aria-hidden={!openTooltip}
                            animate={
                                openTooltip
                                    ? { opacity: 1, scale: 1, x: 0 }
                                    : { opacity: 0, scale: 0.85, x: 8 }
                            }
                            transition={reduce ? { duration: 0 } : { duration: 0.2 }}
                            className="absolute right-0 -top-1 bg-[#161a2e] text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                        >
                            {hint}
                        </motion.div>
                    </div>
                )}
            </div>

            <motion.label
                htmlFor={id}
                className="absolute left-2 pointer-events-none"
                animate={{
                    top: active ? 0 : 30,
                    fontSize: active ? "0.75rem" : "1rem",
                    color: "#6a7282",
                }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : { duration: 0.2 }
                }
            >
                {label}
            </motion.label>

            <motion.div
                className="absolute left-0 bottom-0 h-0.5"
                initial={{ width: 0 }}
                animate={{
                    width: active ? "100%" : 0,
                    backgroundColor:
                        hasError
                            ? "#F44336"
                            : value.length > 0
                                ? "#4CAF50"
                                : "#2196F3",
                }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : { duration: 0.25 }
                }
            />

            {hasError && (
                <motion.p
                    id={`${id}-error`}
                    role="alert"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.25 }
                    }
                    className="absolute left-1 -bottom-5 text-xs text-[#fb2c36]"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
}
