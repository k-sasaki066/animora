import dedent from "dedent";

export const detail = dedent(`
    質問をクリックすると回答が開閉する

    #### 使用場面
    - FAQページ
    - サポートページ
    - 商品説明Q&A
    - 社内ヘルプページ

    \`\`\`html
    <div id="faq"></div>
    \`\`\`

    \`\`\`js
    const faq = document.querySelector("#faq");

    faq.innerHTML = \`
        <details>
            <summary>
                返品できますか？
            </summary>
            <p>
                商品到着後30日以内なら可能です。
            </p>
        </details>

        <details>
            <summary>
                送料はいくらですか？
            </summary>
            <p>
                全国一律500円です。
            </p>
        </details>
    \`;
    \`\`\`

    ポイント
    - \`details\` タグで簡単実装できる
    - クリックで自動開閉
    - JS最小限で作れる
`);