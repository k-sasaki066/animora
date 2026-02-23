"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

const HEIGHT = 48;

const SIDE_BORDER = HEIGHT * 0.45;
const SIDE_WIDTH = HEIGHT * 0.15;
const FOLD_HEIGHT = HEIGHT * 0.2;
const FOLD_WIDTH = HEIGHT * 0.33;

const RIBBON_SIDES = [
    {
        key: "left",
        backOffset: (SIDE_BORDER: number, SIDE_WIDTH: number) => ({
            left: -(SIDE_BORDER + SIDE_WIDTH),
        }),
        backTransparent: { borderLeftColor: "transparent" },
        foldPosition: { left: 0 },
        foldBorder: (FOLD_WIDTH: number) => ({
            borderRight: `${FOLD_WIDTH}px solid #397eb5`,
        }),
    },
    {
        key: "right",
        backOffset: (SIDE_BORDER: number, SIDE_WIDTH: number) => ({
            right: -(SIDE_BORDER + SIDE_WIDTH),
        }),
        backTransparent: { borderRightColor: "transparent" },
        foldPosition: { right: 0 },
        foldBorder: (FOLD_WIDTH: number) => ({
            borderLeft: `${FOLD_WIDTH}px solid #397eb5`,
        }),
    },
] as const;

export default function FoldedRibbon() {

    return (
        <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full flex justify-center z-0"
            style={{ height: HEIGHT }}
        >
            {/* 中央リボン */}
            <div
                className="relative w-[75%] max-w-65 flex items-center justify-center px-5 text-white text-lg bg-[#2196F3]"
                style={{ height: HEIGHT }}
            >
                {RIBBON_SIDES.map((side) => (
                    <Fragment key={side.key}>
                        {/* 背面 */}
                        <div
                            className="absolute -z-10"
                            style={{
                                bottom: -FOLD_HEIGHT,
                                width: SIDE_WIDTH,
                                border: `${SIDE_BORDER}px solid #56adf3`,
                                ...side.backOffset(SIDE_BORDER, SIDE_WIDTH),
                                ...side.backTransparent,
                            }}
                        />

                        {/* 折り返し */}
                        <div
                            className="absolute"
                            style={{
                                top: "100%",
                                borderBottom: `${FOLD_HEIGHT}px solid transparent`,
                                ...side.foldPosition,
                                ...side.foldBorder(FOLD_WIDTH),
                            }}
                        />
                    </Fragment>
                ))}

                Welcome!
            </div>
        </motion.div>
    );
}