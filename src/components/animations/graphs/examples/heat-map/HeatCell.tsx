import { motion } from "framer-motion";
import { colors, getColorIndex, Data } from "./heatmapUtils";

type CellProps = {
    cx?: number;
    cy?: number;
    payload?: Data;
    size: number;
};

export const HeatCell = ({ cx = 0, cy = 0, payload, size }: CellProps) => {
    if (!payload) return null;

    return (
        <motion.rect
            x={cx - size / 2}
            y={cy - size / 2}
            width={size}
            height={size}
            rx={2}
            fill={colors[getColorIndex(payload.value)]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ delay: 0.1, duration: 0.5 }}
        />
    );
};