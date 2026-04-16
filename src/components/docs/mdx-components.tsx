import CodeBlock from "@/components/docs/ui/CodeBlock";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        wrapper: ({ children }) => (
            <article className="prose prose-invert max-w-none">
                {children}
            </article>
        ),

        pre: (props: any) => {
            const code = props.children?.props?.children ?? "";
            return <CodeBlock code={code} />;
        },

        ...components,
    };
}