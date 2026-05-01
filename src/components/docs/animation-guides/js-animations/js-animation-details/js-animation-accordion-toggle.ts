import dedent from "dedent";

export const detail = dedent(`
    クリックすると内容が開き、再度クリックで閉じる

    #### 使用場面
    - FAQ（よくある質問）
    - 商品詳細説明
    - 料金プラン比較
    - 管理画面の詳細行表示
    - フィルター条件開閉
    - スマホメニュー
    - 設定画面の詳細項目
    - ドキュメント目次

    ---

    #### 場面例① FAQ
    \`\`\`text
    Q. 返品できますか？
    [+] クリックで回答表示
    \`\`\`
    ECサイト・サービスサイトで定番

    ---

    #### 場面例② 商品スペック表示
    \`\`\`text
    商品説明
    サイズ
    素材
    配送情報
    \`\`\`
    各項目を開閉して見やすく整理

    ---

    #### 場面例③ 管理画面テーブル
    一覧行クリックで詳細データ表示
    \`\`\`text
    ユーザー一覧
    注文履歴
    エラー詳細
    \`\`\`
    画面遷移せず確認できるため効率的

    ---

    #### 場面例④ 検索フィルター
    \`\`\`text
    カテゴリ ▼
    価格 ▼
    ブランド ▼
    \`\`\`
    モバイルECサイトで多用される

    ---

    #### 使用例
    \`\`\`html
    <button class="btn">詳細を見る</button>

    <div class="content">
        <p>ここに詳細説明が入ります。</p>
        <p>サイズ・素材・注意事項など。</p>
    </div>
    \`\`\`

    \`\`\`css
    .content {
        max-height: 0;
        overflow: hidden;
        background: #f5f5f5;
        padding: 0 16px;
        opacity: 0;
    }

    /* 開いた時 */
    .content.open {
        max-height: 300px;
        padding: 16px;
        animation: accordionOpen 0.35s ease forwards;
    }

    /* 閉じる時に使いたい場合 */
    .content.open.close {
        animation: accordionClose 0.3s ease forwards;
    }

    .btn {
        padding: 10px 16px;
        cursor: pointer;
    }

    /* 開く */
    @keyframes accordionOpen {
        0% {
            opacity: 0;
            transform: translateY(-8px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* 閉じる */
    @keyframes accordionClose {
        0% {
            opacity: 1;
            transform: translateY(0);
        }

        100% {
            opacity: 0;
            transform: translateY(-8px);
        }
    }
    \`\`\`

    \`\`\`js
    const button = document.querySelector(".btn");
    const content = document.querySelector(".content");

    button.addEventListener("click", () => {
        const isOpen = content.classList.contains("open");

        if (isOpen) {
            content.classList.add("close");

            setTimeout(() => {
                content.classList.remove("open");
                content.classList.remove("close");
            }, 300);
        } else {
            content.classList.add("open");
        }
    });
    \`\`\`
`);