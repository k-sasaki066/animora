import dedent from "dedent";

export const detail = dedent(`
    「今処理しています」「固まっていません」と伝える重要なUI

    #### 使用場面
    - API通信中
    - 商品一覧取得中
    - ログイン処理中
    - 決済送信中
    - 画像読み込み中
    - ページ初回表示
    - 無限スクロール追加読込
    - ファイルアップロード中

    #### 使用例①
    \`\`\`css
    .show {
        display: block;
    }

    .spinner {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
    }
    \`\`\`

    \`\`\`js
    loading.classList.add("show");

    fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            loading.classList.remove("show");
        });
    \`\`\`

    ---

    #### 使用例② 送信ボタンをローディング化
    \`\`\`js
    button.textContent = "送信中...";
    button.disabled = true;
    \`\`\`

    - お問い合わせ送信
    - 会員登録
    - コメント投稿

    ---

    #### 使用例③ ページ初回表示でスケルトンUI
    \`\`\`html
    <div class="skeleton card"></div>
    \`\`\`

    \`\`\`css
    .skeleton {
        animation: pulse 1.2s infinite;
    }

    @keyframes pulse {
        0%   { opacity: 0.5; }
        50%  { opacity: 1; }
        100% { opacity: 0.5; }
    }
    \`\`\`

    - 商品カード一覧
    - SNS投稿一覧
    - ダッシュボード

    ---

    #### 使用例④ ファイルアップロード中
    \`\`\`js
    status.textContent = "アップロード中...";
    \`\`\`

    - 画像投稿
    - PDF送信
    - 動画アップロード

    ---

    #### 使用例⑤ 無限スクロール追加読み込み
    \`\`\`js
    window.addEventListener("scroll", () => {
        if (bottomReached) {
            loader.classList.add("show");
        }
    });
    \`\`\`

    - SNSタイムライン
    - 商品一覧
    - 記事一覧

    ---

    #### ポイント
    - 0.3秒以上待つなら表示推奨
    - 二重送信防止とセットにする
    - 読み込み完了後は即非表示
    - 長時間なら進捗率表示が理想
`);