export type User = {
    id: number;
    name: string;
    role: string;
};

export const users: User[] = [
    { id: 1, name: "John", role: "Admin" },
    { id: 2, name: "Mike", role: "Editor" },
    { id: 3, name: "Sara", role: "Subscriber" },
    { id: 4, name: "Anna", role: "Moderator" },
    { id: 5, name: "Olivia", role: "Admin" },
    { id: 6, name: "Liam", role: "Editor" },
    { id: 7, name: "Emma", role: "Subscriber" },
    { id: 8, name: "Noah", role: "Moderator" },
    { id: 9, name: "Ava", role: "Admin" },
    { id: 10, name: "Ethan", role: "Editor" },
];

export const columns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
] as const;