import { useCallback } from "react";

type UseRovingTabFocusArgs<T> = {
    values: T[];
    activeValue: T;
    setActiveValue: (value: T) => void;
    refs: React.RefObject<(HTMLElement | null)[]>;
    onActivate?: (value: T) => void;
    onExpand?: (value: T) => void;
};

export function useRovingTabFocus<T>({
    values,
    activeValue,
    setActiveValue,
    refs,
    onActivate,
    onExpand
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
                    if (onExpand) {
                        onExpand(activeValue);
                    } else if (onActivate) {
                        onActivate(activeValue);
                    }
                break;
            }
        },
        [activeValue, values, moveFocus, onActivate, onExpand]
    );

    return { onKeyDown };
}