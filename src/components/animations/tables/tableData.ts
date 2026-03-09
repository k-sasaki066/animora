export interface TableItem {
    key: string;
    title: string;
    previewText: string;
    image: string;
    mobileImage?: string;
}

export const tableData: TableItem[] = [
    {
        key: "materialTable",
        title: "Material Table",
        previewText: "Material Table Example",
        image: "/images/tables/material-pc.webp",
        mobileImage: "/images/tables/material-mobile.webp",
    },
    {
        key: "highLightTable",
        title: "High Light Table",
        previewText: "High Light Table Example",
        image: "/images/tables/high-light.webp",
    },
    {
        key: "sortableTable",
        title: "Sortable Table",
        previewText: "Sortable Table Example",
        image: "/images/tables/sortable.webp",
    },
    {
        key: "animalTable",
        title: "Animal Table",
        previewText: "Animal Table Example",
        image: "/images/tables/animal-pc.webp",
        mobileImage: "/images/tables/animal-mobile.webp",
    },
    {
        key: "planTable",
        title: "Plan Table",
        previewText: "Plan Table Example",
        image: "/images/tables/plan.webp",
    },
    {
        key: "orderHistoryTable",
        title: "Order History Table",
        previewText: "Order History Table Example",
        image: "/images/tables/order-history-pc.webp",
        mobileImage: "/images/tables/order-history-mobile.webp",
    },
    {
        key: "inlineEditTable",
        title: "Inline Edit Table",
        previewText: "Inline Edit Table Example",
        image: "/images/tables/inline-edit-pc.webp",
        mobileImage: "/images/tables/inline-edit-mobile.webp",
    },
    {
        key: "dragTable",
        title: "Drag Table",
        previewText: "Drag Table Example",
        image: "/images/tables/drag.webp",
    },
    {
        key: "vacancyCalendar",
        title: "Vacancy Calendar",
        previewText: "Vacancy Calendar Example",
        image: "/images/tables/vacancy.webp",
    },
    {
        key: "dayCalendar",
        title: "Day Calendar",
        previewText: "Day Calendar Example",
        image: "/images/tables/day.webp",
    },
];