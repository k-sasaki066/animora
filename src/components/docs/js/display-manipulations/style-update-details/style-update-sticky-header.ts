import dedent from "dedent";

export const detail = dedent(`
    #### 使用場面
    - LP（ランディングページ）
    - コーポレートサイト
    - ECサイト
    - ブログ記事ページ
    - 管理画面ダッシュボード
    - スマホナビゲーション

    ---

    #### 基本
    \`\`\`html
    <header id="header">
        <h1>LOGO</h1>
    </header>
    \`\`\`

    \`\`\`css
    header {
        position: relative;
        width: 100%;
        transition: 0.3s;
    }

    header.fixed {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    \`\`\`

    \`\`\`js
    const header = document.querySelector("#header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
    \`\`\`

    #### ポイント
    - アニメーション（transition）をCSS側に書くと自然な動きになる
    - JSは「状態管理（class付け外し）」だけにするのがベスト
    - sticky と併用するとさらに軽量化できる

    #### スクロール方向で制御（上スクロールで表示）
    \`\`\`js
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScroll) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
        lastScroll = window.scrollY;
    });
    \`\`\`

    ---

    #### CSSでフェード表示
    \`\`\`css
    header.hidden {
        transform: translateY(-100%);
        opacity: 0;
    }
    \`\`\`
`);