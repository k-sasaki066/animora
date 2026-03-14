import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { Comfortaa } from "next/font/google";
import { useToggleHover } from "@/hooks/useToggleHover";

const BASE_WIDTH = 440;

const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

type CourseItem = string;

const items: CourseItem[]  = [
    "Introduction to Web Design",
    "Fundamentals of HTML and CSS",
    "Building Responsive Layouts",
    "Advanced Styling and Animations",
];

export default function BoxedList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.3), 1)
        : 1;
    const { activeIndex, bindIndex } = useToggleHover();

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ol
                className="w-[80%] min-w-75 flex flex-col gap-4 list-none p-0"
                animate={{ scale }}
            >
                {items.map((text, index) => {
                    const active = activeIndex === index;

                    return (
                        <motion.li
                            key={index}
                            {...bindIndex(index)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: active ? 1.05 : 1,
                                y: active ? -2 : 0
                            }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative border-2 border-yellow-400 rounded-lg p-3 text-sm text-left ${comfortaa.className}`}
                        >
                            {/* カスタム番号 */}
                            <span className="absolute -top-3 left-3 bg-white px-2 text-yellow-400 font-bold">
                                {index + 1}
                            </span>
                            {text}
                        </motion.li>
                    );
                })}
            </motion.ol>
        </div>
    );
}
