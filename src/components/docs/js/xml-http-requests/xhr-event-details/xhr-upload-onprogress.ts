import dedent from "dedent";

export const detail = dedent(`
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
    ⚠️ 注意
    - 進捗が出ない
        - ファイルが小さいと一瞬で終わるため大きなファイルでテストする
    - fetchは進捗イベント非対応
        - XHR or axios使用
    - サイズ不明だと進捗取れない
    \`\`\`js
    if (!e.lengthComputable) return;
    \`\`\`
`);