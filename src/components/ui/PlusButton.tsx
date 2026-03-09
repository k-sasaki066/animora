import { CiCirclePlus } from "react-icons/ci";

interface PlusButtonProps {
    onClick: () => void;
}

export function PlusButton({ onClick }: PlusButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="absolute top-2 right-2 text-3xl text-[#464861] p-1.5 cursor-pointer"
        >
            <CiCirclePlus />
        </button>
    );
}