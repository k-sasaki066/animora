export const detailMap = {
    xmlGetRequest: () => import("./xml-get-request"),
    xmlPostRequest: () => import("./xml-post-request"),
    xmlProgress: () => import("./xml-progress"),
    xmlRequestHeader: () => import("./xml-request-header"),
    xmlResponse: () => import("./xml-response"),
    xmlCredential: () => import("./xml-credential"),
} as const;

export type DetailKey = keyof typeof detailMap;