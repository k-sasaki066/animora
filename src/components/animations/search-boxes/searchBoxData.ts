export interface SearchBoxItem {
    key: string;
    title: string;
    video: string;
}

export const searchBoxData: SearchBoxItem[] = [
    {
        key: "elasticFocusSearch",
        title: "Elastic Focus Search",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/search-boxes/elastic-focus-search.mp4`,
    },
    {
        key: "expandSearch",
        title: "Expand Search",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/search-boxes/expand-search.mp4`,
    },
    {
        key: "arcMotionSearch",
        title: "Arc Motion Search",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/search-boxes/arc-motion-search.mp4`,
    },
    {
        key: "categorySearch",
        title: "Category Search",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/search-boxes/category-search.mp4`,
    },
    {
        key: "filterSearch",
        title: "Filter Search",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/search-boxes/filter-search.mp4`,
    },
];