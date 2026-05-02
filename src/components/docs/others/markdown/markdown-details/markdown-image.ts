import dedent from "dedent";

export const detail = dedent(`
    MarkDownで画像を表示

    \`\`\`markdown
    ![代替テキスト](画像URL)

    ! = 画像
    \`\`\`

    ---

    Web上の画像を表示
    \`\`\`markdown
    ![代替テキスト](https://******/***.jpg)
    \`\`\`
    ![sample](${process.env.NEXT_PUBLIC_R2_URL}/images/samples/sample-02.webp)

    ---

    ローカル画像を表示
    \`\`\`markdown
    ![代替テキスト](./images/***.png)
    \`\`\`
    ![sample](./images/samples/sample-06.webp)

    ---

    imgタグでサイズ指定
    \`\`\`html
    <img width="***" alt="***" src="***/***.webp" />
    \`\`\`
    <img width="500" alt="sample" src="${process.env.NEXT_PUBLIC_R2_URL}/images/samples/sample-10.webp" />

    ---

    ⚠️ Markdown標準ではサイズ指定できない

    \`\`\`markdown
    ❌ ![img](cat.png width=200)
    ⭕️ <img width="600" alt="sample" src="https://github.com/user-attachments/assets/9c3666f5-eefa-4d4e-a55e-1f67ed395c21" />
    \`\`\`
`);