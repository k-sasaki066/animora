import dedent from "dedent";

export type AnimationItem = {
    property: string;
    description: string;
    detail?: string;
};

export const animationColumns = [
    { key: "property", label: "プロパティ", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const animationData: AnimationItem[] = [
    {
        property: "animation-name",
        description:
            "使用する @keyframes 名を指定する",
        detail: dedent(`
            どのアニメーションを使うか指定する名前<br />
            @keyframesで作成した動きの設計図を呼び出す

            \`\`\`css
            例 :
            animation-name: animation; // "animation"という名前のアニメーションを定義

            @keyframes animation // ここに定義名を記述 {
                0%{
                    // アニメーションを開始するときのCSSを記述
                }
                100%{
                    // アニメーションを終了するときのCSSを記述
                }
            }
            \`\`\`

            ⚠️ 名前が一致しないと実行されない<br />
            大文字小文字も区別される
        `),
    },
    {
        property: "animation-duration",
        description:
            "アニメーション時間を指定する",
        detail: dedent(`
            アニメーションが 何秒かけて再生されるか を指定<br />
            時間が短いほど速く、長いほどゆっくり動く

            #### 基本構文
            \`\`\`css
            animation-duration: 時間;
            \`\`\`

            #### 使用できる単位
            \`\`\`css
            animation-duration: 500ms;
            animation-duration: 2s;
            \`\`\`

            - ms = ミリ秒（1000ms = 1秒）
            - s = 秒

            #### 速度の目安
            - 0.2s ～ 0.4s → 素早いUI操作向け
            - 0.5s ～ 0.8s → 自然で見やすい
            - 1s以上 → 演出向け
            - 2s以上 → ゆっくり強調演出

            ---

            1秒かけて再生される
            \`\`\`css
            animation-duration: 1s;
            \`\`\`

            ---

            #### ⚠️ 注意点
            - 長すぎると操作が遅く感じる
            - 短すぎると変化に気づきにくい
            - UI操作なら 0.3s 前後 がよく使われる

            \`\`\`css
            animation-duration: 0s;
            \`\`\`
            にするとアニメーションせず即時反映される

        `),
    },
    {
        property: "animation-delay",
        description:
            "開始まで待機時間を指定する",
        detail: dedent(`
            要素が表示されてから、すぐに動かさず<br />
            **指定した時間だけ待ってから開始** できる

            #### 基本構文
            \`\`\`css
            animation-delay: 時間;
            \`\`\`

            #### 指定できる単位
            \`\`\`css
            animation-delay: 1s;      /* 1秒 */
            animation-delay: 300ms;   /* 0.3秒 */
            \`\`\`

            ---

            0.5秒後にアニメーション開始
            \`\`\`css
            animation-delay: 0.5s;
            \`\`\`

            ---

            負の値も使える
            \`\`\`css
            animation-delay: -1s;
            \`\`\`
            アニメーション開始時点で<br />
            **1秒進んだ状態から再生** される

            ローディング無限ループなどで使う

            ---

            #### ⚠️ 注意点
            delay中は通常状態のまま表示されるため、<br />
            初期状態を指定しないと不自然になることがある
            \`\`\`css
            opacity: 0;
            animation-fill-mode: forwards;
            \`\`\`

            と組み合わせるのがおすすめ
        `),
    },
    {
        property: "animation-timing-function",
        description:
            "動き方（速度変化）を指定する",
        detail: dedent(`
            アニメーションの**進み方・スピードの変化**を設定<br />
            同じ1秒のアニメーションでも、動き方の印象が大きく変わる

            #### 基本構文
            \`\`\`css
            animation-timing-function: 指定値;
            \`\`\`

            #### 指定できる主な値
            \`\`\`txt
            linear                         最初から最後まで一定速度
            ease                           開始ゆっくり → 中間速い → 終了ゆっくり（初期値）
            ease-in                        最初ゆっくり → 後半速い
            ease-out                       最初速い → 最後ゆっくり止まる
            ease-in-out                    開始と終了がゆっくり、中間が速い
            step-start                     開始と同時に一瞬で切り替わる
            step-end                       最後に一瞬で切り替わる
            steps(4)                       4段階でカクカク進む
            steps(10, start)               開始時点から10段階で切り替える
            steps(10, end)                 終了側で10段階切り替え
            cubic-bezier(x1, y1, x2, y2)   独自の速度カーブを作成できる
            \`\`\`

            ---

            #### よく使う値
            1. linear
                - ローディング回転
                - 無限スクロール
                - 背景ループ
            2. ease
                - フェード表示
                - カード出現
                - 一般UI全般
            3. ease-in
                - 発射
                - 飛び出し
                - 開始アニメーション
            4. ease-out
                - 往復運動
                - UI切替
                - スムーズ移動

            ---

            #### 使用例① ローディング
            \`\`\`css
            .loader {
                animation: spin 1s linear infinite;
            }
            \`\`\`

            ---

            #### 使用例② モーダル
            \`\`\`css
            .modal {
                animation: fadeUp .3s ease-out;
            }
            \`\`\`

            ---

            #### 使用例③ ドットアニメーション
            \`\`\`css
            .dots {
                animation: blink 1s steps(3) infinite;
            }
            \`\`\`
        `),
    },
    {
        property: "animation-iteration-count",
        description:
            "繰り返し回数を指定する",
        detail: dedent(`
            1回だけ再生・3回再生・無限ループなどを指定できる

            #### 基本構文
            \`\`\`css
            animation-iteration-count: 数字;
            animation-iteration-count: infinite;
            \`\`\`

            ---

            #### 使用例① ローディング回転
            \`\`\`css
            .loader {
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
            }
            \`\`\`
            常に回転し続ける

            使用場面
            - ローディングUI
            - 通信中表示
            - スピナー

            ---

            #### 使用例② ボタンを3回だけ点滅
            \`\`\`css
            .notice {
                animation: blink 0.5s 3;
            }

            @keyframes blink {
                50% { opacity: 0; }
            }
            \`\`\`
            3回点滅して停止

            使用場面
            - エラー通知
            - 注目させたい要素
            - 初回チュートリアル

            ---

            #### 使用例③ 1回だけフェードイン
            \`\`\`css
            .card {
                animation: fadeIn 0.6s ease 1;
            }
            \`\`\`

            カード表示時に1回だけ再生

            使用場面
            - モーダル表示
            - 一覧カード表示
            - ページ初期表示

            ---

            よく使う考え方
            \`\`\`text
            infinite = 継続動作
            1        = 一度だけ自然に演出
            2〜3     = 注意喚起・強調
            \`\`\`

        `),
    },
    {
        property: "animation-direction",
        description:
            "再生方向を指定する",
        detail: dedent(`
            アニメーションを **どの向きで再生するか** を決める
            \`\`\`css
            animation-direction: alternate;
            \`\`\`

            #### 基本構文
            \`\`\`css
            animation-direction: 値;
            \`\`\`

            #### 指定できる値と意味
            \`\`\`txt
            normal              通常方向で再生する（初期値）
            reverse             逆方向で再生する
            alternate           通常方向 → 逆方向 を交互に繰り返す
            alternate-reverse   逆方向 → 通常方向 を交互に繰り返す
            \`\`\`

            ---

            #### 使用例
            \`\`\`css
            .box {
                animation: move 2s infinite;
                animation-direction: alternate;
            }

            @keyframes move {
                from {
                    transform: translateX(0);
                }

                to {
                    transform: translateX(200px);
                }
            }
            \`\`\`

            結果
            \`\`\`text
            左 → 右 → 左 → 右 ...
            \`\`\`
        `),
    },
    {
        property: "animation-fill-mode",
        description:
            "開始前・終了後の状態を指定する",
        detail: dedent(`
            アニメーションが始まる前や終わった後に、
            **keyframes のスタイルを保持するかどうか** を決める

            #### 基本構文
            \`\`\`css
            animation-fill-mode: 指定値;
            \`\`\`

            #### 指定できる値
            \`\`\`txt
            none         アニメーション前後で状態を保持しない(初期値)
            forwards     終了時の状態を維持
            backwards    開始時の状態に戻る
            both         開始時に"forwards"、終了時に"backwards"を適用
            \`\`\`

            ---

            #### 使用例 (forwards)
            \`\`\`css
            .box {
                animation: fadeIn 1s forwards;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            \`\`\`

            結果
            \`\`\`txt
            終了後も opacity:1 のまま残る
            \`\`\`

            使用場面
            - モーダル表示後そのまま表示維持
            - スライドイン後停止
            - 初回ロード演出

            ---

            #### 使用例 (backwards)
            \`\`\`css
            .box {
                animation: fadeIn 1s 1s backwards;
            }
            \`\`\`
            1秒 delay 中でも from の状態が適用される

            使用場面
            - 遅延表示中に透明状態維持
            - 順番表示アニメーション
        `),
    },
    {
        property: "animation-play-state",
        description:
            "再生 / 一時停止を指定する",
        detail: dedent(`

            #### 基本構文
            \`\`\`css
            animation-play-state: 指定値;
            \`\`\`

            #### 指定できる値
            \`\`\`txt
            running   再生中（初期値）
            paused    一時停止
            \`\`\`

            ---

            #### 基本例
            \`\`\`html
            <div class="loader"></div>
            \`\`\`

            \`\`\`css
            .loader {
                width: 40px;
                height: 40px;
                border: 4px solid #ccc;
                border-top: 4px solid blue;
                border-radius: 50%;

                animation: spin 1s linear infinite;
            }

            .stop {
                animation-play-state: paused;
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
            \`\`\`

            JavaScriptで制御
            \`\`\`js
            const loader = document.querySelector(".loader");

            loader.style.animationPlayState = "paused";
            \`\`\`

            再開
            \`\`\`js
            loader.style.animationPlayState = "running";
            \`\`\`

            #### 使用場面
            - 動画停止中にアニメーション停止
            - ホバー中だけ止める
            - タブ非表示時に停止
            - スライダー自動再生停止
            - ローディング停止

            ---

            #### hoverで停止
            \`\`\`css
            .banner {
                animation: slide 10s linear infinite;
            }

            .banner:hover {
                animation-play-state: paused;
            }
            \`\`\`
            マウスを乗せると止まる

            ---

            **⚠️ 注意点**
            \`paused\` は **停止ではなく一時停止**<br />
            再開すると止まった位置から続く

            先頭に戻したい場合は animation を再設定
        `),
    },
    {
        property: "animation",
        description:
            "複数プロパティを一括指定する省略形",
        detail: dedent(`
            \`animation\` は、以下の複数プロパティをまとめて書ける
            - animation-name
            - animation-duration
            - animation-timing-function
            - animation-delay
            - animation-iteration-count
            - animation-direction
            - animation-fill-mode
            - animation-play-state

            #### 基本形
            \`\`\`css
            animation: 名前 時間 easing 遅延 回数 方向 fill-mode;
            \`\`\`

            例
            \`\`\`css
            animation: fadeIn 1s ease 0s 1 normal forwards;

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }

                to {
                    opacity: 1;
                }
            }
            \`\`\`

            意味
            \`\`\`txt
            fadeIn     → 使用する @keyframes 名
            1s         → 1秒かけて再生
            ease       → ゆっくり始まり自然に終わる
            0s         → 遅延なしで開始
            1          → 1回だけ実行
            normal     → 通常方向
            forwards   → 終了後も最後の状態を維持
            \`\`\`

            ---

            #### 使用例① フェードイン
            \`\`\`css
            animation: fadeIn 0.5s ease forwards;
            \`\`\`
            モーダル表示・カード出現・ページ読み込み時によく使います。

            ---

            #### 使用例② ローディング回転
            \`\`\`css
            animation: spin 1s linear infinite;
            \`\`\`

            意味
            \`\`\`text
            spin      → 回転アニメーション
            1s        → 1秒で1周
            linear    → 一定速度
            infinite  → 無限ループ
            \`\`\`

            ---

            #### 使用例③ 左右に揺れる
            \`\`\`css
            animation: shake 0.4s ease;
            \`\`\`
            入力エラー・通知強調などで使われる

            ---

            #### よく使う省略パターン
            \`\`\`css
            animation: fadeIn 1s;
            animation: fadeIn 1s ease;
            animation: fadeIn 1s ease forwards;
            animation: spin 1s linear infinite;
            \`\`\`
            \`必要なものだけ書いてOK\`

            ---

            **⚠️ 注意点**
            - 時間は \`1s\` \`500ms\` で指定
            - \`infinite\` は無限ループ
            - \`forwards\` を付けないと終了後に元へ戻る場合あり
            - 名前は必ず \`@keyframes\` と一致させる
        `),
    },
];