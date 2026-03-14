import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const BASE_WIDTH = 420;

type PlanItem = string;

const items: PlanItem[] = [
    "Check in at the hotel",
    "Walk around the town",
    "Take photos at sunset",
    "Relax at a local café",
];

export default function NumberedTimelineList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;
    const { activeIndex, bindIndex } = useToggleHover();

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ol
                className="relative ml-0 list-none"
                animate={{ scale }}
            >
                {/* 縦ライン */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-500" />

                {items.map((item, index) => {
                    const active = activeIndex === index;

                    return (
                        <motion.li
                            key={index}
                            {...bindIndex(index)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="group relative flex items-start mb-6 last:mb-0"
                        >
                            {/* 丸番号 */}
                            <motion.div
                                animate={{
                                    scale: active ? 1.1 : 1,
                                    backgroundColor: active ? "#b84ad1" : "#ffffff",
                                    color: active ? "#ffffff" : "#b84ad1"
                                }}
                                transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                                className="relative z-10 flex items-center justify-center w-8 h-8 mr-4 border-2 border-[#b84ad1] rounded-full"
                            >
                                {index + 1}
                            </motion.div>

                            {/* テキスト */}
                            <motion.div
                                animate={{
                                    y: active ? -4 : 0
                                }}
                                className="pt-1 text-left text-[#1e2939]"
                            >
                                {item}
                            </motion.div>
                        </motion.li>
                    );
                })}
            </motion.ol>
        </div>
    );
}
