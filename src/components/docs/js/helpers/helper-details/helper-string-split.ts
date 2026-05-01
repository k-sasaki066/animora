import dedent from "dedent";

export const detail = dedent(`
    ### split
    文字列を指定した区切り文字で分割し、配列に変換する関数

    #### 使用場面
    - タグ一覧  ("React,Next.js,TypeScript"など)
    - 入力文字列の分割
    - CSVデータ処理
    - URLパス分解

    \`\`\`js
    const parts = 文字.split("指定区切り");

    const parts = "a,b,c".split(",");
    // ['a', 'b', 'c'] カンマ区切り

    const words = "hello world javascript".split(" ");
    // ["hello", "world", "javascript"] スペース区切り

    const chars = "hello".split("");
    // ["h", "e", "l", "l", "o"] 1文字ずつ分割

    const data = "a,b,c,d".split(",", 2);
    // ["a", "b"] 件数制限して分割
    \`\`\`
`);