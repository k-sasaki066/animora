import CodeBlock from "@/components/docs/ui/CodeBlock";

export const markdownComponents = {
    pre({ children }: any) {
        return <>{children}</>;
    },

    code({ inline, children }: any) {
        if (!inline) {
            return <CodeBlock code={String(children).replace(/\n$/, "")} />;
        }

        return <code>{children}</code>;
    },
};