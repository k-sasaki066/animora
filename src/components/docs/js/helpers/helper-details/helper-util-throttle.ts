import dedent from "dedent";

export const detail = dedent(`
    ### throttle
    短時間に何度も発生するイベントを、一定時間に1回だけ実行する関数

    #### 使用場面
    - スクロールイベント最適化
    - いいね連打防止
    - 送信ボタン制御
    - API連打防止

    \`\`\`js
    function throttle(fn, delay = 300) {
        let isRunning = false;

        return (...args) => {
            if (isRunning) return;

            isRunning = true;
            fn(...args);

            setTimeout(() => {
                isRunning = false;
            }, delay);
        };
    }
    \`\`\`

    使用例① 連打防止(送信ボタン, いいねボタン, 購入ボタンなど)
    \`\`\`js
    const handleClick = throttle(() => {
        console.log("送信しました");
    }, 1000);

    button.addEventListener("click", handleClick);

    *1秒以内に何回クリックしても1回だけ実行される
    \`\`\`

    使用例② 高頻度イベント最適化(scroll, resize,  mousemove)
    \`\`\`js
    window.addEventListener(
        "scroll",
        throttle(() => {
            console.log("スクロール中");
        }, 500)
    );

    *スクロール中に何度イベントが発生しても0.5秒ごとに1回だけ実行
    \`\`\`

    使用例③
    \`\`\`js
    window.addEventListener(
        "resize",
        throttle(() => {
            console.log(window.innerWidth);
        }, 300)
    );

    *ウィンドウサイズ変更中も、連続実行されず軽くなる
    \`\`\`

    使用例④ API連続送信防止
    \`\`\`js
    const fetchData = throttle(() => {
        fetch("/api/data");
    }, 1000);
    \`\`\`
`);