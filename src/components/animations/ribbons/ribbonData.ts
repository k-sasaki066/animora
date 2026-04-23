export interface RibbonItem {
    key: string;
    title: string;
    image: string;
}

export const ribbonData: RibbonItem[] = [
    {
        key: "simpleRibbon",
        title: "Simple Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/simple-ribbon.webp`,
    },
    {
        key: "foldedRibbon",
        title: "Folded Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/folded-ribbon.webp`,
    },
    {
        key: "bookMarkRibbon",
        title: "Book Mark Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/book-mark-ribbon.webp`,
    },
    {
        key: "foldedBookMarkRibbon",
        title: "Folded Book Mark Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/folded-book-mark-ribbon.webp`,
    },
    {
        key: "cornerRibbon",
        title: "Corner Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/corner-ribbon.webp`,
    },
    {
        key: "verticalRibbon",
        title: "Vertical Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/vertical-ribbon.webp`,
    },
    {
        key: "badgeRibbon",
        title: "Badge Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/badge-ribbon.webp`,
    },
    {
        key: "soldOutRibbon",
        title: "Sold Out Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/sold-out-ribbon.webp`,
    },
    {
        key: "starRibbon",
        title: "Star Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/star-ribbon.webp`,
    },
    {
        key: "crownRibbon",
        title: "Crown Ribbon",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/ribbons/crown-ribbon.webp`,
    },
];