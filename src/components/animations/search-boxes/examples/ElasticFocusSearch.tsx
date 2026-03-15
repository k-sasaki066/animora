import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 420;

const MIN_WIDTH = 180;
const MAX_WIDTH = 260;

export default function ElasticFocusSearch() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    const [isFocused, setIsFocused] = useState(false);
    const [query, setQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");

    const results = [
        "Apple",
        "Orange",
        "Banana",
        "Strawberry",
        "Grape"
    ].filter(r => r.toLowerCase().includes(submittedQuery.toLowerCase()));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedQuery(query);
        setIsFocused(false);
    };


    return (
        <div ref={ref} className="w-full h-full bg-[#555] p-6 overflow-y-auto no-scrollbar">
            <motion.div
                className="flex justify-start items-center origin-left"
                style={{ width: MIN_WIDTH }}
                animate={{ scale }}
            >
                <motion.form
                    onSubmit={handleSubmit}
                    aria-label="Search form"
                    className="relative flex items-center bg-[#1e2939] rounded-full shadow-inner"
                    style={{
                        textShadow: "0 2px 2px rgba(0,0,0,0.3)",
                        boxShadow: "0 1px 0 rgba(255,255,255,0.1), 0 1px 3px rgba(0,0,0,0.2) inset",
                    }}
                    animate={{
                        backgroundColor: isFocused || query ? "#fff" : "#444",
                        color: isFocused || query ? "#6a6f75" : "#d7d7d7",
                    }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: 0.4 }
                    }
                >
                    {/* アイコン */}
                    <button
                        type="submit"
                        className="shrink-0 px-3 text-[#99a1af] cursor-pointer focus:outline-none"
                        aria-label="Submit search"
                    >
                        <FaSearch size={16} />
                    </button>

                    {/* 入力欄 */}
                    <motion.input
                        id="search"
                        name="search"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Search"
                        aria-describedby="searchResults"
                        placeholder="Search..."
                        className="bg-transparent font-bold text-sm py-2 pr-4 placeholder-[#99a1af] rounded-r-full origin-left flex-1 focus:outline-none"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        animate={{
                            width: (isFocused || query) ? MAX_WIDTH : MIN_WIDTH,
                        }}
                        transition={
                            reduce
                                ? { duration: 0 }
                                : { duration: 0.4 }
                        }
                    />
                    {/* 検索結果 */}
                    {submittedQuery && (
                        <motion.div
                            id="searchResults"
                            role="region"
                            aria-live="polite"
                            className="absolute left-0 top-full mt-2 w-100 max-w-md bg-[#1e2939] rounded-lg shadow-lg p-4 text-left"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={
                                reduce
                                    ? { duration: 0 }
                                    : { duration: 0.3 }
                            }
                        >
                            <p className="text-[#99a1af] mb-2">
                                Search results for: <span className="text-white font-bold">{submittedQuery}</span>
                            </p>
                            <ul className="text-[#d1d5dc] list-disc list-inside space-y-1">
                                {results.length > 0 ? (
                                    results.map((r, i) => <li key={i} role="listitem">{r}</li>)
                                ) : (
                                    <li role="listitem">No results found.</li>
                                )}
                            </ul>
                        </motion.div>
                    )}
                </motion.form>
            </motion.div>
        </div>
    );
}