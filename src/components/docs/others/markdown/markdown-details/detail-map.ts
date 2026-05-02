export const detailMap = {
    markdownHeading: () => import("./markdown-heading"),
    markdownTextBold: () => import("./markdown-text-bold"),
    markdownItalic: () => import("./markdown-italic"),
    markdownStrikethrough: () => import("./markdown-strikethrough"),
    markdownHighlight: () => import("./markdown-highlight"),
    markdownInlineCode: () => import("./markdown-inline-code"),
    markdownCodeBlock: () => import("./markdown-code-block"),
    markdownList: () => import("./markdown-list"),
    markdownLink: () => import("./markdown-link"),
    markdownImage: () => import("./markdown-image"),
    markdownBlockquote: () => import("./markdown-blockquote"),
    markdownDivider: () => import("./markdown-divider"),
    markdownTable: () => import("./markdown-table"),
    markdownLineBreak: () => import("./markdown-line-break"),
    markdownHtmlTag: () => import("./markdown-html-tag"),
    markdownMdx: () => import("./markdown-mdx"),
} as const;

export type DetailKey = keyof typeof detailMap;