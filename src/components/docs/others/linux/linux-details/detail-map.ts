export const detailMap = {
    linuxBin: () => import("./linux-bin"),
    linuxBoot: () => import("./linux-boot"),
    linuxDev: () => import("./linux-dev"),
    linuxEtc: () => import("./linux-etc"),
    linuxHome: () => import("./linux-home"),
    linuxRoot: () => import("./linux-root"),
    linuxLib: () => import("./linux-lib"),
    linuxMedia: () => import("./linux-media"),
    linuxMnt: () => import("./linux-mnt"),
    linuxOpt: () => import("./linux-opt"),
    linuxProc: () => import("./linux-proc"),
    linuxRun: () => import("./linux-run"),
    linuxSrv: () => import("./linux-srv"),
    linuxSys: () => import("./linux-sys"),
    linuxTmp: () => import("./linux-tmp"),
    linuxUsr: () => import("./linux-usr"),
    linuxVar: () => import("./linux-var"),
    linuxApp: () => import("./linux-app"),

    linuxReactApp: () => import("./react/linux-react-app"),
    linuxReactUsrBinNode: () => import("./react/linux-react-usr-bin-node"),

    linuxLaravelEtc: () => import("./laravel/linux-laravel-etc"),
    linuxLaravelVar: () => import("./laravel/linux-laravel-var"),
    linuxLaravelUsr: () => import("./laravel/linux-laravel-usr"),

    linuxNginxEtc: () => import("./nginx/linux-nginx-etc"),
    linuxNginxUsr: () => import("./nginx/linux-nginx-usr"),
    linuxNginxVar: () => import("./nginx/linux-nginx-var"),

    linuxMysqlVar: () => import("./mysql/linux-mysql-var"),
    linuxMysqlEtc: () => import("./mysql/linux-mysql-etc"),
    linuxMysqlUsr: () => import("./mysql/linux-mysql-usr"),
} as const;

export type DetailKey = keyof typeof detailMap;