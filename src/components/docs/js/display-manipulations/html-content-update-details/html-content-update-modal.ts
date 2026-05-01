import dedent from "dedent";

export const detail = dedent(`
    確認画面や詳細情報をポップアップ表示する処理<br />

    #### 使用場面
    - 削除確認ダイアログ
    - ログイン案内
    - 詳細情報表示
    - キャンペーン告知

    \`\`\`html
    <div id="modal"></div>
    <button id="openBtn">開く</button>
    \`\`\`

    \`\`\`js
    const modal = document.querySelector("#modal");
    const openBtn =
        document.querySelector("#openBtn");

    openBtn.addEventListener("click", () => {
        modal.innerHTML = \`
            <div class="overlay">
                <div class="box">
                    <h2>確認</h2>
                    <p>削除しますか？</p>
                    <button id="closeBtn">
                        閉じる
                    </button>
                </div>
            </div>
        \`;

        document
            .querySelector("#closeBtn")
            .addEventListener("click", () => {
                modal.innerHTML = "";
            });
    });
    \`\`\`

    ポイント
    - 表示時にHTML生成
    - 閉じる時は \`innerHTML = ""\`
    - 背景オーバーレイも同時生成可能
`);