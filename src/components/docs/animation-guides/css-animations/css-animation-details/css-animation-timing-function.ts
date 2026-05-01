import dedent from "dedent";

export const detail = dedent(`
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
`);