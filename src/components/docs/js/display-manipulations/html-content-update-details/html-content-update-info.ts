import dedent from "dedent";

export const detail = dedent(`
    管理画面やAPIから取得したお知らせ文を、そのままHTML付きで表示する<br />
    \`innerHTML\` を使うことで文字列だけではできない装飾付きのお知らせを表示できる

    #### 使用場面
    - サイトメンテナンス告知
    - キャンペーン表示
    - 緊急障害案内
    - 管理画面から投稿した通知
    - API取得したニュース表示

    \`\`\`html
    <div id="notice"></div>
    \`\`\`

    \`\`\`js
    const notice = document.querySelector("#notice");

    notice.innerHTML = \`
        <p class="text-red-500 font-bold">
            メンテナンスのお知らせ
        </p>
        <p>本日 22:00〜23:00 に実施します。</p>
    \`;
    \`\`\`

    ---

    #### APIから取得して表示

    \`\`\`js
    fetch("/api/notice")
        .then(res => res.json())
        .then(data => {
            notice.innerHTML = \`
                <h3>\${data.title}</h3>
                <p>\${data.message}</p>
            \`;
        });
    \`\`\`

    ---

    #### 緊急障害アラート

    \`\`\`js
    notice.innerHTML = \`
        <div class="bg-red-100 p-3 rounded">
            <strong>障害発生中</strong><br />
            一部サービスに接続しづらい状況です。
        </div>
    \`;
    \`\`\`

    ---

    #### キャンペーン告知

    \`\`\`js
    notice.innerHTML = \`
        <div class="bg-yellow-100 p-3 rounded">
            🎉 今だけ送料無料キャンペーン開催中！
        </div>
    \`;
    \`\`\`

    #### 安全に使うコツ
    - 自分で固定HTMLを書く
    - APIデータはサニタイズする
    - 文字だけなら \`textContent\` を使う
`);