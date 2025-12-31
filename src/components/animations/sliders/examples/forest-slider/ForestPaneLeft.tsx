import { motion } from "framer-motion"
import { Forest } from "./forestData"
import { ForestSliderConfig } from "@/lib/responsive/forestConfig"

export function ForestPaneLeft({
    forest,
    config
}: {
    forest: Forest
    config: ForestSliderConfig
}) {
    return (
        <motion.div
            className="absolute inset-0 overflow-hidden group"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileHover="hover"
            whileTap="hover"
        >

            {/* 画像レイヤー */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${forest.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* 数字マスク */}
            <motion.div
                className="absolute inset-0 bg-[#f6f6fb]"
                variants={{
                    hover: { opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <p
                    className={`
                    flex items-center justify-center w-full h-full  font-extrabold leading-none text-transparent bg-[#f6f6fb]  select-none z-10 ${config.rankTextClass}
                    `}
                    style={{
                        backgroundImage: `url(${forest.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                    }}
                >
                    {forest.rank}
                </p>
            </motion.div>
        </motion.div>
    )
}