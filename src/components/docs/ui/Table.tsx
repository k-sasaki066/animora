"use client";

import { Fragment, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { markdownComponents } from "../mdx-components";
import { detailMap, type DetailKey } from "@/components/docs/detail-map";

type Column<T> = {
    key: keyof T;
    label: string;
    className?: string;
    render?: (value: any, row: T) => React.ReactNode;
};

type Props<T> = {
    data: T[];
    columns: Column<T>[];

    accordion?: boolean;
    // detailKey?: keyof T;
    defaultOpenIndex?: number | null;
};

export default function Table<T extends { detailKey?: DetailKey }>({
    data,
    columns,
    accordion = false,
    // detailKey,
    defaultOpenIndex = null,
}: Props<T>) {
    const [openIndex, setOpenIndex] =
        useState<number | null>(defaultOpenIndex);
    const [detail, setDetail] = useState<string | null>(null);

    useEffect(() => {
        if (openIndex === null) return;

        const key = data[openIndex]?.detailKey;
        if (!key) return;

        setDetail(null);

        (async () => {
            const module = await detailMap[key]();
            setDetail(module.detail);
        })();
    }, [openIndex, data]);

    const padding = "px-3 py-2";
    const totalCols = accordion
        ? columns.length + 1
        : columns.length;

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse text-center">
                <thead>
                    <tr>
                        {columns.map((col, i) => (
                            <th
                                key={i}
                                className={`${padding} ${col.className ?? ""}`}
                            >
                                {col.label}
                            </th>
                        ))}

                        {accordion && (
                            <th className={`${padding} w-12`} />
                        )}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, i) => {
                        // const detail =
                        //     accordion && detailKey
                        //         ? row[detailKey]
                        //         : null;

                        const hasDetail = !!row.detailKey;
                        const isOpen = hasDetail && openIndex === i;

                        return (
                            <Fragment key={i}>
                                {/* 通常行 */}
                                <motion.tr
                                    onClick={() => {
                                        if (!accordion || !hasDetail) return;

                                        setOpenIndex(isOpen ? null : i);
                                    }}
                                    initial={false}
                                    animate={{
                                        backgroundColor: isOpen
                                            ? "rgba(24,24,27,1)"
                                            : "rgba(0,0,0,0)",
                                    }}
                                    whileHover={
                                        accordion && hasDetail
                                            ? { backgroundColor: "rgba(24,24,27,1)" }
                                            : {}
                                    }
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    }}
                                    className={
                                        accordion && hasDetail
                                            ? "cursor-pointer"
                                            : ""
                                    }
                                >
                                    {columns.map((col, j) => {
                                        const value =
                                            row[col.key];

                                        return (
                                            <td
                                                key={j}
                                                className={`${padding} ${
                                                    col.className ??
                                                    ""
                                                } align-middle whitespace-pre-line`}
                                            >
                                                {col.render
                                                    ? col.render( value, row )
                                                    : (value as React.ReactNode)}
                                            </td>
                                        );
                                    })}

                                    {accordion && (
                                        <td className={`${padding} align-middle text-center`}>
                                            {hasDetail && (
                                                <span className="relative flex items-center justify-center w-6 h-6 mx-auto">
                                                    <span className="absolute w-4 h-px bg-white rounded" />

                                                    <motion.span
                                                        animate={{
                                                            scaleY: isOpen ? 0 : 1,
                                                            opacity: isOpen ? 0 : 1,
                                                        }}
                                                        transition={{
                                                            duration: 0.25,
                                                        }}
                                                        className="absolute h-4 w-px bg-white rounded"
                                                    />
                                                </span>
                                            )}
                                        </td>
                                    )}
                                </motion.tr>

                                {/* 詳細行 */}
                                {accordion && (
                                    <tr>
                                        <td
                                            colSpan={totalCols}
                                            className="p-0 border-0"
                                        >
                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0
                                                        }}
                                                        transition={{
                                                            type: "tween",
                                                            duration: 0.35
                                                        }}
                                                        style={{
                                                            transformOrigin: "top",
                                                        }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="max-h-96 overflow-y-auto no-scrollbar p-5 text-left bg-zinc-800">
                                                            <article className="prose prose-invert max-w-none">
                                                                {detail ? (
                                                                    <ReactMarkdown
                                                                        remarkPlugins={[remarkGfm]}
                                                                        rehypePlugins={[rehypeRaw]}
                                                                        components={markdownComponents}
                                                                    >
                                                                        {detail}
                                                                    </ReactMarkdown>
                                                                ) : (
                                                                    <p className="text-center py-8">読み込み中...</p>
                                                                )}
                                                            </article>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </td>
                                    </tr>
                                )}
                            </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}