"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useRovingTabFocus } from "@/hooks/useRovingTabFocus";

const BASE_WIDTH = 420;
const MIN_WIDTH = 40;
const MAX_WIDTH = 260;

export default function ExpandSearch() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale =
        width ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1) : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");

    const results = [
        "Apple",
        "Orange",
        "Banana",
        "Strawberry",
        "Grape"
    ].filter((r) =>
        r.toLowerCase().includes(submittedQuery.toLowerCase())
    );

    const [activeResult, setActiveResult] = useState<string>("");
    const resultRefs = useRef<(HTMLLIElement | null)[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedQuery(query);
        setIsFocused(false);
    };

    const { onKeyDown } = useRovingTabFocus<string>({
        values: results,
        activeValue: activeResult,
        setActiveValue: setActiveResult,
        refs: resultRefs,
        onActivate: (value) => {
            setQuery(value);
            setSubmittedQuery(value);
            setIsFocused(false);
        }
    });

    return (
        <div
            ref={ref}
            className="w-full h-full bg-[#effaf9] p-4 overflow-y-auto no-scrollbar"
        >
            <motion.form
                onSubmit={handleSubmit}
                aria-label="Search form"
                className="relative w-50 flex items-center origin-top-left"
                animate={{ scale }}
            >
                <div className="relative">
                    <motion.input
                        ref={inputRef}
                        type="text"
                        role="combobox"
                        aria-label="Search"
                        aria-expanded={results.length > 0}
                        aria-controls="searchResults"
                        aria-activedescendant={
                            activeResult
                                ? `option-${results.indexOf(activeResult)}`
                                : undefined
                        }
                        aria-autocomplete="list"
                        name="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (
                                e.key === "ArrowDown" &&
                                results.length > 0
                            ) {
                                e.preventDefault();
                                setActiveResult(results[0]);
                                resultRefs.current[0]?.focus();
                            }
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        initial={{
                            width: MIN_WIDTH,
                            borderRadius: 20,
                            backgroundColor: "#EBEBEB"
                        }}
                        animate={
                            isFocused || query
                                ? {
                                    width: MAX_WIDTH,
                                    borderRadius: 8,
                                    backgroundColor: "#EBEBEB"
                                }
                                : {
                                    width: MIN_WIDTH,
                                    borderRadius: 20,
                                    backgroundColor: "#EBEBEB"
                                }
                        }
                        transition={
                            reduce
                                ? { duration: 0 }
                                : isFocused || query
                                    ? { type: "spring", stiffness: 300, damping: 20,mass: 1.4 }
                                    : { type: "spring", stiffness: 200, damping: 30, mass: 1 }
                        }
                        whileHover={{
                            backgroundColor: "#C8C8C8",
                            boxShadow: "0 0 0 5px #3D4752"
                        }}
                        className={`pl-4 pr-4 h-10 text-[#36365a] outline-none cursor-${
                            isFocused ? "text" : "pointer"
                        }`}
                    />

                    <motion.button
                        type={isFocused || query ? "submit" : "button"}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black cursor-pointer z-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        aria-label={
                            isFocused || query
                                ? "Submit search"
                                : "Focus search input"
                        }
                        whileHover={{ color: "#fff" }}
                        onClick={() => {
                            if (!(isFocused || query)) {
                                inputRef.current?.focus();
                            }
                        }}
                    >
                        <FaSearch size={12} />
                    </motion.button>
                </div>

                {submittedQuery && (
                    <motion.ul
                        id="searchResults"
                        role="listbox"
                        aria-live="polite"
                        className="absolute left-0 top-full mt-1 w-full max-w-md bg-white border border-[#d1d5dc] rounded-md shadow-lg overflow-y-auto max-h-60 z-10"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={
                            reduce ? { duration: 0 } : { duration: 0.2 }
                        }
                    >
                        {results.length > 0 ? (
                            results.map((r, i) => (
                                <motion.li
                                    key={r}
                                    id={`option-${i}`}
                                    ref={(el) => { resultRefs.current[i] = el }}
                                    tabIndex={ r === activeResult ? 0 : -1 }
                                    role="option"
                                    aria-selected={r === activeResult}
                                    onKeyDown={onKeyDown}
                                    onClick={() => {
                                        setQuery(r);
                                        setSubmittedQuery(r);
                                        setIsFocused(false);
                                    }}
                                    whileHover={{
                                        backgroundColor: "#f3f4f6"
                                    }}
                                    className={`px-4 py-2 cursor-pointer ${
                                        r === activeResult
                                            ? "bg-[#e5e7eb]"
                                            : ""
                                    }`}
                                >
                                    {r}
                                </motion.li>
                            ))
                        ) : (
                            <li className="px-4 py-2 text-[#99a1af]">
                                No results found.
                            </li>
                        )}
                    </motion.ul>
                )}
            </motion.form>
        </div>
    );
}
