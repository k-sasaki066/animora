import { motion } from "framer-motion"
import { Forest } from "./forestData"
import { ForestSliderConfig } from "@/lib/responsive/forestConfig"

export function ForestPaneRight({
    forest,
    config
}: {
    forest: Forest
    config: ForestSliderConfig
}) {
    return (
        <motion.div
            className="absolute inset-0 flex items-center"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`${config.contentPadding}`}>
                <h2 className={`font-bold ${config.titleClass}`}>
                    {forest.name}
                </h2>
                <p className={`text-gray-700 ${config.textClass}`}>
                    {forest.desc}
                </p>
                <p className={`text-gray-500 ${config.textClass}`}>
                    {forest.location}
                </p>
            </div>
        </motion.div>
    )
}