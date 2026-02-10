import { useState, useRef, useMemo } from "react";
import { z } from "zod";

export type Option = {
    label: string;
    value: string;
};

const formSchema = z.object({
    tools: z
        .array(z.string())
        .min(1, "1つ以上選択してください")
        .max(3, "最大3つまで選択できます"),
});

type FormSchema = z.infer<typeof formSchema>;

export function useMultiSelect(optionsData: Option[]) {
    const [selected, setSelected] = useState<Option[]>([]);
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState<{ tools?: string }>({});
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);

    const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

    const availableOptions = useMemo(
        () =>
            optionsData.filter(
                (o) => !selected.some((s) => s.value === o.value)
            ),
        [optionsData, selected]
    );

    const validate = (values: FormSchema) => {
        const result = formSchema.safeParse(values);

        if (!result.success) {
            setErrors({
                tools: result.error.issues[0]?.message,
            });
            return false;
        }

        setErrors({});
        return true;
    };

    const toggleOption = (option: Option, index: number) => {
        setSelected((prev) => {
            const next = prev.some((o) => o.value === option.value)
                ? prev.filter((o) => o.value !== option.value)
                : [...prev, option];

            validate({ tools: next.map((o) => o.value) });
            return next;
        });

        requestAnimationFrame(() => {
            const nextIndex = Math.min(index, optionRefs.current.length - 1);
            optionRefs.current[nextIndex]?.focus();
            setFocusedIndex(nextIndex);
        });
    };

    const errorSummary = useMemo(
        () => (errors.tools ? [errors.tools] : []),
        [errors]
    );

    return {
        // state
        selected,
        open,
        errors,
        focusedIndex,
        optionRefs,

        // derived
        availableOptions,
        errorSummary,

        // actions
        setOpen,
        setFocusedIndex,
        toggleOption,
        validate,
    };
}
