import { ReactNode } from "react";

type CalendarButtonProps = {
    icon?: ReactNode;
    label?: string;
    active?: boolean;
    onClick: () => void;
};

export function CalendarButton({ icon, label, active, onClick }: CalendarButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d73e8] ${active ? "bg-[#3d73e8] text-white" : "bg-gray-100 hover:bg-gray-200"}`}
        >
            {icon}
            {label && <span className="inline text-xs md:text-sm uppercase">{label}</span>}
        </button>
    );
}