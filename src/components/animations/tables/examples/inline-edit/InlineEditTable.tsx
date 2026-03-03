"use client";

import { motion, AnimatePresence } from "framer-motion";
import { EditableField, columns } from "./data";
import { MobileCardTable } from "./MobileCardTable";
import { EditableCell } from "./EditableCell";
import { ActionButtons } from "./ActionButtons";
import { useInlineEditTable } from "./useInlineEditTable";

export default function InlineEditTable() {
    const {
        editRow,
        editingId,
        query,
        filteredData,
        setQuery,
        startEdit,
        cancelEdit,
        saveEdit,
        handleChange
    } = useInlineEditTable();

    const itemPadding = "p-2.5";

    return (
        <div className="w-full h-full flex flex-col justify-start">
            {/* 検索バー */}
            <div className="w-50 mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full border rounded px-3 py-1.5 shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-400"
                />
            </div>

            <div className="hidden md:block w-full bg-white shadow-xl overflow-auto no-scrollbar">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100 text-sm text-center sticky top-0 z-10">
                        <tr>
                            <th className={`w-35 ${itemPadding}`}>
                                Name
                            </th>
                            <th className={`w-26 ${itemPadding}`}>
                                Role
                            </th>
                            <th className={itemPadding}>
                                Email
                            </th>
                            <th className={`w-25 ${itemPadding}`}>
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <AnimatePresence>
                            {filteredData.map((row) => {
                                const editing = editingId === row.id;

                                return (
                                    <motion.tr
                                        key={row.id}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="border-t"
                                    >
                                        {columns.map((col) => (
                                            <td key={col.key as string} className={itemPadding}>
                                                <EditableCell
                                                    editing={editing}
                                                    value={String(editRow?.[col.key] ?? "")}
                                                    fallbackValue={String(row[col.key])}
                                                    type={col.type}
                                                    options={col.options}
                                                    onChange={(v) => handleChange(col.key as EditableField, v)}
                                                />
                                            </td>
                                        ))}

                                        {/* Action */}
                                        <td className={`text-center ${itemPadding}`}>
                                            <div className="flex justify-center gap-3">
                                                <ActionButtons
                                                    editing={editingId === row.id}
                                                    onSave={saveEdit}
                                                    onCancel={cancelEdit}
                                                    onEdit={() => startEdit(row)}
                                                />
                                            </div>
                                        </td>
                                    </motion.tr>
                                );
                            })}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {/* モバイルカード版 */}
            <MobileCardTable
                data={filteredData}
                columns={columns}
                editingId={editingId}
                editRow={editRow}
                startEdit={startEdit}
                saveEdit={saveEdit}
                cancelEdit={cancelEdit}
                handleChange={handleChange}
            />
        </div>
    );
}