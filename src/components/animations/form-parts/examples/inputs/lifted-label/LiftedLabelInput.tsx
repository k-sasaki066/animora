import { useContainerSize } from "@/hooks/useContainerSize";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "../validation";
import { InputField } from "./InputField";

const BASE_WIDTH = 420;

export default function LiftedLabelInput() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1.1) : 1;

    const { register, watch, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });

    const errorSummary = Object.entries(errors)
        .map(([key, value]) => {
            if (!value?.message) return null;
            const label = key === "email" ? "Email" : key === "password" ? "Password" : key;
            return `${label}: ${value.message}`;
        })
        .filter(Boolean);

    return (
        <div
            ref={ref}
            className="w-full h-full flex items-center justify-center gap-2 bg-[#f5f5f6] px-4"
        >
            <motion.div
                className="w-full h-full flex flex-col justify-center items-center"
                animate={{ scale }}
            >
                {/* aria-live */}
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                    {errorSummary.length > 0 && `入力内容に ${errorSummary.length} 件のエラーがあります。 ${errorSummary.join(" ")}`}
                </div>

                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="example@test.com"
                    register={register("email")}
                    value={watch("email") ?? ""}
                    error={errors.email?.message}
                />

                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="8文字以上"
                    register={register("password")}
                    value={watch("password") ?? ""}
                    error={errors.password?.message}
                />
            </motion.div>
        </div>
    );
};
