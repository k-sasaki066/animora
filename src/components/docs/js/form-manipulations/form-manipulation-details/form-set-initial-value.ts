import dedent from "dedent";

export const detail = dedent(`
    フォームの入力欄に対して、JavaScriptから値を直接設定する操作

    ユーザーが手入力する前にデータを表示したり<br />
    APIから取得した情報をフォームに反映する際によく使われる

    これにより「編集画面」「プロフィール画面」などで、
    既存データをそのままフォームに表示できます

    #### 使用場面
    - ユーザー情報編集画面
    - プロフィール編集フォーム
    - API取得後のデータ表示
    - 下書き復元機能
    - 管理画面の編集フォーム

    #### 基本の使い方
    \`\`\`html
    <input id="name" />
    \`\`\`

    \`\`\`js
    const input = document.querySelector("#name");

    input.value = "山田太郎";
    \`\`\`
    この時点で入力欄に「山田太郎」が自動で入る

    ---

    #### API連携での使用例
    \`\`\`js
    fetch("/api/user")
        .then(res => res.json())
        .then(data => {
            document.querySelector("#name").value = data.name;
            document.querySelector("#email").value = data.email;
        });
    \`\`\`

    ---

    #### 初期値セット（ページ読み込み時）
    \`\`\`js
    window.addEventListener("DOMContentLoaded", () => {
        document.querySelector("#name").value = "初期ユーザー";
    });
    \`\`\`

    ---

    #### 複数フォーム一括セット
    \`\`\`js
    const user = {
        name: "田中太郎",
        email: "taro@example.com"
    };

    document.querySelector("#name").value = user.name;
    document.querySelector("#email").value = user.email;
    \`\`\`

    ---

    #### フォーム再編集（編集モード）
    \`\`\`js
    function setForm(data) {
        document.querySelector("#name").value = data.name;
        document.querySelector("#age").value = data.age;
    }
    \`\`\`

    #### ポイント

    - \`value\` は input / textarea 専用
    - フォーム編集画面ではほぼ必須の操作
    - APIデータ反映とセットで使うことが多い
`);