
export type Row = {
    id: number
    name: string
    role: string
    email: string
};

export type EditableField = keyof Omit<Row, "id">;

export const initialData: Row[] = [
    {
        id: 1,
        name: "John",
        role: "Admin",
        email: "john@test.com"
    },
    {
        id: 2,
        name: "Mike",
        role: "Editor",
        email: "mike@test.com"
    },
    {
        id: 3,
        name: "Anna",
        role: "User",
        email: "anna@test.com"
    },
    {
        id: 4,
        name: "Sara",
        role: "User",
        email: "sara@test.com"
    },
    {
        id: 5,
        name: "Tom",
        role: "Editor",
        email: "tom@test.com"
    },
    {
        id: 6,
        name: "Emma",
        role: "Admin",
        email: "emma@test.com"
    },
    {
        id: 7,
        name: "Jack",
        role: "User",
        email: "jack@test.com"
    },
    {
        id: 8,
        name: "Olivia",
        role: "Editor",
        email: "olivia@test.com"
    },
    {
        id: 9,
        name: "Liam",
        role: "User",
        email: "liam@test.com"
    },
    {
        id: 10,
        name: "Sophia",
        role: "Admin",
        email: "sophia@test.com"
    }
];

export type ColumnType = "text" | "select";

export type Column = {
    key: keyof Row;
    label: string;
    type: ColumnType;
    options?: string[]; // select用
};

export const columns: Column[] = [
    { key: "name", label: "Name", type: "text" },
    { key: "role", label: "Role", type: "select", options: ["Admin", "Editor", "User"] },
    { key: "email", label: "Email", type: "text" },
];