export interface FormPartItem {
    key: string;
    title: string;
    previewText: string;
}

export const formPartData: FormPartItem[] = [
    {
        key: "floatingLabel",
        title: "Floating Label",
        previewText: "Floating Label Example",
    },
    {
        key: "liftedLabel",
        title: "Lifted Label",
        previewText: "Lifted Label Example",
    },
    {
        key: "softDropSelect",
        title: "Soft Drop Select",
        previewText: "Soft Drop Select Example",
    },
    {
        key: "multiSelect",
        title: "Multi Select",
        previewText: "Multi Select Example",
    },
];