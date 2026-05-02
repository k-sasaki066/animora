import type { DetailKey } from "./git-details/detail-map";

export type CommandItem = {
    command: string;
    description: string;
    detailKey?: DetailKey;
};

export const gitCommandColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const gitCommandData: CommandItem[] = [
    {
        command: "git status",
        description: "現在のGit管理状態を確認",
        detailKey: "gitStatus",
    },
    {
        command: "git add",
        description: "変更ファイルをステージング",
        detailKey: "gitAdd",
    },
    {
        command: "git commit",
        description: "コミット作成",
        detailKey: "gitCommit",
    },
    {
        command: "git push",
        description: "リモートへコミット履歴を送信",
        detailKey: "gitPush",
    },
    {
        command: "git pull",
        description: "取得＋マージ",
        detailKey: "gitPull",
    },
    {
        command: "git fetch",
        description: "最新履歴取得のみ",
        detailKey: "gitFetch",
    },
    {
        command: "git clone URL",
        description: "リポジトリ複製",
        detailKey: "gitClone",
    },
    {
        command: "git branch",
        description: "ローカルブランチ一覧",
        detailKey: "gitBranch",
    },
    {
        command: "git checkout",
        description: "ブランチ切替",
        detailKey: "gitCheckout",
    },
    {
        command: "git switch",
        description: "ブランチ切替（新構文）",
        detailKey: "gitSwitch",
    },
    {
        command: "git merge",
        description: "現在ブランチへ統合",
        detailKey: "gitMerge",
    },
    {
        command: "git rebase",
        description: "履歴を付け替えて統合",
        detailKey: "gitRebase",
    },
    {
        command: "git log",
        description: "コミット履歴表示",
        detailKey: "gitLog",
    },
    {
        command: "git diff",
        description: "未ステージ変更確認",
        detailKey: "gitDiff",
    },
    {
        command: "git stash",
        description: "変更を一時退避",
        detailKey: "gitStash",
    },
    {
        command: "git reset",
        description: "コミット取消",
        detailKey: "gitReset",
    },
    {
        command: "git rm",
        description: "Git管理下から削除",
        detailKey: "gitRemove",
    },
    {
        command: "git mv",
        description: "ファイル名変更・移動",
        detailKey: "gitMove",
    },
    {
        command: "git remote",
        description: "接続先情報確認",
        detailKey: "gitRemote",
    },
];