"use client";

import { MDXProvider } from "@mdx-js/react";
import { markdownComponents } from "@/components/docs/mdx-components";

export function MDXWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MDXProvider components={markdownComponents}>
            <article className="prose prose-invert max-w-none">
                {children}
            </article>
        </MDXProvider>
    );
}