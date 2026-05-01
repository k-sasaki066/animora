import dedent from "dedent";

export const detail = dedent(`
    マウスホバー時に発火 (マウスが要素の外 → 内に入った瞬間)<br />
    ⚠️ 子要素でも発火する

    #### 使用場面
    - ツールチップ表示
    - メニュー開閉
    - UI強調表示

    #### 実行例
    \`\`\`html
    <div id="box">Hover me</div>
    \`\`\`

    \`\`\`js
    const box = document.querySelector("#box");

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "yellow";
    });
    \`\`\`
`);