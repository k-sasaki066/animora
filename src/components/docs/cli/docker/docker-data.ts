import type { DetailKey } from "./docker-details/detail-map";

export type CommandItem = {
    command: string;
    description: string;
    detailKey?: DetailKey;
};

export const dockerCommandColumns = [
    { key: "command", label: "コマンド", className: "font-mono" },
    { key: "description", label: "説明" },
];

export const dockerCommandData: CommandItem[] = [
    {
        command: "docker ps",
        description: "起動中コンテナ一覧表示",
        detailKey: "dockerProcessStatus",
    },
    {
        command: "docker search",
        description: "Docker Hub 上のイメージを検索",
        detailKey: "dockerSearch",
    },
    {
        command: "docker images",
        description: "イメージ一覧表示",
        detailKey: "dockerImages",
    },
    {
        command: "docker exec",
        description: "起動中コンテナ内でコマンド実行",
        detailKey: "dockerExec",
    },
    {
        command: "docker logs",
        description: "コンテナログ表示",
        detailKey: "dockerLogs",
    },
    {
        command: "docker stop",
        description: "コンテナ停止",
        detailKey: "dockerStop",
    },
    {
        command: "docker start",
        description: "停止中コンテナ起動",
        detailKey: "dockerStart",
    },
    {
        command: "docker run",
        description: "新しいコンテナ作成して起動",
        detailKey: "dockerRun",
    },
    {
        command: "docker restart",
        description: "コンテナ再起動",
        detailKey: "dockerRestart",
    },
    {
        command: "docker rm",
        description: "コンテナ削除",
        detailKey: "dockerRemove",
    },
    {
        command: "docker rmi",
        description: "イメージ削除",
        detailKey: "dockerRemoveImage",
    },
    {
        command: "docker system df",
        description: "Docker使用容量確認",
        detailKey: "dockerSystemDiskFree",
    },
    {
        command: "docker system prune",
        description: "不要データ削除",
        detailKey: "dockerSystemPrune",
    },
    {
        command: "docker volume ls",
        description: "Volume一覧表示",
        detailKey: "dockerVolumeList",
    },
    {
        command: "docker network ls",
        description: "Network一覧表示",
        detailKey: "dockerNetworkList",
    },
    {
        command: "docker stats",
        description: "Dockerコンテナのリアルタイム監視",
        detailKey: "dockerStats",
    },
];