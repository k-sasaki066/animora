import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useContainerSize } from "@/hooks/useContainerSize";
import { FaWalking, FaBicycle, FaCar, FaPlane } from "react-icons/fa";

const BASE_WIDTH = 400;
const options = [
    { id: "walk", label: "Walk", icon: FaWalking },
    { id: "bike", label: "Bike", icon: FaBicycle },
    { id: "drive", label: "Drive", icon: FaCar },
    { id: "fly", label: "Fly", icon: FaPlane },
];

export default function IconRadio() {
    const { ref, width } = useContainerSize<HTMLDivElement>();
    const scale = width
        ? Math.min(Math.max(width / BASE_WIDTH, 0.35), 1.3)
        : 1;

    const [value, setValue] = useState<string>("");

    const prefersReducedMotion = useReducedMotion();
    const reduce = prefersReducedMotion ?? false;

    return (
        <div ref={ref} className="w-full h-full bg-[#222]">
            <motion.div
                className="w-full h-full flex justify-center items-center"
                animate={{ scale }}
            >
                <fieldset className="border-0 p-0 m-0">
                    <legend className="sr-only">Icon radio group</legend>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {options.map(({ id, label, icon: Icon }) => {
                            const active = value === id;

                            return (
                                <label
                                    key={id}
                                    className="relative h-18 w-18 cursor-pointer"
                                >
                                    {/* Native radio */}
                                    <input
                                        type="radio"
                                        name="icon-selector"
                                        value={id}
                                        checked={active}
                                        onChange={() => setValue(id)}
                                        className="sr-only peer"
                                    />

                                    {/* Visual */}
                                    <motion.div
                                        className="
                                            flex h-full w-full flex-col items-center justify-center
                                            rounded-xs border-2 border-[#079ad9] p-1.5
                                            peer-focus-visible:outline-2
                                            peer-focus-visible:outline-[#0DFF92]
                                        "
                                        animate={{
                                            scale: active ? 1.1 : 1,
                                            backgroundColor: active
                                                ? "#079ad9"
                                                : "#222222",
                                        }}
                                        transition={
                                            reduce
                                                ? { duration: 0 }
                                                :{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20,
                                                }
                                        }
                                    >
                                        <Icon
                                            size={48}
                                            className={
                                                active
                                                    ? "text-white"
                                                    : "text-[#079ad9]"
                                            }
                                        />

                                        <span
                                            className={`
                                                mt-2 text-xs font-semibold tracking-widest uppercase
                                                ${
                                                    active
                                                        ? "text-white"
                                                        : "text-[#079ad9]"
                                                }
                                            `}
                                        >
                                            {label}
                                        </span>
                                    </motion.div>
                                </label>
                            );
                        })}
                    </div>
                </fieldset>
            </motion.div>
        </div>
    );
}