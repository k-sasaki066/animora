import dedent from "dedent";

export type FormManipulationItem = {
    process: string;
    detail?: string;
};

export const formColumns = [
    { key: "process", label: "フォーム操作", className: "font-mono" },
];

export const formData: FormManipulationItem[] = [
    {
        process: "入力値の取得",
        detail: dedent(`
            フォームに入力された値を取得する基本操作<br />
            ユーザーの入力を受け取る起点になる

            #### 基本の仕組み
            input要素は \`value\` プロパティに入力値が保存されているため、
            そこから値を取り出す

            \`\`\`html
            <input id="name" />
            \`\`\`

            \`\`\`js
            const name = document.querySelector("#name").value;
            console.log(name);
            \`\`\`

            \`\`\`text
            ユーザー入力: "Taro"

            console.log → "Taro"
            \`\`\`

            #### 使用場面
            - ログインID取得
            - 検索フォーム
            - お問い合わせ内容取得

            ---

            #### ボタンクリック時に取得 (フォーム送信前に確認する)
            \`\`\`html
            <input id="name" />
            <button id="btn">取得</button>
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#name");
            const btn = document.querySelector("#btn");

            btn.addEventListener("click", () => {
                console.log(input.value);
            });
            \`\`\`

            ---

            #### フォーム送信で取得
            \`\`\`html
            <form id="form">
                <input name="email" />
                <button>送信</button>
            </form>
            \`\`\`

            \`\`\`js
            const form = document.querySelector("#form");

            form.addEventListener("submit", (e) => {
                e.preventDefault();

                const email = form.querySelector("[name=email]").value;
                console.log(email);
            });
            \`\`\`

            ---

            #### リアルタイム取得（inputイベント）
            \`\`\`html
            <input id="search" />
            <p id="preview"></p>
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#search");
            const preview = document.querySelector("#preview");

            input.addEventListener("input", (e) => {
                preview.textContent = e.target.value;
            });
            \`\`\`
            👉 サジェスト検索やプレビュー表示に使用

            ---

            #### 注意点

            - \`querySelector\` の結果が null の場合があるためチェックが必要
            - 数値として扱う場合は \`Number(value)\` に変換する
            - パスワードなども同じく \`value\` で取得可能
        `),
    },

    {
        process: "入力値の変更（初期値セット）",
        detail: dedent(`
            フォームの入力欄に対して、JavaScriptから値を直接設定する操作

            ユーザーが手入力する前にデータを表示したり<br />
            APIから取得した情報をフォームに反映する際によく使われる

            これにより「編集画面」「プロフィール画面」などで、
            既存データをそのままフォームに表示できます

            #### 使用場面
            - ユーザー情報編集画面
            - プロフィール編集フォーム
            - API取得後のデータ表示
            - 下書き復元機能
            - 管理画面の編集フォーム

            #### 基本の使い方
            \`\`\`html
            <input id="name" />
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#name");

            input.value = "山田太郎";
            \`\`\`
            この時点で入力欄に「山田太郎」が自動で入る

            ---

            #### API連携での使用例
            \`\`\`js
            fetch("/api/user")
                .then(res => res.json())
                .then(data => {
                    document.querySelector("#name").value = data.name;
                    document.querySelector("#email").value = data.email;
                });
            \`\`\`

            ---

            #### 初期値セット（ページ読み込み時）
            \`\`\`js
            window.addEventListener("DOMContentLoaded", () => {
                document.querySelector("#name").value = "初期ユーザー";
            });
            \`\`\`

            ---

            #### 複数フォーム一括セット
            \`\`\`js
            const user = {
                name: "田中太郎",
                email: "taro@example.com"
            };

            document.querySelector("#name").value = user.name;
            document.querySelector("#email").value = user.email;
            \`\`\`

            ---

            #### フォーム再編集（編集モード）
            \`\`\`js
            function setForm(data) {
                document.querySelector("#name").value = data.name;
                document.querySelector("#age").value = data.age;
            }
            \`\`\`

            #### ポイント

            - \`value\` は input / textarea 専用
            - フォーム編集画面ではほぼ必須の操作
            - APIデータ反映とセットで使うことが多い
        `),
    },

    {
        process: "入力値のクリア",
        detail: dedent(`
            ユーザーが入力した内容をリセットして、初期状態に戻すために使う

            #### 使用場面
            - フォームリセットボタン（入力を最初からやり直す）
            - 送信完了後のフォーム初期化
            - 検索条件のクリア
            - フィルタ条件のリセット
            - モーダル入力フォームの初期化

            #### 基本実装
            \`\`\`html
            <input id="name" placeholder="名前を入力" />
            <button id="reset">リセット</button>
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#name");
            const reset = document.querySelector("#reset");

            reset.addEventListener("click", () => {
                input.value = "";
            });
            \`\`\`

            #### 実行結果
            \`\`\`text
            入力前: 田中太郎
            リセット後: （空欄）
            \`\`\`

            #### 送信後に自動クリア
            \`\`\`js
            form.addEventListener("submit", (e) => {
                e.preventDefault();

                console.log(input.value);

                input.value = ""; // 送信後にクリア
            });
            \`\`\`
            👉 ユーザー体験が良くなる（連続入力しやすい）

            ---

            #### 複数フォームまとめてクリア
            \`\`\`js
            const inputs = document.querySelectorAll("input");

            reset.addEventListener("click", () => {
                inputs.forEach(input => input.value = "");
            });
            \`\`\`
            👉 フォーム全体リセット

            ---

            #### form.reset()を使う方法
            \`\`\`js
            const form = document.querySelector("#form");

            form.reset();
            \`\`\`
            👉 これが一番シンプル

            ---

            #### ポイント
            - 1つだけなら \`input.value = ""\`
            - フォーム全体なら \`form.reset()\` がベスト
            - Reactでは state を空にする（setState('')）
        `),
    },

    {
        process: "送信イベントの取得",
        detail: dedent(`
            フォーム送信時に発生する「submitイベント」を使って、
            ページ遷移を防ぎながらJavaScriptで送信処理を制御する

            通常のフォーム送信はページがリロードされるが、
            \`event.preventDefault()\` を使うことでSPAのような動きにできる


            #### 使用場面
            - ログインフォーム
            - お問い合わせフォーム
            - 検索フォーム
            - 会員登録
            - API送信処理（fetch連携）

            #### 基本実装
            \`\`\`html
            <form id="form">
                <input name="email" placeholder="メールアドレス" />
                <button type="submit">送信</button>
            </form>
            \`\`\`

            \`\`\`js
            const form = document.querySelector("#form");

            form.addEventListener("submit", (e) => {
                // ページリロードを防ぐ
                e.preventDefault();

                const formData = new FormData(form);
                const email = formData.get("email");

                console.log(email);
            });
            \`\`\`

            #### ポイント
            #### ① submitイベントとは
            - form送信時に必ず発火するイベント
            - buttonクリックだけでなく Enterキーでも発火する

            #### ② preventDefaultの役割
            \`\`\`js
            e.preventDefault();
            \`\`\`

            👉 これがないと：
            - ページがリロードされる
            - JavaScript処理が途中で消える

            👉 あると：
            - SPAのようにページ遷移なしで処理できる

            #### ③ FormDataの活用
            \`\`\`js
            const formData = new FormData(form);
            const email = formData.get("email");
            \`\`\`

            👉 特徴
            - inputをまとめて取得できる
            - name属性がキーになる
            - チェックボックス・ファイルにも対応

            ---

            #### API送信
            \`\`\`js
            form.addEventListener("submit", async (e) => {
                e.preventDefault();

                const formData = new FormData(form);

                const res = await fetch("/api/login", {
                    method: "POST",
                    body: formData
                });

                const data = await res.json();
                console.log(data);
            });
            \`\`\`

            ---

            #### バリデーション付き送信
            \`\`\`js
            form.addEventListener("submit", (e) => {
                e.preventDefault();

                const email = form.querySelector("[name=email]").value;

                if (!email) {
                    alert("メールアドレスを入力してください");
                    return;
                }

                console.log("送信OK");
            });
            \`\`\`
        `),
    },

    {
        process: "入力バリデーション（必須チェック）",
        detail: dedent(`
            入力が空かどうかをチェックする<br />
            空欄のまま送信されることを防ぐために使用

            #### 使用場面
            - 会員登録フォーム（名前・メール必須）
            - ログイン画面
            - お問い合わせフォーム
            - 検索欄（空検索防止）
            - 決済・注文フォーム

            #### 基本実装
            \`\`\`html
            <input id="name" />
            <p id="error"></p>
            <button id="submit">送信</button>
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#name");
            const error = document.querySelector("#error");
            const button = document.querySelector("#submit");

            button.addEventListener("click", () => {
                if (!input.value.trim()) {
                    error.textContent = "入力してください";
                    error.style.color = "red";
                    return;
                }

                error.textContent = "";
                console.log("送信OK:", input.value);
            });
            \`\`\`

            #### trim() を使う理由
            \`\`\`js
            !input.value.trim()
            \`\`\`
            = スペースだけの入力（"   "）を防ぐため

            ---

            #### 複数項目チェック
            \`\`\`js
            if (!email.value || !password.value) {
                error.textContent = "必須項目を入力してください";
            }
            \`\`\`

            ---

            #### classでエラー表示
            \`\`\`js
            input.classList.add("error");
            \`\`\`

            \`\`\`css
            .error {
                border: 1px solid red;
            }
            \`\`\`

            ---

            #### フォーム送信制御
            \`\`\`js
            form.addEventListener("submit", (e) => {
                if (!input.value.trim()) {
                    e.preventDefault();
                }
            });
            \`\`\`
        `),
    },

    {
        process: "リアルタイム入力監視",
        detail: dedent(`
            入力フォームに文字を打ち込んだ瞬間ごとに値を取得し、
            画面にリアルタイムで反映する処理

            通常の「送信時取得」と違い、入力のたびにイベントが発火するため、
            ユーザーの操作に即時反応できるUIを作ることができる

            #### 使用場面
            - サジェスト検索（検索候補表示）
            - 文字数カウント表示
            - プレビュー表示（ブログ・コメント）
            - フィルタ検索（一覧絞り込み）
            - パスワード強度チェック
            - フォーム入力ガイド

            #### 基本実装
            \`\`\`html
            <input id="search" placeholder="検索..." />
            <p id="preview"></p>
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#search");
            const preview = document.querySelector("#preview");

            input.addEventListener("input", (e) => {
                preview.textContent = e.target.value;
            });
            \`\`\`

            #### 動作イメージ
            \`\`\`text
            入力: a → a
            入力: ap → ap
            入力: app → app
            \`\`\`
            👉 キーを押すたびに即反映される

            ---

            #### サジェスト検索
            \`\`\`js
            input.addEventListener("input", async (e) => {
                const keyword = e.target.value;

                const res = await fetch(\`/api/search?q=\\\${keyword}\`);
                const data = await res.json();

                console.log(data);
            });
            \`\`\`
            👉 Google検索・EC検索・管理画面で必須パターン

            ---

            #### 文字数カウント
            \`\`\`html
            <input id="text" />
            <p id="count"></p>
            \`\`\`

            \`\`\`js
            const input = document.querySelector("#text");
            const count = document.querySelector("#count");

            input.addEventListener("input", (e) => {
                count.textContent = e.target.value.length + "文字";
            });
            \`\`\`

            ---

            #### プレビュー表示（ブログ・投稿系）
            \`\`\`js
            input.addEventListener("input", (e) => {
                preview.innerHTML = e.target.value;
            });
            \`\`\`
            👉 Markdownエディタ・コメント欄でよく使う

            ⚠️ innerHTMLはXSS注意

            ---

            #### パスワード強度チェック
            \`\`\`js
            input.addEventListener("input", (e) => {
                const value = e.target.value;

                if (value.length < 8) {
                    console.log("弱いパスワード");
                } else {
                    console.log("安全");
                }
            });
            \`\`\`

            ---

            #### ポイント
            - inputイベントは「毎文字」発火する
            - API通信と組み合わせる場合は debounce が必須
            - UI更新が多いのでパフォーマンスに注意
            - Reactでは useState + onChange に置き換わる

        `),
    },

    {
        process: "チェックボックスの状態取得",
        detail: dedent(`
            チェックボックスのON/OFF状態を取得する

            チェックボックスは true / false の状態を持っており、
            \`checked\` プロパティでその状態を判定できる

            #### 使用場面
            - 利用規約の同意チェック
            - オプション設定（通知ON/OFFなど）
            - フィルタ条件（価格・カテゴリ選択）
            - 設定画面のトグルUI
            - フォーム送信の制御

            #### 基本の仕組み
            \`\`\`html
            <input type="checkbox" id="agree" />
            \`\`\`

            \`\`\`js
            const agree = document.querySelector("#agree");

            console.log(agree.checked);
            \`\`\`

            #### 結果

            \`\`\`text
            チェックあり → true
            チェックなし → false
            \`\`\`

            ---

            #### 同意チェックで送信制御
            \`\`\`html
            <input type="checkbox" id="agree" />
            <button id="submit">送信</button>
            \`\`\`

            \`\`\`js
            const agree = document.querySelector("#agree");
            const submit = document.querySelector("#submit");

            submit.addEventListener("click", () => {
                if (!agree.checked) {
                    alert("利用規約に同意してください");
                    return;
                }

                console.log("送信処理実行");
            });
            \`\`\`
            👉 チェックされていないと送信できない

            ---

            #### リアルタイム状態監視
            \`\`\`js
            agree.addEventListener("change", () => {
                console.log("状態:", agree.checked);
            });
            \`\`\`
            👉 ON/OFF切り替えを即時検知

            ---

            #### UI切り替え
            \`\`\`html
            <input type="checkbox" id="darkMode" />
            \`\`\`

            \`\`\`js
            const darkMode = document.querySelector("#darkMode");

            darkMode.addEventListener("change", () => {
                document.body.classList.toggle("dark", darkMode.checked);
            });
            \`\`\`
            👉 ダークモード切替などに利用

            ---

            #### ポイント

            - \`checked\` は boolean（true / false）
            - input.value ではなく checked を使う
            - changeイベントで状態変化を検知するのが基本
        `),
    },
];