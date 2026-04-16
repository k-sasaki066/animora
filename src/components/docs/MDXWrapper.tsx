"use client";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/components/docs/mdx-components";

export function MDXWrapper({ children }: { children: React.ReactNode }) {
    const components = useMDXComponents({});

    return (
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    );
}