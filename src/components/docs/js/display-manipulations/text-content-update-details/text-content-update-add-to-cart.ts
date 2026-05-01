import dedent from "dedent";

export const detail = dedent(`
    商品をカートへ追加したあとに、ボタンの文字を変更して
    ユーザーへ状態をわかりやすく伝える

    例:
    - 「カートに追加」 → 「追加しました」
    - 数秒後に元へ戻す
    - 二重クリック防止

    \`\`\`html
    <button id="cartBtn">カートに追加</button>
    \`\`\`

    \`\`\`js
    const cartBtn = document.querySelector("#cartBtn");

    cartBtn.addEventListener("click", () => {
        // 連打防止
        cartBtn.disabled = true;

        // カート追加処理（例）
        console.log("商品を追加");

        // 文言変更
        cartBtn.textContent = "追加しました";

        // 2秒後に元へ戻す
        setTimeout(() => {
            cartBtn.textContent = "カートに追加";
            cartBtn.disabled = false;
        }, 2000);
    });
    \`\`\`

    #### 実行の流れ
    \`\`\`text
    ① ボタンを押す
    ② 商品をカートへ追加
    ③ 「追加しました」に変更
    ④ 2秒後に元へ戻る
    \`\`\`

    #### 実務でよくある応用
    \`\`\`js
    cartBtn.textContent = "在庫確認中...";
    cartBtn.textContent = "売り切れ";
    cartBtn.textContent = "購入手続きへ";
    \`\`\`

    #### UX向上ポイント
    - 押した結果がすぐ伝わる
    - 通信中だとわかる
    - 連打防止になる
    - カート追加成功が明確になる
`);