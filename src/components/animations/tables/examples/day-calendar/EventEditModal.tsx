
import { FaTimes, FaSave, FaTrash } from "react-icons/fa";

type EventType = {
    id: string;
    title: string;
    start: Date | string;
    end?: Date | string;
};

type Props = {
    event: EventType;
    title: string;
    setTitle: (val: string) => void;
    onClose: () => void;
    onSave: () => void;
    onDelete: () => void;
};

export function EventEditModal({
    event,
    title,
    setTitle,
    onClose,
    onSave,
    onDelete,
}: Props) {
    const buttonClass = "p-2 sm:p-3 text-white rounded";

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="relative bg-white p-6 rounded-sm w-[80%] min-w-62 space-y-4 text-xs sm:text-sm md:text-base">

                {/* 閉じるボタン */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 bg-gray-300 rounded-xs"
                >
                    <FaTimes />
                </button>

                <h2 className="text-lg font-bold">
                    イベント編集
                </h2>

                <label htmlFor="event-title" className="sr-only">
                    イベントタイトル
                </label>
                <input
                    id="event-title"
                    name="event-title"
                    className="w-full border p-2 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={onSave}
                        className={`bg-blue-400 ${buttonClass}`}
                    >
                        <FaSave />
                    </button>

                    <button
                        type="button"
                        onClick={onDelete}
                        className={`bg-red-500 ${buttonClass}`}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}