import dedent from "dedent";

export const detail = dedent(`
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
`);