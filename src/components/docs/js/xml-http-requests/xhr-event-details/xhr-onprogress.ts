import dedent from "dedent";

export const detail = dedent(`
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

    ⚠️ 注意
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
`);