import dedent from "dedent";

export const detail = dedent(`
    ### debounce
    連続で実行される処理を一旦止めて、最後の入力から一定時間後に1回だけ実行する関数

    #### 使用場面
    - 入力チェック(リアルタイムバリデーションを少し遅らせる)
    - API通信最適化(サジェスト検索・オートコンプリートなど)
    - resizeイベント制御

    \`\`\`js
    function debounce(fn, delay = 300) {
        let timer;

        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }
    \`\`\`

    使用例①
    \`\`\`js
    const search = debounce((keyword) => {
        console.log("検索実行:", keyword);
    }, 500);

    search("h");
    search("he");
    search("hel");
    search("hell");
    search("hello");

    *500ms後に1回だけ実行
    入力のたびに検索せず、最後の文字だけ実行される
    \`\`\`

    使用例②
    \`\`\`js
    window.addEventListener(
        "resize",
        debounce(() => {
            console.log("画面サイズ変更完了");
        }, 300)
    );

    *ウィンドウをドラッグ中は実行されない(画面サイズ変更中に何百回も実行されるのを防ぐ)
    止まって300ms後に1回だけ実行
    \`\`\`

    使用例③
    \`\`\`js
    const handleSearch = debounce((value) => {
        fetch(/api/search?q={value});
    }, 400);

    <input onChange={(e) => handleSearch(e.target.value)} />

    *文字入力ごとにAPIを叩くと重いので、入力終了後に検索する
    \`\`\`
`);