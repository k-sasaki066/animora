import type { DetailKey } from "./markdown-details/detail-map";

export type CommandItem = {
    command: string;
    description: string;
    detailKey?: DetailKey;
};

export const markdownColumns = [
    { key: "command", label: "記法", className: "font-mono text-xs" },
    { key: "description", label: "説明" },
];

export const markdownData: CommandItem[] = [
    {
        command: "見出し",
        description: "h1~h6の見出しを表示",
        detailKey: "markdownHeading",
    },
    {
        command: "**文字**",
        description: "文字を太字にする",
        detailKey: "markdownTextBold",
    },
    {
        command: "*文字*",
        description: "文字を斜体にする",
        detailKey: "markdownItalic",
    },
    {
        command: "~~文字~~",
        description: "文字に打ち消し線を引く",
        detailKey: "markdownStrikethrough",
    },
    {
        command: "下線・ハイライト",
        description: "文字に下線やハイライトをつける",
        detailKey: "markdownHighlight",
    },
    {
        command: "`code`",
        description: "インラインコードを表示",
        detailKey: "markdownInlineCode",
    },
    {
        command: "```js ... ```",
        description: "コードブロックを表示",
        detailKey: "markdownCodeBlock",
    },
    {
        command: "- 項目",
        description: "箇条書きリストを表示",
        detailKey: "markdownList",
    },
    {
        command: "[文字](URL)",
        description: "リンクを表示",
        detailKey: "markdownLink",
    },
    {
        command: "![alt](画像URL)",
        description: "画像を表示",
        detailKey: "markdownImage",
    },
    {
        command: "> 引用文",
        description: "引用ブロックを表示",
        detailKey: "markdownBlockquote",
    },
    {
        command: "---",
        description: "区切り線を表示",
        detailKey: "markdownDivider",
    },
    {
        command: "| A | B |",
        description: "テーブル（表）を作成",
        detailKey: "markdownTable",
    },
    {
        command: "<br />",
        description: "改行を入れる（環境依存）",
        detailKey: "markdownLineBreak",
    },
    {
        command: "<span>文字</span>",
        description: "HTMLタグを埋め込める（対応環境のみ）",
        detailKey: "markdownHtmlTag",
    },
    {
        command: ".mdx",
        description: "Reactコンポーネントを埋め込める（MDX）",
        detailKey: "markdownMdx",
    },
];