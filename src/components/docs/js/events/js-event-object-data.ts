import dedent from "dedent";

export type EventObjectItem = {
    object: string;
    description: string;
    detail?: string;
};

export const jsEventObjectColumns = [
    { key: "object", label: "イベントオブジェクト", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const jsEventObjectData: EventObjectItem[] = [
    {
        object: "e.target",
        description: "どの要素が押されたか",
        detail: dedent(`
            \`\`\`html
            <button id="btn">クリック</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");

            btn.addEventListener("click", (e) => {
                console.log(e.target);
            });
            \`\`\`

            🖨 実行結果
            \`\`\`html
            <button id="btn">クリック</button>
            \`\`\`
            実際にクリックされた要素そのもの

            \`\`\`js
            e.target.textContent = "押された";
            \`\`\`
            👉 押したボタンの文字を変更できる
        `),
    },
    {
        object: "e.target.value",
        description: "入力値",
        detail: dedent(`
            \`\`\`html
            <input id="text" />
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#text");

            input.addEventListener("input", (e) => {
                console.log(e.target.value);
            });
            \`\`\`

            🖨 実行結果
            \`\`\`txt
            h
            he
            hel
            hell
            hello
            \`\`\`
            入力のたびに値が更新される

            \`\`\`js
            console.log("検索:", e.target.value);
            \`\`\`
            👉 検索サジェストやリアルタイムフィルタ
        `),
    },
    {
        object: "e.preventDefault()",
        description: "デフォルト動作停止",
        detail: dedent(`
            \`\`\`html
            <form id="form">
                <button type="submit">送信</button>
            </form>
            \`\`\`

            \`\`\`js
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                console.log("送信止めた");
            });
            \`\`\`

            🖨 実行結果
            \`\`\`txt
            送信止めた
            \`\`\`
            本来はページリロードされるが、それを止めている

            \`\`\`js
            e.preventDefault();
            fetch("/api/login");
            \`\`\`
            👉 SPAログインなどで必須
        `),
    },
    {
        object: "e.key",
        description: "押されたキー",
        detail: dedent(`
            \`\`\`js
            window.addEventListener("keydown", (e) => {
                console.log(e.key);
            });
            \`\`\`

            🖨 実行結果
            \`\`\`txt
            a
            Enter
            ArrowUp
            Escape
            \`\`\`
            押したキーの名前がそのまま出る

            \`\`\`js
            if (e.key === "Enter") {
                console.log("検索実行");
            }
            \`\`\`
            👉 Enterで検索UIなど
        `),
    },
    {
        object: "e.type",
        description: "どのイベントか",
        detail: dedent(`
            \`\`\`js
            btn.addEventListener("click", (e) => {
                console.log(e.type);
            });
            \`\`\`

            🖨 実行結果
            \`\`\`txt
            click
            \`\`\`
            今どのイベントが動いたか分かる
        `),
    },
];