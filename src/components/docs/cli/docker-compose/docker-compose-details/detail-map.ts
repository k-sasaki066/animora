export const detailMap = {
    dockerComposeUp: () => import("./docker-compose-up"),
    dockerComposeDown: () => import("./docker-compose-down"),
    dockerComposeProcessStatus: () => import("./docker-compose-ps"),
    dockerComposeLogs: () => import("./docker-compose-logs"),
    dockerComposeExecute: () => import("./docker-compose-exec"),
    dockerComposeRun: () => import("./docker-compose-run"),
    dockerComposeStart: () => import("./docker-compose-start"),
    dockerComposeStop: () => import("./docker-compose-stop"),
    dockerComposeRestart: () => import("./docker-compose-restart"),
    dockerComposeBuild: () => import("./docker-compose-build"),
    dockerComposePull: () => import("./docker-compose-pull"),
    dockerComposeConfig: () => import("./docker-compose-config"),
    dockerComposeTop: () => import("./docker-compose-top"),
    dockerComposeRemove: () => import("./docker-compose-rm"),
    dockerComposeVersion: () => import("./docker-compose-version"),
} as const;

export type DetailKey = keyof typeof detailMap;