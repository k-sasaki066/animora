import dedent from "dedent";

export type CommandItem = {
    selector: string;
    description: string;
    detail?: string;
};

export const selectorColumns = [
    { key: "selector", label: "セレクター", className: "font-mono text-xs" },
    { key: "description", label: "説明" },
];

export const selectorData: CommandItem[] = [
    {
        selector: "getElementById",
        description: "idで取得（1件）",
        detail: dedent(`
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
        `),
    },
    {
        selector: "getElementsByClassName",
        description: "classで取得（複数）",
        detail: dedent(`
            **返り値：HTMLCollection**

            同じclass名の要素をまとめて取得する<br />
            配列っぽく見えるが、JavaScriptの配列ではない<br />
            インデックス指定で取得可能

            \`\`\`html
            <li class="item">A</li>
            <li class="item">B</li>
            <li class="item">C</li>
            \`\`\`

            \`\`\`js
            const items = document.getElementsByClassName("item");

            console.log(items);
                // HTMLCollection(3) [li.item, li.item, li.item]
                1個目 → <li class="item">A</li>
                2個目 → <li class="item">B</li>
                3個目 → <li class="item">C</li>

            console.log(items[0].textContent);
                // A
            \`\`\`

            **特徴**
            - \`items[0]\` のように番号指定できる
            - \`length\` が使える
            - \`forEach()\` はそのまま使えない

            **配列に変換すると便利**
            \`\`\`js
            const arr = Array.from(items);

            console.log(arr);
                // [li.item, li.item, li.item]

            arr.forEach(item => {
                console.log(item.textContent);
            });
            \`\`\`

            ---

            **Live（自動更新）**<br />
            HTMLが増減すると中身も自動で変わる

            \`\`\`js
            console.log(items.length); // 3

            新しく追加すると...

            console.log(items.length); // 4
            \`\`\`
        `),
    },
    {
        selector: "getElementsByTagName",
        description: "タグ名で取得（複数）",
        detail: dedent(`
            **返り値：HTMLCollection**

            指定タグを全部取得する

            \`\`\`js
            const divs = document.getElementsByTagName("div");
            \`\`\`

            **例**<br />
            - div全部
            - p全部
            - img全部
        `),
    },
    {
        selector: "querySelector",
        description: "最初の1件",
        detail: dedent(`
            **返り値：HTMLElement（単体）**<br />
            CSSセレクタ形式で最初の1件を取得できる

            \`\`\`html
            <button class="btn">送信</button>
            <button class="btn">削除</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector(".btn");

            console.log(btn);
                // <button class="btn">送信</button>

            console.log(btn.textContent);
                // 送信
            \`\`\`

            使用可能なセレクタ
            \`\`\`txt
            "#id"
            ".class"
            "div"
            "ul li"
            "input[type='text']"
            \`\`\`
        `),
    },
    {
        selector: "querySelectorAll",
        description: "複数取得",
        detail: dedent(`
            **返り値：NodeList**<br />
            CSSセレクタに一致する要素を全部取得する<br />
            forEach使用可

            \`\`\`html
            <button class="btn">送信</button>
            <button class="btn">削除</button>
            <button class="btn">保存</button>
            \`\`\`

            \`\`\`js
            const buttons = document.querySelectorAll(".btn");

            console.log(buttons);
                // NodeList(3) [button.btn, button.btn, button.btn]
                // 『一致した要素が 3件ある』『buttonタグ.class="btn"』

            console.log(buttons[0]);
                // <button class="btn">送信</button>

            console.log(buttons[1].textContent);
                // 削除

            buttons.forEach(btn => {
                console.log(btn.textContent);
            });
                // 送信
                // 削除
                // 保存

            Array.isArray(buttons);
                // false (NodeList は配列ではなく、配列風オブジェクト)
            \`\`\`

            使用可能なセレクタ

            \`\`\`txt
            "#id"
            ".class"
            "div"
            "ul li"
            "input[type='text']"
            \`\`\`

            **特徴**<br />
            - \`length\` が使える
            - \`forEach()\` が使える
            - 配列にかなり近い

            **Static（固定）**<br />
            取得時点の一覧。後からHTMLが増えても自動更新されない
        `),
    },
];
