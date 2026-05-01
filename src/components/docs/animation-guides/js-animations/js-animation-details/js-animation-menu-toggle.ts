import dedent from "dedent";

export const detail = dedent(`
    #### 使用場面
    - スマホサイト
    - ECサイト
    - コーポレートサイト
    - 管理画面SP版
    - LPヘッダー

    #### 使用例
    \`\`\`html
    <button id="menuBtn" class="menu-btn">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <div id="overlay" class="overlay"></div>

    <nav id="menu" class="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    \`\`\`

    \`\`\`css
    .menu {
        position: fixed;
        top: 0;
        left: -300px;
        width: 240px;
        height: 100vh;
        background: #111;
        padding: 24px;
        padding-top: 60px;
        transition: left 0.3s ease;
        z-index: 1001;
    }

    .menu.open {
        left: 0;
    }

    /* メニューリンク */
    .menu a {
        display: block;
        color: white;
        margin-bottom: 16px;
        text-decoration: none;
    }

    /* 背景オーバーレイ */
    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        opacity: 0;
        visibility: hidden;
        transition: 0.3s;
        z-index: 1000;
    }

    .overlay.show {
        opacity: 1;
        visibility: visible;
    }

    /* ハンバーガーボタン */
    .menu-btn {
        position: relative;
        width: 32px;
        height: 24px;
        border: none;
        background: transparent;
        cursor: pointer;
        z-index: 1002;
    }

    .menu-btn span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 3px;
        background: #111;
        border-radius: 999px;
        transition: 0.3s;
    }

    .menu-btn span:nth-child(1) {
        top: 0;
    }

    .menu-btn span:nth-child(2) {
        top: 10px;
    }

    .menu-btn span:nth-child(3) {
        top: 20px;
    }

    /* ×ボタンへ変形 */
    .menu-btn.open span:nth-child(1) {
        transform: rotate(45deg);
        top: 10px;
        background-color: white;
    }

    .menu-btn.open span:nth-child(2) {
        opacity: 0;
    }

    .menu-btn.open span:nth-child(3) {
        transform: rotate(-45deg);
        top: 10px;
        background-color: white;
    }

    /* bodyスクロール停止 */
    body.lock {
        overflow: hidden;
    }
    \`\`\`

    \`\`\`js
    const menuBtn = document.querySelector("#menuBtn");
    const menu = document.querySelector("#menu");
    const overlay = document.querySelector("#overlay");
    const links = document.querySelectorAll("#menu a");

    function openMenu() {
        menu.classList.add("open");
        overlay.classList.add("show");
        menuBtn.classList.add("open");
        document.body.classList.add("lock");
    }

    function closeMenu() {
        menu.classList.remove("open");
        overlay.classList.remove("show");
        menuBtn.classList.remove("open");
        document.body.classList.remove("lock");
    }

    menuBtn.addEventListener("click", () => {
        if (menu.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    /* 背景クリックで閉じる */
    overlay.addEventListener("click", closeMenu);

    /* メニュー押下後に自動で閉じる */
    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
    \`\`\`

    ---

    #### UXポイント
    - 開閉は0.2〜0.35秒が自然
    - メニュー幅は 240px〜320px が多い
    - 背景暗転を付けると見やすい
    - 閉じる導線を必ず作る
`);