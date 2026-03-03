"use client";

import { motion } from "framer-motion";
import { useId } from "react";

type EditableCellProps = {
    id: string;
    name: string;
    editing: boolean;
    value: string;
    fallbackValue?: string;
    type?: "text" | "select";
    options?: string[];
    onChange: (value: string) => void;
};

export function EditableCell({
    id,
    name,
    editing,
    value,
    fallbackValue,
    type = "text",
    options = [],
    onChange
}: EditableCellProps) {
    if (!editing) return <>{fallbackValue}</>;

    if (type === "select") {
        return (
            <motion.select
                id={id}
                name={name}
                autoComplete="off"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="border rounded px-2 py-1 w-full"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </motion.select>
        );
    }

    // type === "text"
    return (
        <motion.input
            id={id}
            name={name}
            autoComplete={name === "email" ? "email" : "off"}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="border rounded px-2 py-1 w-full"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}