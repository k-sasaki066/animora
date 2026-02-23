export interface RibbonItem {
    key: string;
    title: string;
    previewText: string;
}

export const ribbonData: RibbonItem[] = [
    {
        key: "simpleRibbon",
        title: "Simple Ribbon",
        previewText: "Simple Ribbon Example",
    },
    {
        key: "foldedRibbon",
        title: "Folded Ribbon",
        previewText: "Folded Ribbon Example",
    },
];