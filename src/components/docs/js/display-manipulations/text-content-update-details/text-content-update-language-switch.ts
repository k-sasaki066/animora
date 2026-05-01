import dedent from "dedent";

export const detail = dedent(`
    表示している文字をボタン操作で切り替える処理

    #### 使用場面
    - コーポレートサイトの多言語対応
    - ECサイトの商品説明切替
    - 海外ユーザー向けLP
    - ダッシュボードUIの言語変更

    \`\`\`html
    <h1 id="title">ようこそ</h1>

    <button id="jaBtn">日本語</button>
    <button id="enBtn">English</button>
    \`\`\`

    \`\`\`js
    const title = document.querySelector("#title");
    const jaBtn = document.querySelector("#jaBtn");
    const enBtn = document.querySelector("#enBtn");

    jaBtn.addEventListener("click", () => {
        title.textContent = "ようこそ";
    });

    enBtn.addEventListener("click", () => {
        title.textContent = "Welcome";
    });
    \`\`\`

    #### 実行結果
    \`\`\`text
    初期表示       : ようこそ
    English押下   : Welcome
    日本語押下     : ようこそ
    \`\`\`

    ---

    #### より実務的な方法（辞書データで管理）
    \`\`\`js
    const messages = {
        ja: "ようこそ",
        en: "Welcome",
        fr: "Bienvenue"
    };

    function changeLang(lang) {
        title.textContent = messages[lang];
    }

    changeLang("en");
    \`\`\`

    ポイント
    - \`textContent\` を使うと安全に文字だけ変更できる
    - HTMLタグを含めたい場合は \`innerHTML\`
    - 実務では localStorage に保存して次回アクセス時も保持することが多い
`);