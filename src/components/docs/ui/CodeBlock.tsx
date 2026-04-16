"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type Props = {
    code: string;
};

export default function CodeBlock({ code }: Props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="relative">
            <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm">
                <code>{code}</code>
            </pre>

            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-xs hover:bg-zinc-600 text-white px-2 py-1 rounded transition"
            >
                {copied ? (
                    <Check size={16} className="text-green-400" />
                ) : (
                    <Copy size={16} className="text-zinc-300" />
                )}
            </button>
        </div>
    );
}