
export const colorColumns = [
    {
        key: "name",
        label: "色",
        className: "text-left w-[20%]",
    },
    {
        key: "hex",
        label: "HEX",
        className: "w-[20%]",
        render: (value: string) => (
            <div className="flex items-center gap-2 justify-start">
                <span
                    className="inline-block w-4 h-4 rounded border border-zinc-500"
                    style={{ backgroundColor: value }}
                />
                <span className="font-mono text-sm">
                    {value}
                </span>
            </div>
        ),
    },
    {
        key: "rgb",
        label: "RGB",
        className: "font-mono text-sm w-[30%]",
    },
    {
        key: "hsl",
        label: "HSL",
        className: "font-mono text-sm w-[30%]",
    },
];