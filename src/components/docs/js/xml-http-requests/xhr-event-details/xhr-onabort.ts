import dedent from "dedent";

export const detail = dedent(`
    **進行中の通信を「ユーザーまたはコードがキャンセルしたとき」に発火するイベント**<br />
    成功でも失敗でもない → 「ユーザー都合の中断」

    #### 使用場面
    - アップロードキャンセル
        - 動画アップロード中にキャンセル
        - 間違ったファイルを選んだ
        - 通信が遅いのでやめたい
    - ページ遷移時の中断
        - SPAでページ移動
        - モーダルを閉じた
        - 別タブへ移動
    - 再送信時の前リクエストキャンセル
        - 検索入力（リアルタイム検索）
        - フィルタ変更
        - API連打防止
    - ユーザー操作の取り消し
        - 「キャンセルボタン」

    ---

    #### キャンセルボタン表示
    \`\`\`html
    <input type="file" id="file" />
    <button id="upload">アップロード</button>
    <button id="cancel">キャンセル</button>

    <div class="bar">
        <div id="progress"></div>
    </div>

    <p id="status"></p>
    \`\`\`

    \`\`\`js
    const fileInput = document.querySelector("#file");
    const uploadBtn = document.querySelector("#upload");
    const cancelBtn = document.querySelector("#cancel");

    const progress = document.querySelector("#progress");
    const statusText = document.querySelector("#status");

    let xhr;

    uploadBtn.addEventListener("click", () => {
        const file = fileInput.files[0];  // ユーザーが選んだファイル

        const formData = new FormData();  // 普通のJSONではファイル送れないためformDataを使用
        formData.append("file", file);   // ファイルやデータを「送信する箱（FormData）」に追加する処理

        xhr = new XMLHttpRequest();
        xhr.open("POST", "/upload");

        // 進捗
        xhr.upload.onprogress = (e) => {
            if (!e.lengthComputable) return;

            const percent = (e.loaded / e.total) * 100;
            progress.style.width = percent + "%";
        };

        // 中断
        xhr.onabort = () => {
            statusText.textContent = "アップロードをキャンセルしました";
            progress.style.background = "orange";
        };

        // 成功
        xhr.onload = () => {
            statusText.textContent = "アップロード完了";
        };

        xhr.send(formData);
    });

    cancelBtn.addEventListener("click", () => {
        if (xhr) xhr.abort();
    });
    \`\`\`

    ---

    #### 検索UI(無駄な通信を防ぐ)
    \`\`\`js
    let xhr;

    input.addEventListener("input", () => {
        if (xhr) xhr.abort(); // 前回を止める(多重リクエスト管理)

        xhr = new XMLHttpRequest();
        xhr.open("GET", "/search?q=" + input.value);
        xhr.send();
    });
    \`\`\`
`);