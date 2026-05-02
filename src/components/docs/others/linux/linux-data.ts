import type { DetailKey } from "./linux-details/detail-map";
import dedent from "dedent";

export type CommandItem = {
    command: string;
    description: string;
    detailKey?: DetailKey;
};

export const linuxColumns = [
    { key: "command", label: "ファイル名", className: "font-mono" },
    { key: "description", label: "保存される情報 / 用途" },
];

export const linuxData: CommandItem[] = [
    {
        command: "/bin",
        description: "基本コマンド実行ファイル",
        detailKey: "linuxBin",
    },
    {
        command: "/boot",
        description: "OS起動用ファイル",
        detailKey: "linuxBoot",
    },
    {
        command: "/dev",
        description: "デバイスファイル(仮想デバイス情報)",
        detailKey: "linuxDev",
    },
    {
        command: "/etc",
        description: "各種サービス設定ファイル",
        detailKey: "linuxEtc",
    },
    {
        command: "/home",
        description: "一般ユーザーのホームディレクトリ",
        detailKey: "linuxHome",
    },
    {
        command: "/root",
        description: "rootユーザー専用ホームディレクトリ",
        detailKey: "linuxRoot",
    },
    {
        command: "/lib /lib64",
        description: "共有ライブラリ",
        detailKey: "linuxLib",
    },
    {
        command: "/media",
        description: "外部メディア自動マウント先",
        detailKey: "linuxMedia",
    },
    {
        command: "/mnt",
        description: "一時的な手動マウント先",
        detailKey: "linuxMnt",
    },
    {
        command: "/opt",
        description: "追加アプリ置き場",
        detailKey: "linuxOpt",
    },
    {
        command: "/proc",
        description: "システム情報（仮想ファイル）",
        detailKey: "linuxProc",
    },
    {
        command: "/run",
        description: "起動中プロセスの一時情報",
        detailKey: "linuxRun",
    },
    {
        command: "/srv",
        description: "サービス提供データ",
        detailKey: "linuxSrv",
    },
    {
        command: "/sys",
        description: "Linuxカーネル・デバイス制御情報",
        detailKey: "linuxSys",
    },
    {
        command: "/tmp",
        description: "一時ファイル保存先",
        detailKey: "linuxTmp",
    },
    {
        command: "/usr",
        description: "ユーザー向けアプリ本体",
        detailKey: "linuxUsr",
    },
    {
        command: "/var",
        description: "運用中に内容が変わるファイル",
        detailKey: "linuxVar",
    },
    {
        command: "/app",
        description: "開発プロジェクト配置場所（Docker volume mount先）",
        detailKey: "linuxApp",
    },
];

export const linuxReactData: CommandItem[] = [
    {
        command: "/app",
        description: "Reactプロジェクト本体（src, public, package.json など）",
        detailKey: "linuxReactApp",
    },
    {
        command: "/usr/bin/node",
        description: "Node.js実行ファイル",
        detailKey: "linuxReactUsrBinNode",
    },
    {
        command: "/tmp",
        description: "ビルド一時ファイル・キャッシュ・テンポラリ",
    },
    {
        command: "/proc",
        description: "NodeプロセスのCPU・メモリ・PID確認用仮想ファイル",
    },
    {
        command: "/etc",
        description: "Linux / Node / コンテナ環境設定ファイル",
    },
];

export const linuxLaravelData: CommandItem[] = [
    {
        command: "/etc",
        description: "PHP / Apache / Nginx / Linux 設定ファイル",
        detailKey: "linuxLaravelEtc",
    },
    {
        command: "/var",
        description: "プロジェクト本体（volume bind先）",
        detailKey: "linuxLaravelVar",
    },
    {
        command: "/tmp",
        description: "一時ファイル・セッション一時保存・テンポラリ",
    },
    {
        command: "/usr",
        description: "php, composer, nginx, mysql-client など実行プログラム",
        detailKey: "linuxLaravelUsr",
    },
];

export const linuxNginxData: CommandItem[] = [
    {
        command: "/etc",
        description: "各種設定ファイルを保存",
        detailKey: "linuxNginxEtc",
    },
    {
        command: "/usr",
        description: "nginx実行ファイル・関連コマンド・静的HTML初期ファイル",
        detailKey: "linuxNginxUsr",
    },
    {
        command: "/var",
        description: "運用中に内容が変わるファイル",
        detailKey: "linuxNginxVar",
    },
    {
        command: "/run/nginx.pid",
        description: "起動中NginxプロセスID",
    },
    {
        command: "/tmp",
        description: "一時アップロードファイル・テンポラリデータ",
    },
    {
        command: "/proc",
        description: "CPU・メモリ・PIDなど実行中Nginx状態確認用仮想ファイル",
    },
    {
        command: "/sys",
        description: "Linuxカーネル・ネットワーク・cgroup制御情報",
    },
];

export const linuxMysqlData: CommandItem[] = [
    {
        command: "/var",
        description: "運用中に内容が変わるファイル",
        detailKey: "linuxMysqlVar",
    },
    {
        command: "/etc",
        description: "MySQLサーバーの動作設定を管理",
        detailKey: "linuxMysqlEtc",
    },
    {
        command: "/usr",
        description: "MySQLの実行ファイル・CLIツール・ライブラリ置き場",
        detailKey: "linuxMysqlUsr",
    },
    {
        command: "/tmp",
        description: "一時テーブル・ソート・テンポラリファイル",
    },
    {
        command: "/docker-entrypoint-initdb.d",
        description: "初回起動時に実行されるSQL / shell初期化スクリプト置き場",
    },
    {
        command: "/proc",
        description: "CPU・メモリ・PIDなどMySQL稼働状態確認用仮想ファイル",
    },
    {
        command: "/sys",
        description: "Linuxカーネル・I/O・cgroup制御情報",
    },
];