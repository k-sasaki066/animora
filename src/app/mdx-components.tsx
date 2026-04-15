import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        wrapper: ({ children }) => (
            <div className="prose prose-invert max-w-none px-2">
                {children}
            </div>
        ),
        ...components,
    };
}