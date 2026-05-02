import dedent from "dedent";

export const detail = dedent(`
    通常の Markdown に React コンポーネントを直接書ける 仕組み

    Markdown
    \`\`\`markdown
    # タイトル

    - 箇条書き
    - コードブロック
    \`\`\`

    MDX (React コンポーネントが使える)
    \`\`\`markdown
    # タイトル

    <Button>クリック</Button>
    \`\`\`

    - UI付きドキュメントサイト
    - 技術記事に実演を入れられる
    - データから表生成

    #### 基本的な使い方
    コンポーネントをimport
    \`\`\`mdx
    import Button from "@/components/Button";
    import Table from "@/components/Table";
    \`\`\`

    Markdown内で使う
    \`\`\`mdx
    # UIサンプル

    通常文章です。

    <Button>送信</Button>
    \`\`\`

    propsも渡せる
    \`\`\`mdx
    <Table data={items} columns={columns} accordion />
    \`\`\`

    ⚠️ サーバーコンポーネント / Client Component注意
    \`\`\`txt
    MDX 内でuseState, useEffect, onClick etc...
    使うならそのコンポーネント側で "use client"; が必要
`);