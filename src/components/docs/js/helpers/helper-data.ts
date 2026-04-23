import dedent from "dedent";

export type CommandItem = {
    category: string;
    title: string;
    description: string;
    detail?: string;
};

export const jsUtilityColumns = [
    { key: "title", label: "関数名", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const jsUtilityData: CommandItem[] = [
    {
        category: "format",
        title: "truncate",
        description: "文字列を指定文字数で省略（...表示）",
        detail: dedent(`
            ### truncate
            文字を途中で省略（...表示）<br />
            長すぎるタイトルを省略してレイアウト崩れ防止<br />
            画面幅が狭い時に文字数制限

            #### 使用場面
            - ECサイトの商品名カード表示
            - 長文コメントの一覧表示
            - モバイルUIのレイアウト崩れ防止

            \`\`\`js
            function truncate(text = "", maxLength = 20) {
                return text.length > maxLength
                    ? text.slice(0, maxLength) + "..."
                    : text;
            }

            truncate("これはとても長い文章です", 10);  // "これはとても長い文章..."
            truncate("JavaScript", 10);            // "JavaScript"
            \`\`\`
        `),
    },
    {
        category: "format",
        title: "formatNumber",
        description: "数値をカンマ区切りに変換",
        detail: dedent(`
            ### formatNumber
            数値をカンマ区切りに変換

            #### 使用場面
            - ECサイトの商品価格表示
            - 売上・利益・PV数の表示
            - ダッシュボードの統計数値
            - フォロワー数・閲覧数表示
            - 管理画面の金額表示

            \`\`\`js
            formatNumber(1000);       // "1,000"
            formatNumber(123456789);  // "123,456,789"
            formatNumber(12345.67);   // "12,345.67

            const price = 980000;
            formatNumber(price);      // "¥980,000"

            ⚠️文字列には使用できない
            formatNumber("1000").    // "1000"
            \`\`\`
        `),
    },
    {
        category: "format",
        title: "formatDate",
        description: "日付を日本形式に整形",
        detail: dedent(`
            ### formatDate
            日付フォーマット

            #### 使用場面
            - ブログ投稿日
            - 更新日表示
            - 一覧ページの日付
            - 管理画面テーブル
            - 投稿履歴の表示

            \`\`\`js
            function formatDate(date) {
                const d = new Date(date);
                if (isNaN(d.getTime())) return "";

                return d.toLocaleDateString("ja-JP");
            }

            formatDate("2026-04-16");          //"2026/4/16"
            formatDate("2026-12-25T10:30:00"); //"2026/12/25"
            formatDate(new Date());            //"2026/4/16"

            const posts = [
                { title: "記事A", createdAt: "2026-04-01" },
                { title: "記事B", createdAt: "2026-04-16" },
            ];
            posts.map(post => formatDate(post.createdAt));
            //["2026/4/1", "2026/4/16"]
            \`\`\`
        `),
    },
    {
        category: "format",
        title: "capitalize",
        description: "文字列の先頭を大文字に変換",
        detail: dedent(`
            ### capitalize
            先頭を大文字にする

            #### 使用場面
            - ユーザー名の表示
            - カテゴリ名の見た目調整
            - APIデータの表示整形(Successなど)
            - APIデータの表示整形

            \`\`\`js
            function capitalize(str = "") {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            capitalize("hello");  //"Hello"
            \`\`\`
        `),
    },
    {
        category: "validation",
        title: "isEmpty",
        description: "空文字・null・undefined判定",
        detail: dedent(`
            ### isEmpty
            空チェック

            #### 使用場面
            - フォーム入力チェック
            - APIデータ確認(メール登録有無など)
            - 条件付き表示(タイトルがなければ『未タイトル』表示など)

            \`\`\`js
            function isEmpty(value) {
                if (value == null) return true;

                return String(value).trim() === "";
            }

            isEmpty(null);       // true
            isEmpty(undefined);  // true
            isEmpty("hello");    // false
            isEmpty("   ");      // true
            \`\`\`
        `),
    },
    {
        category: "validation",
        title: "isOverLimit",
        description: "文字数制限チェック",
        detail: dedent(`
            ### isOverLimit
            文字数カウント（制限チェック）

            #### 使用場面
            - コメント投稿の最大文字数チェック
            - お問い合わせフォームの入力制限
            - タイトル文字数制限（例: 30文字以内）
            - SNS投稿文字数カウント
            - プロフィール自己紹介欄の制限

            \`\`\`js
            function isOverLimit(text = "", limit = 100) {
                return text.length > limit;
            }

            isOverLimit("こんにちは", 10);             //false
            isOverLimit("これはとても長い文章です", 5);  //true
            \`\`\`
        `),
    },
    {
        category: "array",
        title: "unique",
        description: "配列の重複削除",
        detail: dedent(`
            ### unique
            配列の重複削除

            #### 使用場面
            - タグ一覧
            - カテゴリ一覧
            - 検索候補の整理
            - APIデータの重複除去

            \`\`\`js
            const unique = (arr) => [...new Set(arr)];

            const fruits = ["apple", "banana", "apple", "orange", "banana"];
            const result = unique(fruits);
            // ["apple", "banana", "orange"]

            const numbers = [1, 2, 2, 3, 4, 4, 5];
            const result = unique(numbers);
            // [1, 2, 3, 4, 5]

            const tags = ["React", "Next.js", "React", "TypeScript"];
            const result = unique(tags);
            // ["React", "Next.js", "TypeScript"]
            \`\`\`
        `),
    },
    {
        category: "array",
        title: "find",
        description: "条件一致する最初の要素取得",
        detail: dedent(`
            ### find
            配列から特定の要素を検索<br />
            find は、条件に一致した最初の1件を返す(見つからない場合は undefined)

            #### 使用場面
            - id一致のユーザー取得
            - 商品一覧から1件取得
            - select選択値に対応するデータ取得
            - URLパラメータから対象データ検索

            \`\`\`js
            const found = arr.find(item => 条件);

            const users = [
                { id: 1, name: "田中" },
                { id: 2, name: "佐藤" },
                { id: 3, name: "鈴木" },
            ];
            const found = users.find(item => item.id === 2);
            // { id: 2, name: "佐藤" }
            \`\`\`
        `),
    },
    {
        category: "array",
        title: "shuffle",
        description: "配列をランダムに並び替え",
        detail: dedent(`
            ### shuffle
            配列をランダムに並び替え(実行するたびに順番が変わる)

            #### 使用場面
            - クイズの選択肢をシャッフル
            - ランダム表示、ガチャ演出
            - おすすめ商品の並び替え
            - カードゲーム

            \`\`\`js
            const shuffled = arr.sort(() => Math.random() - 0.5);

            const fruits = ["りんご", "バナナ", "みかん", "ぶどう"];

            *元の配列 fruits 自体も並び替わる
            const shuffled = fruits.sort(() => Math.random() - 0.5);
            console.log(fruits,shuffled);
            // ['バナナ', 'りんご', 'ぶどう', 'みかん'], ['バナナ', 'りんご', 'ぶどう', 'みかん']

            *元の配列を残したい場合はコピー
            const shuffled = [...fruits].sort(() => Math.random() - 0.5);
            console.log(fruits,shuffled);
            //['りんご', 'バナナ', 'みかん', 'ぶどう'],['みかん', 'りんご', 'バナナ', 'ぶどう']

            \`\`\`
        `),
    },
    {
        category: "array",
        title: "randomItem",
        description: "配列からランダムに1件取得",
        detail: dedent(`
            ### randomItem
            配列からランダムに1件取得

            #### 使用場面
            - 今日のおすすめ商品
            - ランダム背景色
            - 名言をランダム表示
            - ガチャ・抽選

            \`\`\`js
            const randomItem = (arr) => {
                if (!arr.length) return null;

                return arr[Math.floor(Math.random() * arr.length)];
            };

            const fruits = ["りんご", "バナナ", "みかん", "ぶどう"];
            const result = randomItem(fruits);
            // みかん(実行するたびに結果は変わる)
            \`\`\`
        `),
    },
    {
        category: "array",
        title: "clean",
        description:
        "配列から falsy 値を削除する",
        detail: dedent(`
            ### clean
            配列の中にある false として判定される値（falsy） を削除

            #### 使用場面
            - APIデータの整形
            - 空データ削除
            - className生成
            - フィルタリング処理

            \`\`\`js
            const clean = (arr) => arr.filter(Boolean);
            \`\`\`

            falsyになる値
            \`\`\`js
            false
            0
            ""
            null
            undefined
            NaN
            \`\`\`

            \`\`\`js
            空データ削除
                const data = ["HTML", "", null, "CSS", undefined, "JavaScript"];
                const result = clean(data);
                // ['HTML', 'CSS', 'JavaScript']

            条件付きclassName生成
                const classes = [
                    "text-lg",
                    isActive && "text-red-500",
                    isDark && "bg-black",
                ].filter(Boolean).join(" ");
                // "text-lg text-red-500"

            APIデータ整形
                const tags = ["React", null, "Next.js", "", "TypeScript"];
                const result = clean(tags);
                // const tags = ["React", null, "Next.js", "", "TypeScript"];

            const result = clean(tags);

            ⚠️0 も削除される
            clean([1, 0, 2]);      // [1, 2]
            数値の0を残したい場合
            arr.filter(v => v !== null && v !== undefined && v !== "")
            \`\`\`
        `),
    },
    {
        category: "array/string",
        title: "split",
        description:
            "指定した区切り文字で文字列を分割し、配列に変換する",
        detail: dedent(`
            ### split
            文字列を指定した区切り文字で分割し、配列に変換する関数

            #### 使用場面
            - タグ一覧  ("React,Next.js,TypeScript"など)
            - 入力文字列の分割
            - CSVデータ処理
            - URLパス分解

            \`\`\`js
            const parts = 文字.split("指定区切り");

            const parts = "a,b,c".split(",");
            // ['a', 'b', 'c'] カンマ区切り

            const words = "hello world javascript".split(" ");
            // ["hello", "world", "javascript"] スペース区切り

            const chars = "hello".split("");
            // ["h", "e", "l", "l", "o"] 1文字ずつ分割

            const data = "a,b,c,d".split(",", 2);
            // ["a", "b"] 件数制限して分割
            \`\`\`
        `),
    },
    {
        category: "array/filter",
        title: "filterList",
        description:
            "配列からキーワードに一致する要素を抽出（大文字・小文字を区別しない）",
        detail: dedent(`
            ### filterList
            検索フィルタ

            #### 使用場面
            - 検索フォームのフィルタリング
            - 商品一覧検索
            - ユーザー検索
            - ジェスト機能

            \`\`\`js
            function filterList(list, keyword) {
                return list.filter(item =>
                    item.toLowerCase().includes(keyword.toLowerCase())
                );
            }

            const fruits = [
                "Apple",
                "Banana",
                "Orange",
                "Grape",
                "Pineapple"
            ];
            const result = filterList(fruits, "ap");
            // ["Apple", "Grape", "Pineapple"]
            *toLowerCase() により 大文字・小文字を区別しない

            const users = ["Taro", "Hanako", "Jiro"];
            filterList(users, "ta");
            // ["Taro"]
            \`\`\`
        `),
    },
    {
        category: "util",
        title: "debounce",
        description: "入力後に遅延して実行",
        detail: dedent(`
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
        `),
    },
    {
        category: "util",
        title: "throttle",
        description: "一定間隔で実行制御",
        detail: dedent(`
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
        `),
    },
    {
        category: "util",
        title: "sleep",
        description: "処理を一定時間遅延",
        detail: dedent(`
            ### sleep
            指定した時間だけ処理を止める（遅延させる）関数

            #### 使用場面
            - ローディング演出
            - アニメーション制御
            - UIステップ遷移
            - 疑似API遅延

            \`\`\`js
            const sleep = (ms) => 
                new Promise(resolve => setTimeout(resolve, ms));
            \`\`\`

            使用例① ローディング演出を作る →「ローディングが一瞬で消える問題」を防ぐ
            \`\`\`js
            async function fetchData() {
                setLoading(true);

                await sleep(1000); // 1秒待つ（演出）

                const res = await fetch("/api/data");
                const data = await res.json();

                setData(data);
                setLoading(false);
            }
            \`\`\`

            使用例② アニメーションのタイミング調整 → ステップUI・チュートリアルに使う
            \`\`\`js
            async function animateSequence() {
                setStep(1);
                await sleep(500);

                setStep(2);
                await sleep(500);

                setStep(3);
            }
            \`\`\`

            使用例③ APIの負荷テスト（疑似遅延）
            \`\`\`js
            async function mockFetch() {
                await sleep(2000);

                return { message: "success" };
            }
            \`\`\`

            使用例④ UIのフェード制御
            \`\`\`js
            async function closeModal() {
                setClosing(true);

                await sleep(300); // アニメーション待ち

                setOpen(false);
                setClosing(false);
            }
            \`\`\`
            ⚠️ 注意点
            - sleep は処理を止めるのではなく「遅延」するだけ
            - CPUは止まらない（非同期）
            - await を付けないと意味がない
        `),
    },
    {
        category: "dom",
        title: "copy",
        description: "クリップボードにコピー",
        detail: dedent(`
            ### copy
            ブラウザのクリップボードに文字列をコピー

            #### 使用場面
            - URL共有ボタン
            - クーポンコードコピ
            - 招待リンク
            - コードスニペットコピー

            \`\`\`js
            async function copy(text) {
                await navigator.clipboard.writeText(text);
            }
            \`\`\`
        `),
    },
    {
        category: "dom",
        title: "scrollToTop",
        description: "ページトップへスクロール",
        detail: dedent(`
            ### scrollToTop
            ページトップへスクロール

            #### 使用場面
            - 長い記事ページ
                - ブログ記事
                - ドキュメントページ
                - LP（ランディングページ）
            - UIコンポーネント
                - 「↑ TOPへ戻るボタン」
                - フッター固定ボタン
                - サイドバーの補助ナビ
            - SPA（Next.jsなど）
                - ページ遷移後にトップへ戻す
                - タブ切り替え後のリセット
            - ドキュメントサイト

            \`\`\`js
            function scrollToTop() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }

            <button onClick={scrollToTop}>
                TOPへ戻る
            </button>

            滑らかにスクロール（smooth）
            一瞬でジャンプせず自然な動きになる
            \`\`\`
        `),
    },
    {
        category: "url",
        title: "URLSearchParams",
        description: "URLクエリパラメータを取得・操作するためのAPI",
        detail: dedent(`
            ### URLSearchParams
            URLからパラメータ取得

            #### 使用場面
            - 商品詳細ページ（id取得）
            - ブログ記事ページ（slug取得）
            - 検索ページ（keyword取得）
            - ページネーション（page取得）
            - 並び替え（sort取得）
            - 絞り込み（category取得）

            \`\`\`js
            const params = new URLSearchParams(window.location.search);
            const id = params.get("id");

            https://example.com/product?id=15
            console.log(id);      //"15"

            https://example.com/search?keyword=javascript
            const keyword = params.get("keyword");    //"javascript"

            https://example.com/posts?id=10&page=2
            const id = params.get("id");
            const page = params.get("page");
            console.log(id, page);      //"10 2"

            値が存在しない場合 null
            数値として扱う場合 const id = Number(params.get("id"));
            \`\`\`
        `),
    },
];