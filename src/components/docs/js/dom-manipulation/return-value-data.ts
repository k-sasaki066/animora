import dedent from "dedent";

export type ReturnValueItem = {
    return: string;
    description: string;
    detail?: string;
};

export const returnValueColumns = [
    { key: "return", label: "返り値", className: "font-mono text-xs" },
    { key: "description", label: "説明" },
];

export const returnValueData: ReturnValueItem[] = [
    {
        return: "HTMLElement",
        description: "単一のHTML要素オブジェクト",
        detail: dedent(`
            getElementById() や querySelector() で取得される1件の要素

            \`\`\`js
            <h1 id="title">Hello</h1>

            const title = document.getElementById("title");

            console.log(title);
                // <h1 id="title">Hello</h1>
            \`\`\`

            ---

            主な操作
            \`\`\`js
            title.textContent
            title.innerHTML
            title.style.color = "red"
            title.classList.add("active")
            \`\`\`

            ---

            よく使う取得メソッド
            \`\`\`txt
            getElementById()
            querySelector()
            \`\`\`
        `),
    },

    {
        return: "HTMLCollection",
        description: "複数要素のライブコレクション",
        detail: dedent(`
            getElementsByClassName() / getElementsByTagName() で取得される複数要素

            \`\`\`js
            <li class="item">A</li>
            <li class="item">B</li>
            <li class="item">C</li>

            const items = document.getElementsByClassName("item");

            console.log(items);
                // HTMLCollection(3)
            \`\`\`

            特徴

            - 配列ではない
            - lengthあり
            - [0] で取得可能
            - DOM変更で自動更新（ライブ）

            \`\`\`js
            console.log(items[0].textContent);
                // A
            \`\`\`

            ---

            ループする場合
            \`\`\`js
            Array.from(items).forEach(item => {
                console.log(item.textContent);
            });
            \`\`\`
        `),
    },

    {
        return: "NodeList",
        description: "複数要素のリスト",
        detail: dedent(`
            querySelectorAll() で取得される複数要素

            \`\`\`js
            <button class="btn">送信</button>
            <button class="btn">削除</button>
            <button class="btn">保存</button>

            const buttons = document.querySelectorAll(".btn");

            console.log(buttons);
                // NodeList(3)
            \`\`\`

            *特徴*
            - 配列に近い
            - forEach 使用可
            - [0] で取得可能
            - 通常は静的（取得時点の内容）

            \`\`\`js
            buttons.forEach(btn => {
                console.log(btn.textContent);
            });
            \`\`\`

            ---

            出力例
            \`\`\`txt
            送信
            削除
            保存
            \`\`\`
        `),
    },

    {
        return: "Live Collection",
        description: "HTMLCollection の自動更新",
        detail: dedent(`
            HTMLCollection はDOM変更に追従する

            \`\`\`js
            <li class="item">A</li>
            <li class="item">B</li>

            const items = document.getElementsByClassName("item");

            console.log(items.length);
                // 2

            const li = document.createElement("li");
            li.className = "item";
            document.body.appendChild(li);

            console.log(items.length);
            // 3
            \`\`\`
        `),
    },

    {
        return: "Static Collection",
        description: "NodeList の固定リスト",
        detail: dedent(`
            querySelectorAll() は取得時点の内容

            \`\`\`js
            <li class="item">A</li>
            <li class="item">B</li>

            const items = document.querySelectorAll(".item");

            console.log(items.length);
            // 2

            const li = document.createElement("li");
            li.className = "item";
            document.body.appendChild(li);

            console.log(items.length);
            // 2
            \`\`\`

            ---

            再取得が必要
            \`\`\`js
            const newItems = document.querySelectorAll(".item");

            console.log(newItems.length);
                // 3
            \`\`\`
        `),
    },
    {
        return: "HTMLCollection と NodeList の違い",
        description: "初心者向け比較",
        detail: dedent(`
            | 項目 | HTMLCollection | NodeList |
            |---|---|---|
            | 主な取得方法 | getElementsByClassName | querySelectorAll |
            | 配列っぽさ | 弱い | 強い |
            | forEach | × | ○ |
            | 自動更新 | ○ Live | × Static |

            - HTMLCollection<br />
                → 今の現場をリアルタイム監視する名簿

            - NodeList<br />
                → 撮影した時点のメンバー一覧写真
        `),
    },
];