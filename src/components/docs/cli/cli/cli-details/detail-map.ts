export const detailMap = {
    cliList: () => import("./cli-li"),
    cliChangeDirectory: () => import("./cli-cd"),
    cliPrintWorkingDirectory: () => import("./cli-pwd"),
    cliMakeDirectory: () => import("./cli-mkdir"),
    cliRemove: () => import("./cli-rm"),
    cliCopy: () => import("./cli-cp"),
    cliTouch: () => import("./cli-touch"),
    cliMove: () => import("./cli-mv"),
    cliOpen: () => import("./cli-open"),
    cliExit: () => import("./cli-exit"),
} as const;

export type DetailKey = keyof typeof detailMap;