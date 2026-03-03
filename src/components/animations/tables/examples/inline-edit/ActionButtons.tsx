"use client";

import { FaEdit, FaSave, FaTimes } from "react-icons/fa"

type ActionButtonsProps = {
    editing: boolean;
    onSave: () => void;
    onCancel: () => void;
    onEdit: () => void;
};

export function ActionButtons({
    editing,
    onSave,
    onCancel,
    onEdit
}: ActionButtonsProps) {
    const hoverClass = "hover:scale-110 transition";

    return editing ? (
        <>
            <button
                type="button"
                onClick={onSave}
                className={`text-green-600 ${hoverClass}`}
            >
                <FaSave />
            </button>
            <button
                type="button"
                onClick={onCancel}
                className={`text-red-500 ${hoverClass}`}
            >
                <FaTimes />
            </button>
        </>
    ) : (
        <button
            type="button"
            onClick={onEdit}
            className={`text-blue-600 ${hoverClass}`}
        >
            <FaEdit />
        </button>
    );
}