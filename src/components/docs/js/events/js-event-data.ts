import dedent from "dedent";

export type EventItem = {
    event: string;
    description: string;
    detail?: string;
};

export const jsEventColumns = [
    { key: "event", label: "イベント", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const jsEventData: EventItem[] = [
    {
        event: "click",
        description: "要素がクリックされたときに発火するイベント",
        detail: dedent(`
            ユーザーがボタンやリンクなどをクリックした瞬間に実行されるイベント

            #### 使用場面
            - ボタンのクリック処理
            - メニューの開閉
            - モーダル表示
            - いいねボタン
            - ページ遷移
            - 要素の選択操作

            #### 実行例
            \`\`\`html
            <button id="btn">クリック</button>
            \`\`\`

            \`\`\`js
            const btn = document.querySelector("#btn");

            btn.addEventListener("click", (e) => {
                console.log(e.target);
            });
            \`\`\`
        `),
    },
    {
        event: "input",
        description: "入力欄の値が変更されるたびに発火するイベント",
        detail: dedent(`
            テキスト入力のたびにリアルタイムで処理を実行する<br />
            debounce（遅延処理）とセットで使うことが多い

            - 文字入力するたびに動く
            - 削除しても動く
            - コピー＆ペーストでも動く

            #### 使用場面
            - 検索フォーム（サジェスト）
            - リアルタイムバリデーション
            - フィルタリング

            #### 実行例
            \`\`\`html
            <input id="text" />
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#text");

            input.addEventListener("input", (e) => {
                console.log(e.target.value);
            });
            \`\`\`
        `),
    },
    {
        event: "change",
        description: "入力確定時に発火するイベント",
        detail: dedent(`
            inputと違い、入力完了後（フォーカスが外れた時など）に発火

            #### 使用場面
            - プルダウン選択
            - チェックボックス変更
            - フォーム設定変更
            - フィルタ条件変更

            #### 代表的な発火タイミング
            **1. select（プルダウン） = 選択を変えた瞬間**
            \`\`\`html
            <select id="select">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            \`\`\`

            \`\`\`js
            const select = document.querySelector("#select");

            select.addEventListener("change", (e) => {
                console.log(e.target.value);
            });
            \`\`\`

            実行結果
            \`\`\`txt
            A
            → B に変更した瞬間
            B
            \`\`\`

            ---

            **2. input（テキスト入力）= フォーカスを外したとき**
            \`\`\`html
            <input id="text" />
            \`\`\`
            \`\`\`js
            input.addEventListener("change", (e) => {
                console.log(e.target.value);
            });
            \`\`\`

            🖨 実行例
            \`\`\`txt
            （入力中）hello
            （そのまま）
            （クリックして外す）
            → hello
            \`\`\`

            入力中は発火しない
        `),
    },
    {
        event: "submit",
        description: "フォーム送信時に発火するイベント",
        detail: dedent(`
            フォームが送信されたタイミングで発火<br />
            デフォルト動作はページリロード
            \`\`\`txt
            ① 送信ボタンをクリック
            ② Enterキーでフォーム送信
            ③ form.submit() を実行
                    ↓
            submitイベント発生
            \`\`\`

            #### 使用場面
            - ログインフォーム
            - お問い合わせフォーム
            - 検索フォーム

            #### 実行例
            \`\`\`html
            <form id="form">
                <input type="text" />
                <button type="submit">送信</button>
            </form>
            \`\`\`

            \`\`\`js
            const form = document.querySelector("#form");

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                console.log("送信されました");
            });
            \`\`\`
        `),
    },

    {
        event: "scroll",
        description: "スクロール時に発火するイベント",
        detail: dedent(`
            ページや要素がスクロールされるたびに発火
            \`\`\`txt
            スクロールする
                ↓
            scrollイベント発火
                ↓
            登録した処理が実行される
            \`\`\`

            #### 使用場面
            - ヘッダー固定
            - 無限スクロール
            - アニメーション発火

            #### 実行例
            \`\`\`js
            window.addEventListener("scroll", () => {
                console.log(window.scrollY);
            });
            \`\`\`

            実行結果
            \`\`\`txt
            0
            120
            250
            430
            800
            \`\`\`
            スクロールするたびに、上からのスクロール距離（px）が出る

            ---

            #### 無限スクロール (ページ最下部で追加データ取得)
            \`\`\`js
            window.addEventListener("scroll", () => {
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    console.log("追加読み込み");
                }
            });
            \`\`\`

            ---

            #### アニメーション発火 (スクロール位置でフェードイン)
            \`\`\`js
            window.addEventListener("scroll", () => {
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    console.log("追加読み込み");
                }
            });
            \`\`\`

            ---

            ⚠️ 1回スクロールで何十回も発火するためdebounce / throttleで制御する
        `),
    },

    {
        event: "keydown",
        description: "キーが押された瞬間に発火するイベント",
        detail: dedent(`
            キーボード入力時にキーを押した瞬間に発火<br />
            長押しでは連続で発火（環境による）

            #### 使用場面
            - ショートカットキー
            - ゲーム操作
            - 入力制御

            #### 実行例
            \`\`\`js
            window.addEventListener("keydown", (e) => {
                console.log(e.key);
            });
            \`\`\`

            ---

            #### ショートカットキー (Enterで検索実行など)
            \`\`\`js
            window.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    console.log("検索実行");
                }
            });
            \`\`\`

            ---

            #### 入力制御 (スペース禁止など)
            \`\`\`js
            input.addEventListener("keydown", (e) => {
                if (e.key === " ") {
                    e.preventDefault();
                }
            });
            \`\`\`

        `),
    },
    {
        event: "load",
        description: "ページや画像などの読み込み完了時に発火するイベント",
        detail: dedent(`
            HTMLや画像などの読み込みが完了したタイミングで発火<br />
            画像やフォントまで完全に揃えてから動かしたいとき

            \`\`\`txt
            HTML読み込み
            CSS読み込み
            画像読み込み
            JS読み込み
            全部完了
            ↓
            load発火
            \`\`\`

            #### 使用場面
            - 初期データ表示
            - アニメーション開始
            - 画像ギャラリー
            - 全体レイアウト確定後処理

            #### 実行例
            \`\`\`js
            window.addEventListener("load", () => {
                console.log("読み込み完了");
            });
            \`\`\`

            ---

            #### スプラッシュ画面 (全部読み込み終わってから画面表示)
            \`\`\`js
            window.addEventListener("load", () => {
                document.querySelector("#splash").style.display = "none";
            });
            \`\`\`

            ---

            #### アニメーション開始 (画像崩れを防ぐ)
            \`\`\`js
            window.addEventListener("load", () => {
                startAnimation();
            });
            \`\`\`

            ---

            ⚠️ DOMContentLoaded (UIをすぐ操作したいとき)
            \`\`\`js
            document.addEventListener("DOMContentLoaded", () => {
                console.log("HTMLだけ完成");
            });
            \`\`\`

            実行結果
            \`\`\`txt
            HTMLだけ完成（画像はまだ）
            \`\`\`
        `),
    },
    {
        event: "mouseover",
        description: "要素にマウスが乗ったときに発火するイベント",
        detail: dedent(`
            マウスホバー時に発火 (マウスが要素の外 → 内に入った瞬間)<br />
            ⚠️ 子要素でも発火する

            #### 使用場面
            - ツールチップ表示
            - メニュー開閉
            - UI強調表示

            #### 実行例
            \`\`\`html
            <div id="box">Hover me</div>
            \`\`\`

            \`\`\`js
            const box = document.querySelector("#box");

            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "yellow";
            });
            \`\`\`
        `),
    },
    {
        event: "mouseout",
        description: "マウスが要素から離れたときに発火するイベント",
        detail: dedent(`
            マウスが要素から完全に外れた瞬間に発火<br />
            子要素に移動しても発火する場合がある

            \`\`\`txt
            [ ボックスの上 ]
                ↑ mouseover（入る）

            [ ボックスから外へ ]
                ↓ mouseout（出る）
            \`\`\`

            #### 使用場面
            - ホバー解除
            - UIリセット
            - メニュー閉じる

            #### 実行例
            \`\`\`js
            box.addEventListener("mouseout", () => {
                box.style.backgroundColor = "transparent";
            });
            \`\`\`

            ---

            * mouseleave = 要素の「完全な外」に出たときだけ発火<br />
            子要素に移動では発火しない
        `),
    },
];