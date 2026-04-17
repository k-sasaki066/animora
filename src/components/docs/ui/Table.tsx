type Column<T> = {
    key: keyof T;
    label: string;
    className?: string;
    render?: (value: any, row: T) => React.ReactNode;
};

type Props<T> = {
    data: T[];
    columns: Column<T>[];
};

export default function Table<T>({ data, columns }: Props<T>) {
    const padding = "px-3 py-2";

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-center">
                <thead>
                    <tr>
                        {columns.map((col, i) => (
                            <th key={i} className={`${padding} ${col.className ?? ""}`}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {columns.map((col, j) => {
                                const value = row[col.key];
                                return (
                                    <td key={j} className={`${padding} ${col.className ?? ""} align-middle whitespace-pre-line`}>
                                        {col.render ? col.render(value, row) : (value as React.ReactNode)}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}