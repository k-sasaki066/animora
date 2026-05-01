import dedent from "dedent";

export const detail = dedent(`
    キーボード入力時にキーを押した瞬間に発火<br />
    長押しでは連続で発火（環境による）

    #### 使用場面
    - ショートカットキー
    - ゲーム操作
    - 入力制御

    #### 実行例
    \`\`\`js
    window.addEventListener("keydown", (e) => {
        console.log(e.key);
    });
    \`\`\`

    ---

    #### ショートカットキー (Enterで検索実行など)
    \`\`\`js
    window.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            console.log("検索実行");
        }
    });
    \`\`\`

    ---

    #### 入力制御 (スペース禁止など)
    \`\`\`js
    input.addEventListener("keydown", (e) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    });
    \`\`\`
`);