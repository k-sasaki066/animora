import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "必須項目です")
        .regex(/^[\x20-\x7E]*$/, "半角文字のみで入力してください")
        .pipe(z.email("メールアドレスの形式が正しくありません")),
    password: z
        .string()
        .min(8, "8文字以上で入力してください")
        .regex(/^[a-zA-Z0-9]+$/, "半角英数字のみで入力してください"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;