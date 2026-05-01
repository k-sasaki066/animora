import dedent from "dedent";

export const detail = dedent(`
    テキスト入力のたびにリアルタイムで処理を実行する<br />
    debounce（遅延処理）とセットで使うことが多い

    - 文字入力するたびに動く
    - 削除しても動く
    - コピー＆ペーストでも動く

    #### 使用場面
    - 検索フォーム（サジェスト）
    - リアルタイムバリデーション
    - フィルタリング
    - 入力内容の確認表示
    - チャット入力補助

    #### 実行例
    \`\`\`html
    <input id="text" />
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#text");

    input.addEventListener("input", (e) => {
        console.log(e.target.value);
    });
    \`\`\`

    #### API連携はdebounceと組み合わせる
    \`\`\`js
    const handler = debounce((value) => {
        fetch(\`/api/search?q=\\\${value}\`);
    }, 300);

    input.addEventListener("input", (e) => {
        handler(e.target.value);
    });
    \`\`\`
`);