"use client";

import { useState, useRef, useCallback } from "react";

export function useHighlightTable() {
    const tableRef = useRef<HTMLTableElement>(null);

    const [hoverCol, setHoverCol] = useState<number | null>(null);
    const [activeCol, setActiveCol] = useState<number | null>(null);
    const [activeRow, setActiveRow] = useState<number | null>(null);
    const [colPos, setColPos] = useState({ left: 0, width: 0 });

    const updateColPosition = useCallback((index: number) => {
        if (!tableRef.current) return;

        const cells = tableRef.current.querySelectorAll("th");
        const tableRect = tableRef.current.getBoundingClientRect();
        const rect = cells[index].getBoundingClientRect();
        setColPos({
            left: rect.left - tableRect.left,
            width: rect.width,
        });
    }, []);

    const handleHover = useCallback((index: number) => {
        if (activeCol !== null) return;

        updateColPosition(index);
        setHoverCol(index);
    }, [activeCol, updateColPosition]);

    const handleTap = useCallback((rowIndex: number, colIndex: number) => {
        updateColPosition(colIndex);

        if (activeRow === rowIndex) {
            setActiveRow(null);
            setHoverCol(null);
            return;
        }

        setActiveRow(rowIndex);
        setHoverCol(colIndex);
    }, [activeRow, updateColPosition]);

    return {
        tableRef,
        hoverCol,
        activeCol,
        activeRow,
        colPos,
        setHoverCol,
        setActiveCol,
        setActiveRow,
        handleHover,
        handleTap,
    };
}