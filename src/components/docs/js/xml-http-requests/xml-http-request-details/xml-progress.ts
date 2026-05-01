import dedent from "dedent";

export const detail = dedent(`
    ファイルを送受信している途中の進み具合を可視化する仕組み<br />
    今どれくらいできているかをパーセンテージやバーで表示

    #### 基本構造
    1. ファイル選択
    2. アップロード(ダウンロード)開始
    3. 進捗更新
    4. 完了

    \`\`\`html
    <input type="file" id="file" />
    <button id="upload">アップロード</button>

    <div class="bar">
        <div class="progress" id="progress"></div>
    </div>

    <p id="percent">0%</p>
    \`\`\`

    \`\`\`css
    .bar {
        width: 100%;
        height: 8px;
        background: #333;
    }

    .progress {
        width: 0%;
        height: 100%;
        background: #4ade80;
        transition: width 0.2s ease;
    }
    \`\`\`

    アップロードの場合
    \`\`\`js
    uploadBtn.addEventListener("click", () => {
        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append("file", file);

        const xhr = new XMLHttpRequest();  // ① インスタンス作成(通信の箱を作る)

        xhr.open("POST", "/upload");      // ② open（通信の準備）

        // 進捗監視(イベント設定)
        xhr.upload.onprogress = (event) => {
            if (!event.lengthComputable) return;

            const percent = (event.loaded / event.total) * 100;   // 送信済み / 全体サイズ

            progress.style.width = percent + "%";
            percentText.textContent = \`\${Math.round(percent)}%\`;
        };

        xhr.onerror = () => {
            percentText.textContent = "通信エラー";
        };

        xhr.upload.onabort = () => {
            percentText.textContent = "アップロードが中断されました";
        };

        xhr.onload = () => {
            progress.style.width = "100%";

            setTimeout(() => {
                percentText.textContent = "アップロード完了";
                progress.style.background = "#22c55e";
            }, 300);
        };

        xhr.send(formData);   // ④ send（実行）
    });
    \`\`\`

    ダウンロードの場合
    \`\`\`js
    downloadBtn.addEventListener("click", () => {
        const xhr = new XMLHttpRequest(); // ① インスタンス作成

        xhr.open("GET", "/file.pdf"); // ② 通信準備

        xhr.responseType = "blob"; // ファイルとして受け取る

        // 進捗監視（ダウンロード）
        xhr.onprogress = (event) => {
            if (!event.lengthComputable) return;

            const percent = (event.loaded / event.total) * 100;

            progress.style.width = percent + "%";
            percentText.textContent = \`\${Math.round(percent)}%\`;
        };

        // エラー
        xhr.onerror = () => {
            percentText.textContent = "通信エラー";
        };

        // 完了
        xhr.onload = () => {
            progress.style.width = "100%";

            // ファイル保存処理
            const blob = xhr.response;
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "download.pdf";
            a.click();

            URL.revokeObjectURL(url);

            setTimeout(() => {
                percentText.textContent = "ダウンロード完了";
            }, 300);
        };

        xhr.send(); // ③ 実行
    });
    \`\`\`

    #### 進捗の仕組み
    \`\`\`txt
    loaded = 送受信済みデータ量
    total  = 全体データ量
    進捗率 = loaded ÷ total × 100
    \`\`\`

    ---

    #### ファイルチェック
    \`\`\`js
    if (file.size > 5 * 1024 * 1024) {
        alert("5MBまでです");
        return;
    }
    \`\`\`

    #### MIMEチェック
    \`\`\`js
    if (!file.type.startsWith("image/")) {
        alert("画像のみ");
    }
    \`\`\`


    #### ボタン制御
    \`\`\`js
    uploadBtn.disabled = true;
    \`\`\`
`);