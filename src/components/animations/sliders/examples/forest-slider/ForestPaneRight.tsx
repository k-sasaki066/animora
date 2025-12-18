import { motion } from "framer-motion"
import { Forest } from "./forestData"

export function ForestPaneRight({ forest }: { forest: Forest }) {
    return (
        <motion.div
            className="absolute inset-0 flex items-center"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-12 space-y-4">
                <h2 className="text-2xl font-bold">{forest.name}</h2>
                <p className="text-gray-700">{forest.desc}</p>
                <p className="text-sm text-gray-500">{forest.location}</p>
            </div>
        </motion.div>
    )
}