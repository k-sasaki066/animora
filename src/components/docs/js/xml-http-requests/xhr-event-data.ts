import dedent from "dedent";

export type XHREventItem = {
    event: string;
    meaning: string;
    useCase: string;
    detail?: string;
};

export const xhrEventColumns = [
    { key: "event", label: "イベント", className: "font-mono" },
    { key: "meaning", label: "意味" },
    { key: "useCase", label: "使用場面" },
];

export const xhrEventData: XHREventItem[] = [
    {
        event: "onload",
        meaning: "通信成功（レスポンス受信完了）",
        useCase: "データ表示・完了処理",
        detail: dedent(`
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
        `),
    },
    {
        event: "onerror",
        meaning: "通信失敗（ネットワークエラー）",
        useCase: "エラーメッセージ表示",
        detail: dedent(`
            **通信自体が失敗したときに発火するイベント**<br />
            ネットワークレベルの失敗

            #### 発火するケース
            - サーバーに接続できない
            - URLが間違っている
            - ネットが切れている
            - CORSエラー
            - DNSエラー

            **❌ 発火しないケース（重要）**
            \`\`\`txt
            404 / 500 は onerror ではない
            \`\`\`
            👉 これは「通信成功」扱い → onload が呼ばれる

            ---

            #### 基本コード
            \`\`\`js
            xhr.onerror = () => {
                alert("通信エラーが発生しました");
            };
            \`\`\`

            ---

            #### 再試行（リトライ）
            \`\`\`js
            xhr.onerror = () => {
                retryBtn.style.display = "block";
            };
            retryBtn.addEventListener("click", () => {
                upload(); // 再実行
            });
            \`\`\`

            ---

            #### ローディング解除
            \`\`\`js
            xhr.onerror = () => {
                loading.style.display = "none";
            };
            \`\`\`

            ---

            #### onerror と onload の関係
            \`\`\`js
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    console.log("成功");
                } else {
                    console.log("サーバーエラー");
                }
            };

            xhr.onerror = () => {
                console.log("通信エラー");
            };
            \`\`\`
            onload → サーバーから返ってきた<br />
            onerror → そもそも届いてない<br />
            onerrorは通信できなかった場合を処理する
        `),
    },
    {
        event: "onprogress",
        meaning: "ダウンロード進捗",
        useCase: "画像・データ取得の進捗表示",
        detail: dedent(`
            **サーバーからデータを受信している途中の進み具合を取得するイベント**

            #### 使用場面
            - 画像・動画のダウンロード
                - ギャラリーサイト
                - 動画プレビュー
                - ストレージアプリ
            - APIレスポンスが重い場合
                - 分析データ
                - CSV取得
                - レポート生成
            - ファイルダウンロードUI
                - PDFダウンロード
                - ZIPファイル取得
                - バックアップデータ

            #### 基本コード
            \`\`\`js
            const xhr = new XMLHttpRequest();

            xhr.open("GET", "/large-data");

            xhr.onprogress = (event) => {
                if (!event.lengthComputable) return;

                const percent = (event.loaded / event.total) * 100;

                console.log(percent);
            };

            xhr.onload = () => {
                console.log("完了");
            };

            xhr.send();
            \`\`\`
            \`\`\`txt
            event.loaded → 受信済みバイト数
            event.total  → 全体バイト数
            進捗率 = loaded ÷ total × 100
            \`\`\`

            ---

            #### 進捗バー
            \`\`\`html
            <div class="bar">
                <div id="progress"></div>
            </div>
            <p id="percent">0%</p>
            \`\`\`

            \`\`\`js
            const progress = document.querySelector("#progress");
            const percentText = document.querySelector("#percent");

            xhr.onprogress = (e) => {
                if (!e.lengthComputable) return;

                const percent = (e.loaded / e.total) * 100;

                progress.style.width = percent + "%";
                percentText.textContent = \`\${Math.round(percent)}%\`;
            };
            \`\`\`

            ⚠️ 
            - totalが取れない場合がある
                - サーバーがContent-Lengthを返してない
                - ストリーミングレスポンス
            \`\`\`js
            if (!event.lengthComputable) return;
            \`\`\`
            - 小さいデータは一瞬で終わる
            - fetchでは使えない
            \`\`\`txt
            fetch → onprogressなし
            \`\`\`

            👉 XMLHttpRequest or axios
        `),
    },
    {
        event: "upload.onprogress",
        meaning: "アップロード進捗",
        useCase: "ファイルアップロードの進捗バー",
        detail: dedent(`
            **ファイルをアップロードしている途中の進捗を取得できるイベント**<br />
            何%アップロードされたか分かる

            #### 使用場面
            - 画像アップロード
                - プロフィール画像
                - 商品画像
                - 投稿画像
            - 動画アップロード
                - 時間がかかるため進捗がないと離脱される
            - ファイル送信
                - PDF
                - Excel
                - 履歴書
            - SaaS系
                - クラウドストレージ
                - デザインツール
                - 動画編集サービス

            #### 基本構文
            \`\`\`js
            xhr.upload.onprogress = (event) => {
                if (!event.lengthComputable) return;

                const percent = (event.loaded / event.total) * 100;

                console.log(percent);
            };
            \`\`\`

            #### 仕組み
            \`\`\`txt
            event.loaded → 送信済みサイズ
            event.total  → 全体サイズ
            進捗 = loaded / total × 100
            \`\`\`

            ---

            #### 進捗バー
            \`\`\`html
            <div class="bar">
                <div class="progress" id="progress"></div>
            </div>

            <p id="percent">0%</p>
            \`\`\`

            \`\`\`js
            xhr.upload.onprogress = (e) => {
                if (!e.lengthComputable) return;

                const percent = (e.loaded / e.total) * 100;

                progress.style.width = percent + "%";
                percentText.textContent = \`\${Math.round(percent)}%\`;
            };
            \`\`\`
            ⚠️ 
            - 進捗が出ない
                - ファイルが小さいと一瞬で終わるため大きなファイルでテストする
            - fetchは進捗イベント非対応
                - XHR or axios使用
            - サイズ不明だと進捗取れない
            \`\`\`js
            if (!e.lengthComputable) return;
            \`\`\`
        `),
    },
    {
        event: "onabort",
        meaning: "通信中断",
        useCase: "キャンセルボタン・途中停止",
        detail: dedent(`
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
        `),
    },
];