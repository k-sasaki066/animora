import dedent from "dedent";

export const detail = dedent(`
    ページ遷移時に一瞬で切り替えるのではなく、<br />
    アニメーションを入れることで自然な操作感にする

    #### 使用場面
    - ECサイトの商品一覧 → 商品詳細
    - ブログ一覧 → 記事ページ
    - 管理画面のメニュー切替
    - SPA（React / Next.js）の画面遷移
    - LPのセクション移動

    ---

    #### 使用例① フェードアウトして次ページへ
    \`\`\`html
    <a href="/about" id="move">Aboutページへ</a>
    \`\`\`

    \`\`\`css
    .page-leave {
        animation: fadeOut 0.4s ease forwards;
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to   { opacity: 0; }
    }
    \`\`\`

    \`\`\`js
    const link = document.querySelector("#move");

    link.addEventListener("click", (e) => {
        e.preventDefault();

        document.body.classList.add("page-leave");

        setTimeout(() => {
            location.href = "/about";
        }, 400);
    });
    \`\`\`

    ---

    #### 使用例② 読み込み時にフェードイン
    \`\`\`css
    body {
        animation: fadeIn 0.5s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    \`\`\`

    ---

    #### 使用例③ ローディング画面を挟む
    \`\`\`js
    router.push("/dashboard");
    setLoading(true);
    \`\`\`

    通信があるページでよく使われます。

    - 決済完了後
    - 管理画面移動
    - API取得ページ

    ---

    #### 使用例④ 横スライド遷移（アプリ風）
    \`\`\`css
    .page-enter {
        animation: slideIn 0.4s ease;
    }

    @keyframes slideIn {
        from {
            transform: translateX(40px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    \`\`\`

    - モバイルUI
    - PWA
    - ネイティブアプリ風サイト

    ---

    #### 効果
    - 高級感が出る
    - 操作感が滑らか
    - 読み込み待ちストレス軽減
    - SPAらしい体験になる

    #### 注意点
    - 長すぎる演出は逆効果（0.3〜0.6秒推奨）
    - 毎回派手にしすぎない
    - UX優先で自然にする
`);