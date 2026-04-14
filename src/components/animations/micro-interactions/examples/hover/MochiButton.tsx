import { motion } from "framer-motion";
import GooeyFilter from "@/components/ui/GooeyFilter";
import { useToggleHover } from "@/hooks/useToggleHover";
import type { ButtonParams } from "../../button-animation";

export default function MochiButton({
    speed = 1,
    color = "#99a1af",
}: ButtonParams) {
    const { active, bind } = useToggleHover();

    return (
        <>
            <GooeyFilter id="goo" />

            <div
                className="relative w-40 h-12 cursor-pointer"
                style={{ filter: "url(#goo)" }}
            >
                <motion.div
                    className="relative w-full h-full inline-block rounded-xl"
                    initial="rest"
                    animate={active ? "hover" : "rest"}
                    {...bind}
                >
                    {/* 上の丸 */}
                    <motion.div
                        className="absolute rounded-full z-0"
                        style={{
                            width: "36%",   // 親幅の36%
                            height: "85%",  // 親高さの85%
                            top: "-20%",    // 親上端より少し上
                            left: "22%",    // 親幅の22%左から
                            backgroundColor: color,
                        }}
                        variants={{
                            rest: { scale: 0 },
                            hover: { scale: 1.15 }
                        }}
                        transition={{
                            duration: speed,
                            ease: "easeInOut"
                        }}
                    />

                    {/* 下の丸 */}
                    <motion.div
                        className="absolute rounded-full z-0"
                        style={{
                            width: "36%",
                            height: "85%",
                            bottom: "-20%",
                            right: "20%",
                            backgroundColor: color,
                        }}
                        variants={{
                            rest: { scale: 0 },
                            hover: { scale: 1.15 }
                        }}
                        transition={{
                            duration: speed,
                            ease: "easeInOut"
                        }}
                    />

                    {/* ボタン本体 */}
                    <button
                        className="relative w-full h-full rounded-xl font-bold text-white"
                        style={{
                            backgroundColor: color,
                        }}
                    >
                        BUTTON
                    </button>
                </motion.div>
            </div>
        </>
    );
}