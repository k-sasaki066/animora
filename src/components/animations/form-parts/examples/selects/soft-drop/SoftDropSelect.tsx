import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "./Select";

const BASE_WIDTH = 480;

const formSchema = z.object({
    awesomeness: z.string().min(1, "必須項目です"),
    difficulty: z.string().min(1, "必須項目です"),
});
type FormValues = z.infer<typeof formSchema>;

export default function SoftDropSelect() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1.1)
        : 1;

    const {
        handleSubmit,
        setValue,
        formState: { errors, isValid, isSubmitted, isSubmitting },
        watch,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            awesomeness: "",
            difficulty: "",
        },
    });

    const errorSummary = Object.entries(errors)
        .map(([key, value]) => {
            if (!value?.message) return null;

            const labelMap: Record<string, string> = {
                awesomeness: "Level",
                difficulty: "Difficulty",
            };

            const label = labelMap[key] ?? key;
            return `${label}：${value.message}`;
        })
        .filter(Boolean) as string[];

    const awesomeness = watch("awesomeness");
    const difficulty = watch("difficulty");

    const onSubmit = async (data: FormValues) => {
        await new Promise((r) => setTimeout(r, 1500));
        alert("送信完了");
    };

    return (
        <div ref={ref} className="w-full h-full bg-linear-to-l from-[#b5e6cf] to-[#9dddad]">
            <motion.div
                className="w-full h-full flex justify-center items-center"
                animate={{ scale }}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full h-full flex items-center justify-center py-8"
                >
                    {isSubmitted && errorSummary.length > 0 && (
                        <div
                            role="alert"
                            aria-live="assertive"
                            className="sr-only"
                        >
                            <p>入力内容にエラーがあります。</p>
                            <ul>
                                {errorSummary.map((msg, i) => (
                                    <li key={i}>{msg}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex flex-col gap-3">
                        <div>
                            <Select
                                id="Level"
                                label="Level"
                                required
                                error={!!errors.awesomeness}
                                options={["low", "normal", "high"]}
                                value={awesomeness}
                                onChange={(v) =>
                                    setValue("awesomeness", v ?? "", {
                                        shouldValidate: true,
                                        shouldTouch: true,
                                        shouldDirty: true,
                                    })
                                }
                            />
                            {isSubmitted && errors.awesomeness && (
                                <p id="Level-error" className="mt-1 text-sm text-red-500 text-left">
                                    {errors.awesomeness.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Select
                                id="Difficulty"
                                label="Difficulty"
                                required
                                error={!!errors.difficulty}
                                options={["easy", "normal", "hard"]}
                                value={difficulty}
                                onChange={(v) =>
                                    setValue("difficulty", v ?? "", {
                                        shouldValidate: true,
                                        shouldTouch: true,
                                        shouldDirty: true,
                                    })
                                }
                            />
                            {isSubmitted && errors.difficulty && (
                                <p id="difficulty-error" className="mt-1 text-sm text-red-500 text-left">
                                    {errors.difficulty.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                            className={`mt-6 h-10 rounded shadow font-medium ${ isValid ? "bg-[#2fb5d1] text-white hover:opacity-70 cursor-pointer" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                        >
                            {isSubmitting ? "送信中..." : "送信"}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}