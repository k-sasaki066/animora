import type { DetailKey } from "./docker-compose-details/detail-map";

export type CommandItem = {
    command: string;
    description: string;
    detailKey?: DetailKey;
};

export const dockerComposeColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const dockerComposeData: CommandItem[] = [
    {
        command: "docker compose up",
        description: "compose.yml からコンテナ作成・起動",
        detailKey: "dockerComposeUp",
    },
    {
        command: "docker compose down",
        description: "compose環境停止・削除",
        detailKey: "dockerComposeDown",
    },
    {
        command: "docker compose ps",
        description: "compose管理コンテナ一覧表示",
        detailKey: "dockerComposeProcessStatus",
    },
    {
        command: "docker compose logs",
        description: "全サービスのログ表示",
        detailKey: "dockerComposeLogs",
    },
    {
        command: "docker compose exec",
        description: "起動中コンテナ内でコマンド実行",
        detailKey: "dockerComposeExecute",
    },
    {
        command: "docker compose run",
        description: "一時コンテナ起動してコマンド実行",
        detailKey: "dockerComposeRun",
    },
    {
        command: "docker compose start",
        description: "停止中サービス起動",
        detailKey: "dockerComposeStart",
    },
    {
        command: "docker compose stop",
        description: "サービス停止",
        detailKey: "dockerComposeStop",
    },
    {
        command: "docker compose restart",
        description: "サービス再起動",
        detailKey: "dockerComposeRestart",
    },
    {
        command: "docker compose build",
        description: "Dockerfile から image 作成",
        detailKey: "dockerComposeBuild",
    },
    {
        command: "docker compose pull",
        description: "image 最新取得",
        detailKey: "dockerComposePull",
    },
    {
        command: "docker compose config",
        description: "compose設定確認（展開済み表示）",
        detailKey: "dockerComposeConfig",
    },
    {
        command: "docker compose top",
        description: "コンテナ内プロセス表示",
        detailKey: "dockerComposeTop",
    },
    {
        command: "docker compose rm",
        description: "停止中サービス削除",
        detailKey: "dockerComposeRemove",
    },
    {
        command: "docker compose version",
        description: "Docker Compose バージョン情報を表示",
        detailKey: "dockerComposeVersion",
    },
];