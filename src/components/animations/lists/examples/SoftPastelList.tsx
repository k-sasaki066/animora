import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const BASE_WIDTH = 420;

type ListItem = string;

const items: ListItem[] = [
    "First item",
    "Second item",
    "Third item",
    "Fourth item",
];

export default function SoftPastelList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;

    const { activeIndex, bindIndex } = useToggleHover();

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ul className="w-[60%] min-w-55 list-none p-0 font-['Arial_Narrow']" animate={{scale}}>
                {items.map((item, i) => {
                    const active = activeIndex === i;

                    return (
                        <motion.li
                            key={i}
                            {...bindIndex(i)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.3 }}
                            className="group relative mb-1.5 border-b border-[rgba(129,194,250,0.5)] px-[1em] py-[0.5em] pl-[2em]"
                        >
                            {/* before circle */}
                            <span
                                className="absolute left-[0.2em] top-1/2 aspect-square w-4.5 -translate-y-1/2 rounded-full transition-colors  duration-400"
                                style={{
                                    backgroundColor: active
                                        ? "rgba(250,129,244,0.5)"
                                        : "rgba(129,194,250,0.5)"
                                }}
                            />

                            {/* after circle */}
                            <span
                                className="absolute left-[0.7em] top-[1.1em] aspect-square w-3.5 rounded-full "
                                style={{
                                    backgroundColor: active
                                        ? "rgba(246,141,216,0.3)"
                                        : "rgba(129,194,250,0.3)"
                                }}
                            />

                            {/* text */}
                            <div
                                className="text-center text-[#81c2fa] text-lg font-bold tracking-wider transition-all duration-400 "
                                style={{
                                    transform: active ? "translateY(-4px)" : "translateY(0)",
                                    color: active ? "#fa81e2" : "#81c2fa"
                                }}
                            >
                                {item}
                            </div>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </div>
    );
}
