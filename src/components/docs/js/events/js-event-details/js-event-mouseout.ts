import dedent from "dedent";

export const detail = dedent(`
    マウスが要素から完全に外れた瞬間に発火<br />
    子要素に移動しても発火する場合がある

    \`\`\`txt
    [ ボックスの上 ]
        ↑ mouseover（入る）

    [ ボックスから外へ ]
        ↓ mouseout（出る）
    \`\`\`

    #### 使用場面
    - ホバー解除
    - UIリセット
    - メニュー閉じる

    #### 実行例
    \`\`\`js
    box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "transparent";
    });
    \`\`\`

    ---

    * mouseleave = 要素の「完全な外」に出たときだけ発火<br />
    子要素に移動では発火しない
`);