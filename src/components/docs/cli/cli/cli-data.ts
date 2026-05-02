import type { DetailKey } from "./cli-details/detail-map";

export type CommandItem = {
    command: string;
    description: string;
    detailKey?: DetailKey;
};

export const commandColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const commandData: CommandItem[] = [
    {
        command: "ls",
        description: "ファイル一覧表示",
        detailKey: "cliList",
    },
    {
        command: "cd",
        description: "フォルダ移動",
        detailKey: "cliChangeDirectory",
    },
    {
        command: "pwd",
        description: "現在の場所表示",
        detailKey: "cliPrintWorkingDirectory",
    },
    {
        command: "mkdir",
        description: "フォルダ作成",
        detailKey: "cliMakeDirectory",
    },
    {
        command: "rm",
        description: "ファイル削除",
        detailKey: "cliRemove",
    },
    {
        command: "cp",
        description: "ファイルコピー",
        detailKey: "cliCopy",
    },
    {
        command: "touch",
        description: "空ファイル作成",
        detailKey: "cliTouch",
    },
    {
        command: "mv",
        description: "移動 / 名前変更",
        detailKey: "cliMove",
    },
    {
        command: "open",
        description: "ファイル/フォルダを開く（Mac）",
        detailKey: "cliOpen",
    },
    {
        command: "exit",
        description: "ターミナル終了",
        detailKey: "cliExit",
    },
];