"use client";

import { motion } from "framer-motion";

export default function TransformShapeButton() {

    return (
        <motion.div
            className="relative px-8 py-4 cursor-pointer w-40 h-12 flex justify-center items-center"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {
                    borderTop: "1px solid rgba(0,0,0,0)",
                    borderRight: "1px solid rgba(0,0,0,0)",
                    borderLeft: "1px solid rgba(0,0,0,0)",
                    borderBottom: "2px solid #8b5cf6",
                    borderRadius: "0px",
                },
                hover: {
                    borderTop: "2px solid #d1d5dc",
                    borderRight: "2px solid #d1d5dc",
                    borderLeft: "2px solid #d1d5dc",
                    borderBottom: "2px solid #d1d5dc",
                    borderRadius: "999px",
                }
            }}
            transition={{ duration: 0.6 }}
        >
            Button
        </motion.div>
    );
}