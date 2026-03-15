import { useState, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputFieldProps = {
    label: string;
    type: "email" | "password";
    value: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: string;
    name: string;
};

export const InputField = ({ label, type, value, placeholder, register, error, name }: InputFieldProps) => {
    const reactId = useId();
    const inputId = `${name}-${reactId}`;
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const isActive = focused || value.length > 0;
    const hasError = Boolean(error);
    const isEmpty = value.length === 0;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const INPUT_HEIGHT = 34;
    const LIFTED_LABEL = {
        inputHeight: INPUT_HEIGHT,
        label: {
            idleHeight: INPUT_HEIGHT + 2,
            activeHeight: INPUT_HEIGHT * 0.72,
            floatY: "-120%",
            padding: {
                idle: "6rem",
                active: "1rem",
            },
        },
    };

    const labelBgColor = hasError
        ? "#ef4444"
        : isEmpty
            ? "#9ca3af"
            : "#16a34a";

    const { onBlur: rhfOnBlur, ref, ...registered } = register;

    return (
        <div className="relative w-full max-w-105 mt-12">
            <div className="flex justify-between items-center border border-gray-300 rounded">
                <motion.input
                    id={inputId}
                    type={type === "password" && showPassword ? "text" : type}
                    value={value}
                    placeholder={placeholder}
                    autoComplete={type === "email" ? "email" : "current-password"}
                    {...registered}
                    ref={ref}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? `${inputId}-error` : undefined}
                    required
                    onFocus={() => setFocused(true)}
                    onBlur={(e) => {
                        rhfOnBlur(e);
                        setFocused(false);
                        if (type === "password") setShowPassword(false);
                    }}
                    initial={false}
                    animate={{
                        paddingLeft: isActive
                            ? LIFTED_LABEL.label.padding.active
                            : LIFTED_LABEL.label.padding.idle,
                    }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.3, ease: "easeInOut", delay: isActive ? 0.2 : 0 }
                    }
                    className="flex-1 w-full text-sm px-2 outline-none"
                    style={{ height: LIFTED_LABEL.inputHeight }}
                />

                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="text-[#99a1af] hover:text-[#4a5565] pr-2"
                        aria-label="パスワード表示切り替え"
                        aria-pressed={showPassword}
                    >
                        {showPassword
                            ? <FaEyeSlash size={20} />
                            : <FaEye size={20} />
                        }
                    </button>
                )}
            </div>

            <motion.label
                htmlFor={inputId}
                initial={false}
                animate={{
                    height: isActive
                        ? LIFTED_LABEL.label.activeHeight
                        : LIFTED_LABEL.label.idleHeight,
                    y: isActive ? LIFTED_LABEL.label.floatY : "0%",
                    borderRadius: isActive ? "0.375rem" : "0.375rem 0 0 0.375rem",
                    backgroundColor: labelBgColor,
                }}
                transition={
                    reduce
                        ? { duration: 0 }
                        : {
                            duration: isActive ? 0.1 : 0.3,
                            ease: "easeInOut",
                            delay: isActive ? 0 : 0.2
                        }
                }
                className="absolute left-0 top-0 w-22 flex items-center justify-center text-white pointer-events-none text-xs md:text-sm"
            >
                {label}
            </motion.label>

            {error && (
                <motion.p
                    id={`${inputId}-error`}
                    role="alert"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.2 }
                    }
                    className="mt-1 text-xs text-left text-red-500"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
};
