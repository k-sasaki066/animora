import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";

const BASE_WIDTH = 400;

export default function RippleRadio() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.6), 1.3)
        : 1;

    const [value, setValue] = useState("1");
    const values = ["1", "2", "3"];
    const checkedColor = "rgb(51, 122, 183)";
    const borderColor = "rgba(0,0,0,0.54)";

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    return (
        <div
            ref={ref}
            className="w-full h-full flex justify-center items-center"
        >
            <motion.div
                className="space-y-4"
                animate={{ scale }}
            >
                <fieldset className="space-y-4">
                    <legend className="sr-only">
                        Ripple radio group
                    </legend>

                    {values.map((v) => {
                        const checked = value === v;

                        return (
                            <label
                                key={v}
                                className="flex items-center gap-3 cursor-pointer select-none"
                            >
                                <input
                                    type="radio"
                                    name="g"
                                    value={v}
                                    checked={checked}
                                    onChange={() => setValue(v)}
                                    className="peer sr-only"
                                />

                                {/* outer circle */}
                                <motion.div
                                    className="relative flex items-center justify-center rounded-full border-2"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderColor: checked
                                            ? checkedColor
                                            : borderColor,
                                    }}
                                    animate={
                                        checked
                                            ? {
                                                boxShadow: [
                                                    "0 0 0 0 rgba(0,0,0,0)",
                                                    "0 0 0 15px rgba(0,0,0,0.1)",
                                                    "0 0 0 15px rgba(0,0,0,0)",
                                                ],
                                            }
                                            : {}
                                    }
                                    transition={
                                        reduce
                                            ? { duration: 0 }
                                            : {
                                                duration: 0.2,
                                                ease: "linear",
                                            }
                                    }
                                >
                                    <motion.div
                                        className="rounded-full"
                                        style={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: checkedColor,
                                        }}
                                        initial={false}
                                        animate={{
                                            scale: checked ? 1 : 0,
                                        }}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                : {
                                                    duration: 0.2,
                                                }
                                        }
                                    />
                                </motion.div>

                                <span>Option {v}</span>
                            </label>
                        );
                    })}
                </fieldset>
            </motion.div>
        </div>
    );
}