export const detailMap = {
    xhrOnload: () => import("./xhr-onload"),
    xhrOnerror: () => import("./xhr-onerror"),
    xhrOnprogress: () => import("./xhr-onprogress"),
    xhrUploadOnprogress: () => import("./xhr-upload-onprogress"),
    xhrOnabort: () => import("./xhr-onabort"),
} as const;

export type DetailKey = keyof typeof detailMap;