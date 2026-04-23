import dedent from "dedent";

export type CommandItem = {
    command: string;
    description: string;
    detail?: string;
};

export const commandColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const commandData: CommandItem[] = [
    {
        command: "ls",
        description: "ファイル一覧表示",
        detail: dedent(`
            ### ls (list)
            現在のフォルダ内にあるファイル・フォルダを一覧表示

            \`\`\`bash
            ls [オプション]
            \`\`\`

            - プロジェクト構成確認
            - .env や .gitignore 確認
            - 作成したファイル確認

            #### オプション
            \`\`\`bash
            ls -a                隠しファイルを含むすべてのファイルを表示
            ls -la               詳細 + 隠しファイル
            ls -lh               ファイルサイズを読みやすい形式（KB, MB, GB）で表示
            ls -t                更新日時順（新しい順）に並べ替えて表示
            ls -S                ファイルサイズ順（大きい順）に並べ替えて表示
            ls -l                ファイルの詳細表示(権限ルールや所有者、編集日時が表示される)

            ls *.txt             txtファイルのみ表示
            ls -l | grep "test"  testを含むファイルを詳細表示
            \`\`\`

            #### 実行例
            \`\`\`bash
            ls -l
                total 16
                -rw-r--r--  1 sasakisan  staff  1990  4 17 11:57 cli-data.ts
                -rw-r--r--  1 sasakisan  staff   666  4 17 12:13 cli.mdx

            ls -lh
                -rw-r--r-- 1 user user 1.2K Apr 21 18:00 package.json
                drwxr-xr-x 5 user user 4.0K Apr 22 10:30 app
            \`\`\`
        `),
    },
    {
        command: "cd",
        description: "フォルダ移動",
        detail: dedent(`
            ### cd (change directory)
            フォルダを移動 (存在しないフォルダは移動できない)

            \`\`\`bash
            cd [ディレクトリー]
            \`\`\`

            #### 実行例
            \`\`\`bash
            cd ..              1つ上へ
            cd ~               ホームへ
            cd /               ルートへ
            cd -               直前の場所へ戻る
            cd /usr/include    任意のディレクトリへ移動
            \`\`\`
        `),
    },
    {
        command: "pwd",
        description: "現在の場所表示",
        detail: dedent(`
            ### pwd（Print Working Directory）
            現在地の絶対パスを表示

            \`\`\`bash
            pwd
            \`\`\`

            - 間違った場所で操作していないか
            - rm前の確認
            - Docker内の位置確認

            #### 実行例
            \`\`\`bash
            pwd
            → /Users/username/my-next-app
            \`\`\`
        `),
    },
    {
        command: "mkdir",
        description: "フォルダ作成",
        detail: dedent(`
            ### mkdir（make directory）
            新しいフォルダ（ディレクトリ）を作成

            \`\`\`bash
            mkdir [オプション] ディレクトリ名
            \`\`\`

            #### オプション
            \`\`\`bash
            mkdir -p src/components/ui   存在しない親フォルダも一緒に作成(階層をまとめて作る)
            mkdir -v new_folder          作成時にメッセージを表示
            mkdir -m 777 new_folder      権限を指定して作成
            mkdir --help   ヘルプ表示
            \`\`\`

            #### 実行例
            \`\`\`bash
            mkdir src                    srcディレクトリを作成
            mkdir dir1 dir2 dir3         スペース区切りで一度に複数作成

            mkdir -v new_folder          作成時にメッセージを表示
                mkdir: created directory 'new_folder'

            mkdir --help
                mkdir: illegal option -- -
                usage: mkdir [-pv] [-m mode] directory_name ...
            \`\`\`
        `),
    },
    {
        command: "rm",
        description: "ファイル削除",
        detail: dedent(`
            ### rm（remove）
            ファイル・フォルダを削除

            \`\`\`bash
            rm [オプション] ディレクトリ名orファイル名
            \`\`\`

            #### オプション
            \`\`\`bash
            rm file.txt.         ファイルを削除
            rm -r folder         ディレクトリと中身を全て削除
            rm -rf node_modules  ディレクトリと中身を強制削除（再帰的）
            rm -f file.txt       file.txtを強制的に削除(確認なし)
            rm -i file.txt.      削除前に確認
            \`\`\`

            #### 実行例
            \`\`\`bash
            rm -i css.php
                remove css.php? (y/nを選択)
            \`\`\`
            ⚠️ゴミ箱には入らない → 基本的にコマンドラインからの削除は即座に行われ、復元できない
        `),
    },
    {
        command: "cp",
        description: "ファイルコピー",
        detail: dedent(`
            ### cp（copy）
            ファイルやディレクトリをコピーする

            \`\`\`bash
            cp [オプション] コピー元 コピー先
            \`\`\`

            - バックアップ
            - テンプレート複製
            - フォルダ丸ごと保存

            #### オプション
            \`\`\`bash
            cp -r src backup               srcの内容をbackupに再帰的にコピー
            cp -i file1.txt file2.txt      上書きする前に確認メッセージを表示
            cp -v file.txt backup.txt      コピー時の実行内容(何がどこへコピーされたか)を表示
            cp -f new.txt old.txt          既に同じ名前のファイルがある場合でも確認なしで強制的に上書きコピー
            cp -rp source_dir dest_dir     元ファイルの属性（所有者、タイムスタンプなど）を保持しつつ、フォルダごとバックアップ
            \`\`\`

            #### 実行例
            \`\`\`bash
            cp config.sample .env.local    sampleをlocalとしてコピー
            cp file1.txt /path/to/dir/     file1をdir内にコピー

            cp -i file1.txt file2.txt
                cp: overwrite file2.txt? →y/nを選択

            cp -v file.txt backup.txt
                file.txt -> backup.txt
            \`\`\`
        `),
    },
    {
        command: "touch",
        description: "空ファイル作成",
        detail: dedent(`
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
        `),
    },
    {
        command: "mv",
        description: "移動 / 名前変更",
        detail: dedent(`
            ### mv（move）
            ファイルやディレクトリの移動と名前の変更(リネーム)

            \`\`\`bash
            mv [オプション] 移動元 移動先
            \`\`\`

            - 空ファイル作成
            - .env や index.js など初期ファイル作成
            - 更新日時変更
            - ビルドトリガー用のタイムスタンプ更新

            #### オプション
            \`\`\`bash
            mv -i main.js src/                移動前に確認メッセージを表示
            mv -f main.js src/                確認なしで強制的に上書き
            mv -n main.js src/                同名ファイルがあれば移動しない
            mv -v app.js src/                 移動の詳細を表示
            \`\`\`

            #### 実行例
            \`\`\`bash
            mv old.txt new.txt                ファイル名をnew.txtに修正
            mv file.txt /path/to/dir/         file.txt を指定ディレクトリへ移動
            mv f1.txt f2.txt dir/             複数のファイルを指定ディレクトリへまとめて移動
            mv images public/                 images フォルダを public 配下へ移動
            mv logo.png public/site-logo.png  public に移動しつつ site-logo.png に変更

            mv -i main.js src/
                overwrite 'src/main.js'?

            mv -v app.js src/
                app.js -> src/app.js
            \`\`\`


            ⚠️ ファイル名の先頭を小文字 → 大文字へ変更する場合
            \`\`\`bash
            例 : mv new.txt New.txt
            \`\`\`
            → Mac / Windows は大小文字を区別しないため 同じ名前 として扱ってしまう
            - Finderでは変わったがGitが反応しない
            - 大文字変更だけ認識しない

            \`\`\`bash
            mv old.txt temp.txt
            mv temp.txt Old.txt

            一度別名にしてから変更する
            \`\`\`
        `),
    },
    {
        command: "open",
        description: "ファイル/フォルダを開く（Mac）",
        detail: dedent(`
            ### open（Mac専用）
            ターミナルからファイル、フォルダ、URL、アプリケーションを関連付けられたデフォルトアプリで開く

            \`\`\`bash
            open [オプション] ファイル名 or URL
            \`\`\`

            - 空ファイル作成
            - .env や index.js など初期ファイル作成
            - 更新日時変更
            - ビルドトリガー用のタイムスタンプ更新

            #### オプションと実行例
            \`\`\`bash
            open <ファイル名>                ファイル/フォルダを開く
            open .                         現在のフォルダをFinderで開く
            open -a "Safari" <ファイル名>    アプリを指定して開く
            open http://example.com        URLを開く
            open -R <ファイル名>             Finderで場所を表示
            \`\`\`
        `),
    },
    {
        command: "exit",
        description: "ターミナル終了",
        detail: dedent(`
            ### exit（終了）
            現在開いているシェル（ターミナルセッション）を終了する<br />
            ターミナルそのものを閉じたり、SSH接続・Dockerコンテナ・Node実行環境などから抜ける時に使う

            \`\`\`bash
            exit
            \`\`\`

            - サーバー停止
            - コマンド中断
            - 実行中プロセス終了

            #### 実行例
            \`\`\`bash
            Dockerコンテナに入る
                docker exec -it animora-app sh
                    /app #
                    exit (コンテナ内シェルが終了し、ホストに戻る)
                    user@host:~$

            SSH接続
                ssh user@server
                exit (接続終了（ローカルに戻る）)
            \`\`\`

            ⚠️Ctrl + C = 実行中の処理を止める
            \`\`\`bash
            npm run dev
            ↓
            Ctrl + C (今動いている処理を止める)
            \`\`\`
        `),
    },
];