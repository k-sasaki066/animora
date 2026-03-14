import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const BASE_WIDTH = 420;

type CourseItem = string;

const items: CourseItem[] = ["html", "css", "js", "php"];

export default function ChatBubbleList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;
    const { activeIndex, bindIndex } = useToggleHover();

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ol
                className="w-[60%] min-w-55 p-0 list-none space-y-3" animate={{ scale }}
            >
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const active = activeIndex === index;

                    const bgColor = isEven ? "bg-[#fccee8]" : "bg-[#fce7f3]";
                    const numberBg = isEven ? "bg-[#fb64b6]" : "bg-[#fda5d5]";

                    return (
                        <motion.li
                            key={item}
                            {...bindIndex(index)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0, y: active ? -4 : 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className={`relative px-4 py-1.5 ml-8 uppercase text-left ${bgColor}`}
                        >
                            {/* ナンバーパーツ */}
                            <div
                                className={`absolute flex items-center justify-center font-bold text-white w-8 h-8 top-1/2 -translate-y-1/2 -left-9 ${numberBg}`}
                                style={{
                                    clipPath:
                                        "polygon(0% 0%, 85% 0, 85% 40%, 100% 50%, 85% 60%, 85% 100%, 0 100%)",
                                    paddingRight: "5px",
                                }}
                            >
                                {index + 1}
                            </div>

                            {item}
                        </motion.li>
                    );
                })}
            </motion.ol>
        </div>
    );
}
