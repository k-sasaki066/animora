import dedent from "dedent";

export const detail = dedent(`
    **通信が正常に完了し、レスポンスを受け取ったタイミングで実行されるイベント**<br />
    \`\`\`txt
    onload = 「通信が終わった」      ※ ただし「成功(200)とは限らない」

    200 → OK（成功）
    404 → Not Found（失敗）
    500 → サーバーエラー（失敗）

    👉 全て発火する
    \`\`\`
    = \`ステータス確認が必須\`

    #### 基本の書き方
    \`\`\`js
    xhr.onload = () => {
        // ローディング終了
        setLoading(false);

        if (xhr.status >= 200 && xhr.status < 300) {
            // 成功
            const data = JSON.parse(xhr.responseText);
            console.log(data);
        } else {
            // サーバーエラー
            console.error("エラー:", xhr.status);
        }
    };
    \`\`\`

    ---

    #### APIデータ取得 → 画面表示
    \`\`\`js
    xhr.onload = () => {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);

            const list = document.querySelector("#list");

            list.innerHTML = users
                .map(user => \`<li>\${user.name}</li>\`)
                .join("");
        }
    };
    \`\`\`

    ---

    #### フォーム送信 → 成功メッセージ
    \`\`\`js
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert("送信完了しました");
        } else {
            alert("送信に失敗しました");
        }
    };
    \`\`\`

    ---

    #### アップロード完了処理
    \`\`\`js
    xhr.onload = () => {
        progress.style.width = "100%";
        percentText.textContent = "アップロード完了";
    };
    \`\`\`
    👉 進捗バーの最後は必ずここで締める

    ---

    #### UI切り替え（ローディング解除）
    \`\`\`js
    xhr.onload = () => {
        loader.style.display = "none";
        content.style.display = "block";
    };
    \`\`\`

    ---

    #### データ保存後の画面遷移
    \`\`\`js
    xhr.onload = () => {
        if (xhr.status === 200) {
            window.location.href = "/complete";
        }
    };
    \`\`\`

    ---

    #### JSON.parseとは？
    文字列（JSON形式）をJavaScriptのデータに変換する関数<br />
    \`\`\`txt
    "{ name: Taro }"（文字列）
            ↓ JSON.parse
    { name: "Taro" }（JSオブジェクト）

    → data.name ⭕️使えるようになる
    \`\`\`
`);