export interface PaginationItem {
    key: string;
    title: string;
    video: string;
}

export const paginationData: PaginationItem[] = [
    {
        key: "simplePagination",
        title: "Simple Pagination",
        video: "/videos/pagination/simple-pagination.mp4",
    },
    {
        key: "circlePagination",
        title: "Circle Pagination",
        video: "/videos/pagination/circle-pagination.mp4",
    },
    {
        key: "capsulePagination",
        title: "Capsule Pagination",
        video: "/videos/pagination/capsule-pagination.mp4",
    },
    {
        key: "ellipsisPagination",
        title: "Ellipsis Pagination",
        video: "/videos/pagination/ellipsis-pagination.mp4",
    },
    {
        key: "loadMoreList",
        title: "Load More List",
        video: "/videos/pagination/load-more-pagination.mp4",
    },
    {
        key: "dropDownPagination",
        title: "Drop Down Pagination",
        video: "/videos/pagination/drop-down-pagination.mp4",
    },
    {
        key: "infiniteScrollList",
        title: "Infinite Scroll List",
        video: "/videos/pagination/infinite-scroll-pagination.mp4",
    },
];