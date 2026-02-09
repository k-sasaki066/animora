"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "../validation";
import { InputField } from "./InputField";

const BASE_WIDTH = 500;

export default function FloatingLabelInput() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.1) : 1;

    const [formMessage, setFormMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        watch,
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const errorSummary = Object.entries(errors)
        .map(([key, value]) => {
            if (!value?.message) return null;
            const label = key === "email" ? "Email Address" : key === "password" ? "Password" : key;
            return `${label}: ${value.message}`;
        })
        .filter(Boolean);

    const onSubmit = async (data: LoginFormValues) => {
        setFormMessage("送信中です");
        await new Promise((r) => setTimeout(r, 1500));
        setFormMessage("送信が完了しました");
        alert("送信完了");
    };

    return (
        <div ref={ref} className="w-full h-full">
            <motion.div
                className="w-full h-full flex justify-center items-center"
                animate={{ scale }}
            >
                <form
                    className="w-70"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    {/* aria-live */}
                    <div
                        aria-live="polite"
                        aria-atomic="true"
                        className="sr-only"
                    >
                        {errorSummary.length > 0 &&
                            `入力内容に ${errorSummary.length} 件のエラーがあります。 ${errorSummary.join(" ")}`}
                        {formMessage}
                    </div>

                    <InputField
                        id="email"
                        label="Email"
                        type="email"
                        hint="ドメインを含むメールアドレスを入力"
                        value={watch("email") ?? ""}
                        error={errors.email?.message}
                        register={register("email")}
                    />

                    <InputField
                        id="password"
                        label="Password"
                        type="password"
                        hint="8文字以上で入力"
                        value={watch("password") ?? ""}
                        error={errors.password?.message}
                        register={register("password")}
                    />

                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        aria-disabled={!isValid || isSubmitting}
                        aria-busy={isSubmitting}
                        className={`mt-4 w-full py-2 text-white font-medium transition-all ${
                            !isValid || isSubmitting
                                ? "bg-[#d1d5dc] cursor-not-allowed"
                                : "bg-[#1568c8] hover:bg-[#2f82e8] cursor-pointer"
                        }`}
                    >
                        {isSubmitting ? "送信中..." : "送信"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
