import dedent from "dedent";

export const detail = dedent(`
    ### touch（touch = 触れる）
    空ファイル作成や日時（タイムスタンプ）変更に使用

    \`\`\`bash
    touch [オプション] ファイル名
    \`\`\`

    - 空ファイル作成
    - .env や index.js など初期ファイル作成
    - 更新日時変更
    - ビルドトリガー用のタイムスタンプ更新

    #### オプション
    \`\`\`bash
    touch -c sample.txt                        存在する場合 → 更新日時変更、存在しない場合 → 何もしない --no-create
    touch -a sample.txt                        アクセス日時（atime）のみ変更 ※ ファイルを開いた日時
    touch -m sample.txt                        最終更新日時（mtime）のみ変更 ※ ファイル内容が更新された日時
    touch -r base.txt copy.txt                 指定ファイルと同じ日時にする(base.txt の日時を取得しcopy.txt に適用) --reference
    touch -t 202604171530 sample.txt           日時を数値で直接指定(2026年04月17日15時30分)
    touch -t 202604171530.45 sample.txt        秒まで指定
    touch -d "2026-04-17 15:30:00" sample.txt  日時を文字列で指定 --date
    \`\`\`

    #### 実行例
    \`\`\`bash
    touch README.md                            README.mdファイルを新規作成
    touch page.tsx layout.tsx                  スペース区切りで一度に複数作成

    touch -c sample.txt
        -rw-r--r--  1 user  staff  0 Apr 22 20:05 test.txt
        (存在する場合中身は変わらず、タイムスタンプだけ更新)
    \`\`\`
`);