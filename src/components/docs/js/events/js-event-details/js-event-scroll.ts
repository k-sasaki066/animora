import dedent from "dedent";

export const detail = dedent(`
    ページや要素がスクロールされるたびに発火
    \`\`\`txt
    スクロールする
        ↓
    scrollイベント発火
        ↓
    登録した処理が実行される
    \`\`\`

    #### 使用場面
    - ヘッダー固定
    - 無限スクロール
    - アニメーション発火

    #### 実行例
    \`\`\`js
    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
    });
    \`\`\`

    実行結果
    \`\`\`txt
    0
    120
    250
    430
    800
    \`\`\`
    スクロールするたびに、上からのスクロール距離（px）が出る

    ---

    #### 無限スクロール (ページ最下部で追加データ取得)
    \`\`\`js
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            console.log("追加読み込み");
        }
    });
    \`\`\`

    ---

    #### アニメーション発火 (スクロール位置でフェードイン)
    \`\`\`js
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            console.log("追加読み込み");
        }
    });
    \`\`\`

    ---

    ⚠️ 1回スクロールで何十回も発火するためdebounce / throttleで制御する
`);