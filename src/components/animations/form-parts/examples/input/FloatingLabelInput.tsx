"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaInfoCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useContainerSize } from "@/hooks/useContainerSize";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const BASE_WIDTH = 500;

const schema = z.object({
    email: z
        .string()
        .min(1, "必須項目です")
        .pipe(z.email("メールアドレスの形式が正しくありません")), //必須 + email を分ける
    password: z
        .string()
        .min(8, "8文字以上で入力してください"),
});

type FormValues = z.infer<typeof schema>;

export default function FloatingLabelInput() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.1)
        : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [focus, setFocus] = useState<string | null>(null);
    const [openTooltip, setOpenTooltip] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [formMessage, setFormMessage] = useState("");

    const {
        register, //inputとReact Hook Formを接続
        handleSubmit,
        formState: { errors, isValid, isSubmitting }, //Zodが返した最新のエラー,全フィールドOKか,送信中かどうか
        watch, //フォームの現在値を即座に取得
    } = useForm<FormValues>({
        resolver: zodResolver(schema), //react-hook-form と Zod を接続
        mode: "onChange", //入力 1文字ごとに zod が走る
        reValidateMode: "onChange", //エラー修正も即反映
    });

    const onSubmit = async (data: FormValues) => {
        setFormMessage("送信中です");
        await new Promise((r) => setTimeout(r, 1500));
        setFormMessage("送信が完了しました");
        alert("送信完了");
    };

    /* ===== aria-live 用エラーまとめ ===== */
    const errorSummary = Object.entries(errors)
        .map(([key, value]) => {
            if (!value?.message) return null;
            const label =
                key === "email"
                    ? "Email Address"
                    : key === "password"
                    ? "Password"
                    : key;
            return `${label}: ${value.message}`;
        })
        .filter(Boolean);

    const field = (
        id: keyof FormValues,
        label: string,
        type: string,
        hint?: string,
    ) => {
        const value = watch(id) ?? ""; //そのフィールドの現在の値を監視
        const active = focus === id || value.length > 0; //フォーカス中または入力済みでラベルを浮かせる
        const hasError = !!errors[id]; //そのフィールドのバリデーションエラーtrue / false に正規化
        const { onBlur, ...rest } = register(id);

        return (
            <div key={id} className="relative w-full pt-6 mb-8">
                <div className="flex justify-between items-center border border-[#eee] gap-2 pr-2">
                    <div className="flex flex-1 justify-between items-center">
                        <input
                            id={id}
                            type={id === "password" && showPassword ? "text" : type}
                            autoComplete={
                                id === "email"
                                    ? "email"
                                    : id === "password"
                                    ? "current-password"
                                    : "off"
                            }
                            aria-invalid={hasError}
                            aria-describedby={hasError ? `${id}-error` : undefined}
                            required
                            {...rest}
                            onFocus={() => setFocus(id)}
                            onBlur={(e) => { //フォーカスが外れた瞬間に発火するイベント
                                onBlur(e);      // react-hook-form に通知（重要）
                                setFocus(null); // 自前フォーカス管理
                                if (id === "password") setShowPassword(false);
                            }}
                            className="w-full bg-transparent text-[#1e2939] text-sm p-2 focus:outline-none"
                        />

                        { id === "password" && (
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="text-[#99a1af] hover:text-[#4a5565]"
                                aria-label="パスワード表示切り替え"
                                aria-pressed={showPassword}
                            >
                                {showPassword
                                    ? (<FaEyeSlash size={20} />)
                                    : (<FaEye size={20} />)
                                }
                            </button>
                        )}
                    </div>

                    {/* Tooltip */}
                    {hint && (
                        <div className="leading-0">
                            <motion.button
                                type="button"
                                aria-label={`${label} の補足説明`}
                                aria-haspopup="true"
                                aria-expanded={openTooltip === id}
                                onClick={() =>
                                    setOpenTooltip(openTooltip === id ? null : id)
                                }
                                whileHover={{ scale: 1.2 }}
                                className="text-[#05df72] hover:text-[#03b55c]"
                            >
                                <FaInfoCircle size={18} />
                            </motion.button>

                            <motion.div
                                role="tooltip"
                                aria-hidden={openTooltip !== id}
                                animate={
                                    openTooltip === id
                                        ? { opacity: 1, scale: 1, x: 0 }
                                        : { opacity: 0, scale: 0.85, x: 8 }
                                }
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : { duration: 0.2 }
                                }
                                className="absolute right-0 -top-1 bg-[#161a2e] text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                            >
                                {hint}
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Label */}
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

                {/* Underline */}
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
                                    : "#2196F3"
                    }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.25 }
                    }
                />

                {/* Error message */}
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
                        {errors[id]?.message}
                    </motion.p>
                )}
            </div>
        );
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
                    {/* area-live */}
                    <div
                        aria-live="polite"
                        aria-atomic="true"
                        className="sr-only"
                    >
                        {errorSummary.length > 0 &&
                            `入力内容に ${errorSummary.length} 件のエラーがあります。 ${errorSummary.join(
                                " ",
                            )}`}
                        {formMessage}
                    </div>

                    {field(
                        "email",
                        "Email",
                        "email",
                        "ドメインを含むメールアドレスを入力",
                    )}

                    {field(
                        "password",
                        "Password",
                        "password",
                        "8文字以上で入力",
                    )}

                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        aria-disabled={!isValid || isSubmitting}
                        aria-busy={isSubmitting}
                        className={`mt-4 w-full py-2 text-white font-medium transition-all ${!isValid || isSubmitting ? "bg-[#d1d5dc] cursor-not-allowed" : "bg-[#1568c8] hover:bg-[#2f82e8] cursor-pointer"}`}
                    >
                        {isSubmitting ? "送信中..." : "送信"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
