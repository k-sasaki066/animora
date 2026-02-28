type MobileLabel = "ID" | "Name" | "Link" | "Status";

type Props = {
    label: MobileLabel;
    value: React.ReactNode;
};

export default function MobileRow({ label, value }: Props) {
    return (
        <div className="flex justify-between text-sm gap-1">
            <span className="font-medium text-gray-500 dark:text-gray-600">
                {label}
            </span>
            <span className="text-right text-gray-800 dark:text-gray-500">
                {value}
            </span>
        </div>
    );
}