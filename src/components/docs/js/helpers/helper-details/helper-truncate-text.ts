import dedent from "dedent";

export const detail = dedent(`
    ### truncate
    文字を途中で省略（...表示）<br />
    長すぎるタイトルを省略してレイアウト崩れ防止<br />
    画面幅が狭い時に文字数制限

    #### 使用場面
    - ECサイトの商品名カード表示
    - 長文コメントの一覧表示
    - モバイルUIのレイアウト崩れ防止

    \`\`\`js
    function truncate(text = "", maxLength = 20) {
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    }

    truncate("これはとても長い文章です", 10);  // "これはとても長い文章..."
    truncate("JavaScript", 10);            // "JavaScript"
    \`\`\`
`);