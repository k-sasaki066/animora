import dedent from "dedent";

export const detail = dedent(`
    チェックボックスのON/OFF状態を取得する

    チェックボックスは true / false の状態を持っており、
    \`checked\` プロパティでその状態を判定できる

    #### 使用場面
    - 利用規約の同意チェック
    - オプション設定（通知ON/OFFなど）
    - フィルタ条件（価格・カテゴリ選択）
    - 設定画面のトグルUI
    - フォーム送信の制御

    #### 基本の仕組み
    \`\`\`html
    <input type="checkbox" id="agree" />
    \`\`\`

    \`\`\`js
    const agree = document.querySelector("#agree");

    console.log(agree.checked);
    \`\`\`

    #### 結果

    \`\`\`text
    チェックあり → true
    チェックなし → false
    \`\`\`

    ---

    #### 同意チェックで送信制御
    \`\`\`html
    <input type="checkbox" id="agree" />
    <button id="submit">送信</button>
    \`\`\`

    \`\`\`js
    const agree = document.querySelector("#agree");
    const submit = document.querySelector("#submit");

    submit.addEventListener("click", () => {
        if (!agree.checked) {
            alert("利用規約に同意してください");
            return;
        }

        console.log("送信処理実行");
    });
    \`\`\`
    👉 チェックされていないと送信できない

    ---

    #### リアルタイム状態監視
    \`\`\`js
    agree.addEventListener("change", () => {
        console.log("状態:", agree.checked);
    });
    \`\`\`
    👉 ON/OFF切り替えを即時検知

    ---

    #### UI切り替え
    \`\`\`html
    <input type="checkbox" id="darkMode" />
    \`\`\`

    \`\`\`js
    const darkMode = document.querySelector("#darkMode");

    darkMode.addEventListener("change", () => {
        document.body.classList.toggle("dark", darkMode.checked);
    });
    \`\`\`
    👉 ダークモード切替などに利用

    ---

    #### ポイント

    - \`checked\` は boolean（true / false）
    - input.value ではなく checked を使う
    - changeイベントで状態変化を検知するのが基本
`);