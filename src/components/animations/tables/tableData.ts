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
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/material-pc.webp`,
        mobileImage: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/material-mobile.webp`,
    },
    {
        key: "highLightTable",
        title: "High Light Table",
        previewText: "High Light Table Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/high-light.webp`,
    },
    {
        key: "sortableTable",
        title: "Sortable Table",
        previewText: "Sortable Table Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/sortable.webp`,
    },
    {
        key: "animalTable",
        title: "Animal Table",
        previewText: "Animal Table Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/animal-pc.webp`,
        mobileImage: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/animal-mobile.webp`,
    },
    {
        key: "planTable",
        title: "Plan Table",
        previewText: "Plan Table Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/plan.webp`,
    },
    {
        key: "orderHistoryTable",
        title: "Order History Table",
        previewText: "Order History Table Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/order-history-pc.webp`,
        mobileImage: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/order-history-mobile.webp`,
    },
    {
        key: "inlineEditTable",
        title: "Inline Edit Table",
        previewText: "Inline Edit Table Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/inline-edit-pc.webp`,
        mobileImage: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/inline-edit-mobile.webp`,
    },
    {
        key: "dragTable",
        title: "Drag Table",
        previewText: "Drag Table Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/drag.webp`,
    },
    {
        key: "vacancyCalendar",
        title: "Vacancy Calendar",
        previewText: "Vacancy Calendar Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/vacancy.webp`,
    },
    {
        key: "dayCalendar",
        title: "Day Calendar",
        previewText: "Day Calendar Example",
        image: `${process.env.NEXT_PUBLIC_R2_URL}/images/tables/day.webp`,
    },
];