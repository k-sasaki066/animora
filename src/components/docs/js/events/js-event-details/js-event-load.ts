import dedent from "dedent";

export const detail = dedent(`
    HTMLや画像などの読み込みが完了したタイミングで発火<br />
    画像やフォントまで完全に揃えてから動かしたいとき

    \`\`\`txt
    HTML読み込み
    CSS読み込み
    画像読み込み
    JS読み込み
    全部完了
    ↓
    load発火
    \`\`\`

    #### 使用場面
    - 初期データ表示
    - アニメーション開始
    - 画像ギャラリー
    - 全体レイアウト確定後処理

    #### 実行例
    \`\`\`js
    window.addEventListener("load", () => {
        console.log("読み込み完了");
    });
    \`\`\`

    ---

    #### スプラッシュ画面 (全部読み込み終わってから画面表示)
    \`\`\`js
    window.addEventListener("load", () => {
        document.querySelector("#splash").style.display = "none";
    });
    \`\`\`

    ---

    #### アニメーション開始 (画像崩れを防ぐ)
    \`\`\`js
    window.addEventListener("load", () => {
        startAnimation();
    });
    \`\`\`

    ---

    ⚠️ DOMContentLoaded (UIをすぐ操作したいとき)
    \`\`\`js
    document.addEventListener("DOMContentLoaded", () => {
        console.log("HTMLだけ完成");
    });
    \`\`\`

    実行結果
    \`\`\`txt
    HTMLだけ完成（画像はまだ）
    \`\`\`
`);