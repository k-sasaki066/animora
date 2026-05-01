import dedent from "dedent";

export const detail = dedent(`
    **返り値：HTMLElement（単体のHTML要素）**

    1つだけ取得するため、配列ではなく「要素そのもの」が返る
    - 最も高速
    - idはページ内で一意

    \`\`\`html
    <h1 id="title">Hello</h1>
    \`\`\`

    \`\`\`js
    const title = document.getElementById("title");

    console.log(title);
        // <h1 id="title">Hello</h1>

    console.log(title.textContent);
        // Hello
    \`\`\`

    ---

    主な操作

    \`\`\`js
    title.textContent              要素の中の文字だけ取得
    title.innerHTML                要素の中のHTMLごと取得,ユーザー入力をそのまま入れると危険（XSS）
    title.style.color = "red"      CSSを直接変更する
    title.classList.add("active")  class名を追加する
    \`\`\`
`);