"use client";

import { useState } from "react";
import { Row, EditableField, initialData } from "./data";

export function useInlineEditTable() {
    const [data, setData] = useState<Row[]>(initialData);
    const [editRow, setEditRow] = useState<Row | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [query, setQuery] = useState<string>("");

    // 編集開始
    const startEdit = (row: Row) => {
        setEditingId(row.id);
        setEditRow(row);
    };

    // 編集キャンセル
    const cancelEdit = () => {
        setEditingId(null);
        setEditRow(null);
    };

    // 編集保存
    const saveEdit = () => {
        if (!editRow || editingId === null) return;

        setData(prev =>
            prev.map(item =>
                item.id === editingId ? editRow : item
            )
        );

        setEditingId(null);
        setEditRow(null);
    };

    // セル編集
    const handleChange = (field: EditableField, value: string) => {
        if (!editRow) return;
        setEditRow({
            ...editRow,
            [field]: value
        });
    };

    // 検索フィルター
    const filteredData = data.filter(row =>
        row.name.toLowerCase().includes(query.toLowerCase()) ||
        row.role.toLowerCase().includes(query.toLowerCase()) ||
        row.email.toLowerCase().includes(query.toLowerCase())
    );

    return {
        data,
        editRow,
        editingId,
        query,
        filteredData,
        setQuery,
        startEdit,
        cancelEdit,
        saveEdit,
        handleChange
    };
}