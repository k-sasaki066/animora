import dedent from "dedent";

export const detail = dedent(`
    ボタンをクリックすると、非表示のメニューを表示<br />
    もう一度クリックすると閉じる

    #### 使用場面
    - スマホのハンバーガーメニュー
    - FAQアコーディオン
    - サイドバー開閉
    - 設定メニュー表示
    - 詳細情報の表示切替

    \`\`\`html
    <button id="menuBtn">メニュー</button>

    <nav id="menu" style="display: none;">
        <ul>
            <li>ホーム</li>
            <li>サービス</li>
            <li>お問い合わせ</li>
        </ul>
    </nav>
    \`\`\`

    \`\`\`css
    #menu {
        display: none;
    }

    #menu.open {
        display: block;
    }
    \`\`\`

    \`\`\`js
    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
    \`\`\`
`);