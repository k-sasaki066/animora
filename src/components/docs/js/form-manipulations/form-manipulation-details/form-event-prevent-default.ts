import dedent from "dedent";

export const detail = dedent(`
    フォーム送信時に発生する「submitイベント」を使って、
    ページ遷移を防ぎながらJavaScriptで送信処理を制御する

    通常のフォーム送信はページがリロードされるが、
    \`event.preventDefault()\` を使うことでSPAのような動きにできる


    #### 使用場面
    - ログインフォーム
    - お問い合わせフォーム
    - 検索フォーム
    - 会員登録
    - API送信処理（fetch連携）

    #### 基本実装
    \`\`\`html
    <form id="form">
        <input name="email" placeholder="メールアドレス" />
        <button type="submit">送信</button>
    </form>
    \`\`\`

    \`\`\`js
    const form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
        // ページリロードを防ぐ
        e.preventDefault();

        const formData = new FormData(form);
        const email = formData.get("email");

        console.log(email);
    });
    \`\`\`

    #### ポイント
    #### ① submitイベントとは
    - form送信時に必ず発火するイベント
    - buttonクリックだけでなく Enterキーでも発火する

    #### ② preventDefaultの役割
    \`\`\`js
    e.preventDefault();
    \`\`\`

    👉 これがないと：
    - ページがリロードされる
    - JavaScript処理が途中で消える

    👉 あると：
    - SPAのようにページ遷移なしで処理できる

    #### ③ FormDataの活用
    \`\`\`js
    const formData = new FormData(form);
    const email = formData.get("email");
    \`\`\`

    👉 特徴
    - inputをまとめて取得できる
    - name属性がキーになる
    - チェックボックス・ファイルにも対応

    ---

    #### API送信
    \`\`\`js
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const res = await fetch("/api/login", {
            method: "POST",
            body: formData
        });

        const data = await res.json();
        console.log(data);
    });
    \`\`\`

    ---

    #### バリデーション付き送信
    \`\`\`js
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = form.querySelector("[name=email]").value;

        if (!email) {
            alert("メールアドレスを入力してください");
            return;
        }

        console.log("送信OK");
    });
    \`\`\`
`);