export const detailMap = {
    dockerProcessStatus: () => import("./docker-ps"),
    dockerSearch: () => import("./docker-search"),
    dockerImages: () => import("./docker-images"),
    dockerExec: () => import("./docker-exec"),
    dockerLogs: () => import("./docker-logs"),
    dockerStop: () => import("./docker-stop"),
    dockerStart: () => import("./docker-start"),
    dockerRun: () => import("./docker-run"),
    dockerRestart: () => import("./docker-restart"),
    dockerRemove: () => import("./docker-rm"),
    dockerRemoveImage: () => import("./docker-rmi"),
    dockerSystemDiskFree: () => import("./docker-system-df"),
    dockerSystemPrune: () => import("./docker-system-prune"),
    dockerVolumeList: () => import("./docker-volume-ls"),
    dockerNetworkList: () => import("./docker-network-ls"),
    dockerStats: () => import("./docker-stats"),
} as const;

export type DetailKey = keyof typeof detailMap;