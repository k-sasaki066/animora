import dedent from "dedent";

export type XMLHttpRequestItem = {
    process: string;
    description: string;
    detail?: string;
};

export const xmlHttpRequestColumns = [
    { key: "process", label: "使用場面" },
    { key: "description", label: "内容" },
];

export const xmlHttpRequestData: XMLHttpRequestItem[] = [
    {
        process: "APIからデータ取得(GET）",
        description:
            "APIやサーバーからデータを取得できる",
        detail: dedent(`
        `),
    },
    {
        process: "データ送信（POST）",
        description: "フォームやJSONデータをサーバーへ送信できる",
        detail: dedent(`
            \`\`\`js
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/users");

            xhr.send(JSON.stringify({ name: "Taro" }));
            \`\`\`
        `),
    },
    {
        process: "ファイルアップロード",
        description: "画像・動画などのファイルを送信できる",
        detail: dedent(`
            \`\`\`js
            const formData = new FormData();
            formData.append("file", file);

            xhr.send(formData);
            \`\`\`
        `),
    },
    {
        process: "アップロード進捗取得",
        description: "ファイル送信の進行状況を取得できる",
        detail: dedent(`
            ファイルを送信している途中の進み具合を可視化する仕組み<br />
            今どれくらい送信できているかをパーセンテージやバーで表示

            #### 基本構造
            ① ファイル選択
            ② アップロード開始
            ③ 進捗更新
            ④ 完了

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

            #### 進捗の仕組み
            \`\`\`txt
            loaded = 送信済みデータ量
            total  = 全体データ量
            進捗率 = loaded ÷ total × 100
            \`\`\`

            #### 使用場面
            画像アップロード
            動画アップロード
            フォーム送信

            ⚠️ fetch単体では進捗が取れない

            - XMLHttpRequest
            - axios（onUploadProgress）
            - ライブラリ利用
            が使われる

            axios例
            \`\`\`js
            axios.post("/upload", formData, {
            onUploadProgress: (event) => {
                const percent = (event.loaded / event.total) * 100;
                setProgress(percent);
            }
            });
            \`\`\`
        `),
    },
    {
        process: "ダウンロード進捗取得",
        description: "レスポンス受信の進捗を取得できる",
        detail: dedent(`
            \`\`\`js
            xhr.onprogress = (e) => {
                console.log(e.loaded);
            };
            \`\`\`
        `),
    },
    {
        process: "エラー検知",
        description: "通信失敗時の処理ができる",
        detail: dedent(`
            \`\`\`js
            xhr.onerror = () => {
                console.log("通信エラー");
            };
            \`\`\`
        `),
    },
    {
        process: "中断（abort）",
        description: "通信を途中でキャンセルできる",
        detail: dedent(`
            \`\`\`js
            xhr.abort();
            \`\`\`
        `),
    },
    {
        process: "ヘッダー操作",
        description: "リクエストヘッダーを設定できる",
        detail: dedent(`
            \`\`\`js
            xhr.setRequestHeader("Content-Type", "application/json");
            \`\`\`
        `),
    },
    {
        process: "レスポンス形式指定",
        description: "JSONやBlobなど形式を指定できる",
        detail: dedent(`
            \`\`\`js
            xhr.responseType = "json";
            \`\`\`
        `),
    },
    {
        process: "認証付き通信",
        description: "Cookieや認証情報を含めて通信できる",
        detail: dedent(`
            \`\`\`js
            xhr.withCredentials = true;
            \`\`\`
        `),
    },
];
