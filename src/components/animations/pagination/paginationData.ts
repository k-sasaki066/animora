export interface PaginationItem {
    key: string;
    title: string;
    previewText: string;
}

export const paginationData: PaginationItem[] = [
    {
        key: "simplePagination",
        title: "Simple Pagination",
        previewText: "Simple Pagination Example",
    },
    {
        key: "circlePagination",
        title: "Circle Pagination",
        previewText: "Circle Pagination Example",
    },
    {
        key: "capsulePagination",
        title: "Capsule Pagination",
        previewText: "Capsule Pagination Example",
    },
    {
        key: "ellipsisPagination",
        title: "Ellipsis Pagination",
        previewText: "Ellipsis Pagination Example",
    },
    {
        key: "loadMoreList",
        title: "Load More List",
        previewText: "Load More List Example",
    },
];