export type Status = "Completed" | "In progress";

export type MaterialItem = {
    id: number;
    name: string;
    status: Status;
};

export const DATA: MaterialItem[] = [
    {
        id: 1,
        name: "Material Design Color Palette",
        status: "Completed",
    },
    {
        id: 2,
        name: "Material Design Iconic Font",
        status: "Completed",
    },
    {
        id: 3,
        name: "Material Design Hierarchical",
        status: "Completed",
    },
    {
        id: 4,
        name: "Material Design Sidebar",
        status: "Completed",
    },
    {
        id: 5,
        name: "Material Design Buttons",
        status: "In progress",
    },
    {
        id: 6,
        name: "Material Design Lists",
        status: "In progress",
    },
    {
        id: 7,
        name: "Material Design Cards",
        status: "Completed",
    },
    {
        id: 8,
        name: "Material Design Navigation Bar",
        status: "Completed",
    },
    {
        id: 9,
        name: "Material Design Dialogs",
        status: "In progress",
    },
    {
        id: 10,
        name: "Material Design Data Tables",
        status: "In progress",
    },
];