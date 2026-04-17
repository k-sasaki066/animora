export type CommandItem = {
    command: string;
    description: string;
    options: string;
    example: string;
};

export const commandColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
    { key: "options", label: "主なオプション" },
    { key: "example", label: "使用例", className: "font-mono" },
];

export const commandData: CommandItem[] = [
    {
        command: "ls",
        description: "ファイル一覧表示",
        options: "-l（詳細表示）\n-a（隠しファイル表示）",
        example: "ls -la",
    },
    {
        command: "cd",
        description: "フォルダ移動",
        options: "..（1つ上へ）\n /path（指定移動）",
        example: "cd src/components",
    },
    {
        command: "pwd",
        description: "現在の場所表示",
        options: "なし",
        example: "pwd",
    },
    {
        command: "mkdir",
        description: "フォルダ作成",
        options: "-p（階層まとめて作成）",
        example: "mkdir -p src/components/ui",
    },
    {
        command: "rm",
        description: "ファイル削除",
        options: "-r（フォルダ削除）\n -f（強制削除）",
        example: "rm -rf node_modules",
    },
    {
        command: "cp",
        description: "ファイルコピー",
        options: "-r（フォルダごとコピー）",
        example: "cp -r src backup",
    },
    {
        command: "touch",
        description: "空ファイル作成",
        options: "複数ファイル同時作成可",
        example: "touch index.html style.css",
    },
    {
        command: "open",
        description: "ファイル/フォルダを開く（Mac）",
        options: "-R（Finderで表示）",
        example: "open .",
    },
    {
        command: "exit",
        description: "ターミナル終了",
        options: "なし",
        example: "exit",
    },
];