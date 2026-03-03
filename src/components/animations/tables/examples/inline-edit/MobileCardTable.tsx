"use client";

import { useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Row, EditableField, Column } from "./data";
import { EditableCell } from "./EditableCell";
import { ActionButtons } from "./ActionButtons";

type MobileCardTableProps = {
    data: Row[];
    columns: Column[];
    editingId: number | null;
    editRow: Row | null;
    startEdit: (row: Row) => void;
    saveEdit: () => void;
    cancelEdit: () => void;
    handleChange: (field: EditableField, value: string) => void;
};

export function MobileCardTable({
    data,
    columns,
    editingId,
    editRow,
    startEdit,
    saveEdit,
    cancelEdit,
    handleChange,
}: MobileCardTableProps) {
    const id = useId();

    return (
        <div className="md:hidden w-full h-full flex flex-col gap-4 overflow-auto no-scrollbar">
            <AnimatePresence>
                {data.map((row) => {
                    const editing = editingId === row.id;

                    return (
                        <motion.div
                            key={row.id}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-gray-100 shadow-md rounded-sm p-4 flex flex-col gap-2"
                        >
                            {columns.map((col) => (
                                <div
                                    key={col.key as string}
                                    className="flex justify-between items-center text-sm"
                                >
                                    <span className="w-[20%] min-w-12 font-semibold text-gray-600">
                                        {col.label}
                                    </span>
                                    <div className="flex-1 ml-2">
                                        <EditableCell
                                            id={`${id}-${row.id}-${col.key}`}
                                            name={col.key as string}
                                            editing={editing}
                                            value={String(editRow?.[col.key] ?? "")}
                                            fallbackValue={String(row[col.key])}
                                            type={col.type}
                                            options={col.options}
                                            onChange={(v) => handleChange(col.key as EditableField, v)}
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Action */}
                            <div className="flex justify-end gap-3 mt-2">
                                <ActionButtons
                                    editing={editing}
                                    onSave={saveEdit}
                                    onCancel={cancelEdit}
                                    onEdit={() => startEdit(row)}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}