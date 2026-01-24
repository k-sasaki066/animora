import { useCallback } from "react";

type UseRovingTabFocusArgs<T extends number | string> = {
    values: T[];
    activeValue: T;
    setActiveValue: (value: T) => void;
    refs: React.MutableRefObject<(HTMLElement | null)[]>;
};

export function useRovingTabFocus<T extends number | string>({
    values,
    activeValue,
    setActiveValue,
    refs,
}: UseRovingTabFocusArgs<T>) {
    const moveFocus = useCallback(
        (nextIndex: number) => {
            const value = values[nextIndex];
            setActiveValue(value);
            refs.current[nextIndex]?.focus();
        },
        [values, refs, setActiveValue]
    );

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            const currentIndex = values.indexOf(activeValue);

            if (currentIndex === -1) return;

            switch (e.key) {
                case "ArrowRight":
                case "ArrowDown":
                    e.preventDefault();
                    moveFocus((currentIndex + 1) % values.length);
                break;

                case "ArrowLeft":
                case "ArrowUp":
                    e.preventDefault();
                    moveFocus(
                        (currentIndex - 1 + values.length) % values.length
                    );
                break;

                case "Enter":
                case " ":
                    e.preventDefault();
                break;
            }
        },
        [activeValue, values, moveFocus]
    );

    return { onKeyDown };
}