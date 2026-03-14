import { motion } from "framer-motion";
import { useContainerSize } from "@/hooks/useContainerSize";
import { useToggleHover } from "@/hooks/useToggleHover";

const BASE_WIDTH = 420;
const SIZE = 40;

type ListItem = string;

const items: ListItem[] = [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
];

const colors = [
    "#FFA79F",
    "#fbaf5d",
    "#9FCDFF",
    "#AFEBB6"
];


export default function ColorfulList() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.5), 1)
        : 1;

    const { activeIndex, bindIndex } = useToggleHover();

    return (
        <div ref={ref} className="w-full h-full flex justify-center items-center">
            <motion.ul className="w-[60%] min-w-55 p-0 list-none space-y-3" animate={{scale}}>
                {items.map((item, index) => {
                    const color = colors[index % colors.length];
                    const active = activeIndex === index;

                    return (
                        <motion.li
                            key={index}
                            {...bindIndex(index)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`relative flex items-center  border border-dashed cursor-pointer overflow-hidden`}
                            style={{
                                height: `${SIZE}px`,
                                paddingLeft: `${SIZE}px`,
                                borderColor: color
                            }}
                        >
                            {/* Number Circle */}
                            <div
                                className={`absolute left-0 aspect-square flex items-center justify-center text-white font-bold transition-all duration-400`}
                                style={{
                                    width: `${SIZE}px`,
                                    backgroundColor: active ? "white" : color,
                                    color: active ? color : "white"
                                }}
                            >
                                {index + 1}
                            </div>

                            <div
                                className={`w-full text-center transition-all  duration-400`}
                                style={{
                                    lineHeight: `${SIZE}px`,
                                    backgroundColor: active ? color : "transparent",
                                    color: active ? "white" : "inherit"

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
