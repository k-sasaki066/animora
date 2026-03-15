import { useState, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useArcSearch } from "./useArcSearch";
import { ArcSearchFrame } from "./ArcSearchFrame";
import { SuggestList } from "./SuggestList";

const BASE_WIDTH = 400;
const INPUT_HEIGHT = 54;

export default function ArcMotionSearch() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale =
        width ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1) : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputId = useId();

    const {
        value,
        setValue,
        results,
        isLoading,
        activeIndex,
        setActiveIndex,
        isTyping,
        inputRef,
        reset,
        select,
        handleKeyDown,
    } = useArcSearch();

    return (
        <div ref={ref} className="w-full h-full bg-linear-to-r from-[#973ba3] to-[#4565a7] p-3 overflow-y-auto">
            <motion.div
                className="relative w-full max-w-[320px] mx-auto origin-top"
                style={{ height: INPUT_HEIGHT }}
                animate={{scale}}
            >
                <ArcSearchFrame
                    isFocused={isFocused}
                    reduce={reduce}
                    isTyping={isTyping}
                    reset={reset}
                />

                <input
                    ref={inputRef}
                    id={inputId}
                    name="arc-motion-search"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search"
                    autoComplete="off"
                    className="absolute inset-0 w-full h-full rounded-full bg-transparent px-[18%] text-white text-sm outline-none placeholder:text-white selection:bg-black/25"
                    onKeyDown={handleKeyDown}
                />

                <SuggestList
                    value={value}
                    results={results}
                    isLoading={isLoading}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    reduce={reduce}
                    onSelect={select}
                />
            </motion.div>
        </div>
    );
}