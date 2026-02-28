import { Status } from "./data";

type Props = {
    status: Status;
};

export default function StatusBadge({ status }: Props) {
    const isComplete = status === "Completed";

    return (
        <span
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${isComplete
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                }`}
        >
            {status}
        </span>
    );
}