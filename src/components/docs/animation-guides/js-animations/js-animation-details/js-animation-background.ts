import dedent from "dedent";

export const detail = dedent(`
    背景に動きを加えて、サイトの雰囲気やブランドイメージを強化する手法<br />
    ユーザーの視線を引きつけつつ、コンテンツを邪魔しないように薄く動かすのが基本

    #### 使用例① グラデーションアニメーション（LP背景）
    ページのスクロール量に応じて背景を変化させる

    \`\`\`html
    <body id="app"></body>
    \`\`\`

    \`\`\`css
    body {
        transition: background-color 0.5s ease;
    }
    \`\`\`

    \`\`\`js
    const app = document.querySelector("#app");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        if (scrollY < 300) {
            app.style.backgroundColor = "#0f172a";
        } else if (scrollY < 800) {
            app.style.backgroundColor = "#1e293b";
        } else {
            app.style.backgroundColor = "#334155";
        }
    });
    \`\`\`

    - ブランドサイト
    - ストーリー型サイト

    ---

    #### 使用例② マウス位置でグラデーションを動かす
    \`\`\`html
    <div id="bg"></div>
    \`\`\`

    \`\`\`css
    #bg {
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at center, #38bdf8, #0f172a);
        transition: 0.1s;
    }
    \`\`\`

    \`\`\`js
    const bg = document.querySelector("#bg");

    window.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        bg.style.background = \`
            radial-gradient(
            circle at \${x}% \${y}%,
            #38bdf8,
            #0f172a
            )
        \`;
    });
    \`\`\`

    - クリエイティブサイト
    - ゲーム系UI

    ---

    #### 使用例③ 粒子アニメーション（簡易版）
    \`\`\`html
    <canvas id="canvas"></canvas>
    \`\`\`

    \`\`\`js
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.fillStyle = "rgba(255,255,255,0.5)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
    \`\`\`

    - テック系サイト
    - SaaSサービス

    ---

    #### 使用例④ スクロールで波アニメーション切替
    \`\`\`html
    <div class="section">Section 1</div>
    <div class="section">Section 2</div>
    <div class="section">Section 3</div>
    <div class="section">Section 4</div>
    \`\`\`
    \`\`\`css
    .section {
        transition: background 0.6s ease;
    }

    .section.active-bg {
        background: linear-gradient(120deg, #0f172a, #1e293b);
    }
    \`\`\`
    \`\`\`js
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll(".section");

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            if (rect.top < window.innerHeight / 2) {
                section.classList.add("active-bg");
            } else {
                section.classList.remove("active-bg");
            }
        });
    });
    \`\`\`

    - ストーリーページ
    - 長尺LP
    - プロダクト紹介

    ---

    #### 使用例⑤ 時間で自動切替（スライド背景）
    一定時間ごとに背景を変えるパターン

    \`\`\`js
    const colors = ["#0f172a", "#1e293b", "#334155"];
    let index = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 3000);
    \`\`\`

    - ウェルカム画面
    - サイネージUI
    - 待機画面
`);