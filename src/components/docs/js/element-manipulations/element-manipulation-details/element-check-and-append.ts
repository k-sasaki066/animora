import dedent from "dedent";

export const detail = dedent(`
    同じ要素がすでに画面内に存在するか確認してから追加する処理<br />
    何も確認せず毎回追加すると、

    - モーダルが2重表示される
    - 通知が何個も増える
    - ローディング画面が重複する
    - Toastが大量発生する

    などの不具合につながるため、
    実務では追加前の存在確認がよく使われる

    #### 使用場面
    - 通知重複防止
    - モーダル多重生成防止
    - ローディングUIの重複防止
    - エラーメッセージの多重表示
    - Toast通知の連打防止

    #### 基本
    \`\`\`js
    if (!document.querySelector(".modal")) {
        document.body.append(modal);
    }
    \`\`\`

    #### 解説
    \`\`\`js
    document.querySelector(".modal")
    \`\`\`
    すでに .modal が存在すれば要素を返す<br />
    存在しなければ \`null\`

    \`\`\`js
    !document.querySelector(".modal")
    \`\`\`
    は「存在しないなら true」になる。

    ---

    #### モーダル生成
    \`\`\`js
    function openModal() {
        if (document.querySelector(".modal")) return;

        const modal = document.createElement("div");
        modal.className = "modal";
        modal.textContent = "確認画面";

        document.body.append(modal);
    }
    \`\`\`
    ボタン連打しても1個しか生成されない。

    ---

    #### ローディング表示
    \`\`\`js
    function showLoading() {
        if (document.querySelector(".loading")) return;

        const loading = document.createElement("div");
        loading.className = "loading";
        loading.textContent = "Loading...";

        document.body.append(loading);
    }
    \`\`\`
    API連続実行でも重複しない

    ---

    #### 通知バナー
    \`\`\`js
    if (!document.querySelector(".notice")) {
        const notice = document.createElement("div");
        notice.className = "notice";
        notice.textContent = "保存しました";

        document.body.append(notice);
    }
    \`\`\`

    ---

    #### より安全な方法（id指定）
    \`\`\`js
    if (!document.querySelector("#modal")) {
    }
    \`\`\`
    classより一意性が高い。

    ---

    #### ポイント
    - append前に存在確認するとバグ防止になる
    - モーダル・通知・ローディングで特によく使う
    - 実務ではかなり重要な考え方
`);