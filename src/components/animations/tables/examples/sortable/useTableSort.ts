import { useState, useMemo } from "react";

export function useTableSort<T>(data: T[], defaultKey: keyof T) {
    const [sortKey, setSortKey] = useState<keyof T>(defaultKey);
    const [direction, setDirection] = useState<"asc" | "desc">("asc");

    const sorted = useMemo(() => {
        const sortedData = [...data].sort((a: any, b: any) => {
            const aVal = a[sortKey];
            const bVal = b[sortKey];

            if (typeof aVal === "string") {
                return direction === "asc"
                    ? aVal.localeCompare(bVal)
                    : bVal.localeCompare(aVal);
            }

            return direction === "asc"
                ? aVal - bVal
                : bVal - aVal;
        });

        return sortedData;
    }, [data, sortKey, direction]);

    const handleSort = (key: keyof T) => {
        if (key === sortKey) {
            setDirection((d) => (d === "asc" ? "desc" : "asc"));
        } else {
            setSortKey(key);
            setDirection("asc");
        }
    };

    return {
        sorted,
        sortKey,
        direction,
        handleSort,
    };
}