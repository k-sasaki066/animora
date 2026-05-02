export const detailMap = {
    gitStatus: () => import("./git-status"),
    gitAdd: () => import("./git-add"),
    gitCommit: () => import("./git-commit"),
    gitPush: () => import("./git-push"),
    gitPull: () => import("./git-pull"),
    gitFetch: () => import("./git-fetch"),
    gitClone: () => import("./git-clone"),
    gitBranch: () => import("./git-branch"),
    gitCheckout: () => import("./git-checkout"),
    gitSwitch: () => import("./git-switch"),
    gitMerge: () => import("./git-merge"),
    gitRebase: () => import("./git-rebase"),
    gitLog: () => import("./git-log"),
    gitDiff: () => import("./git-diff"),
    gitStash: () => import("./git-stash"),
    gitReset: () => import("./git-reset"),
    gitRemove: () => import("./git-rm"),
    gitMove: () => import("./git-mv"),
    gitRemote: () => import("./git-remote"),
} as const;

export type DetailKey = keyof typeof detailMap;