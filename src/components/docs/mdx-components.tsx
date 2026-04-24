import CodeBlock from "@/components/docs/ui/CodeBlock";

export const markdownComponents = {
    pre({ children }: any) {
        return <>{children}</>;
    },

    code({ className, children }: any) {
        const text = String(children);

        const isBlock =
            className?.startsWith("language-") ||
            text.includes("\n");

        if (isBlock) {
            return <CodeBlock code={text.replace(/\n$/, "")} />;
        }

        return (
            <code className="px-1 py-0.5 rounded bg-zinc-700 text-red-400">
                {children}
            </code>
        );
    },
};