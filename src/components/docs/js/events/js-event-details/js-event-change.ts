import dedent from "dedent";

export const detail = dedent(`
    inputと違い、入力完了後（フォーカスが外れた時など）に発火

    #### 使用場面
    - プルダウン選択
    - チェックボックス変更
    - フォーム設定変更
    - フィルタ条件変更

    #### 代表的な発火タイミング
    **1. select（プルダウン） = 選択を変えた瞬間**
    \`\`\`html
    <select id="select">
        <option value="A">A</option>
        <option value="B">B</option>
    </select>
    \`\`\`

    \`\`\`js
    const select = document.querySelector("#select");

    select.addEventListener("change", (e) => {
        console.log(e.target.value);
    });
    \`\`\`

    実行結果
    \`\`\`txt
    A
    → B に変更した瞬間
    B
    \`\`\`

    ---

    **2. input（テキスト入力）= フォーカスを外したとき**
    \`\`\`html
    <input id="text" />
    \`\`\`
    \`\`\`js
    input.addEventListener("change", (e) => {
        console.log(e.target.value);
    });
    \`\`\`

    🖨 実行例
    \`\`\`txt
    （入力中）hello
    （そのまま）
    （クリックして外す）
    → hello
    \`\`\`

    入力中は発火しない
`);