import { motion } from "framer-motion";
import { random } from "@/utils/random";
import { useMemo } from "react";

export function SvgPiece({
    children,
}: {
    children: React.ReactNode;
}) {
    const initial = useMemo(
    () => ({
        x: random(-500, 500),
        y: random(-500, 500),
        rotate: random(-720, 720),
        }),
        []
    );

    return (
        <motion.g
            variants={{
                hidden: {
                    ...initial,
                    scale: 0,
                    opacity: 0,
                },
                visible: {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    },
                explode: {
                    ...initial,
                    scale: 0,
                    opacity: 0,
                },
            }}
        >
            {children}
        </motion.g>
    );
}