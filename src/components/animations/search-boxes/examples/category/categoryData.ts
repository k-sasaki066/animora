import type { IconType } from "react-icons";
import { FaLaptop, FaUtensils, FaTshirt, FaBook } from "react-icons/fa";

export type Category = "tech" | "food" | "fashion" | "books";

export interface Item {
    id: number;
    title: string;
    category: Category;
}

export interface CategoryItem {
    key: Category;
    label: string;
    icon: IconType;
}

export const categories: CategoryItem[] = [
    { key: "tech", label: "Tech", icon: FaLaptop },
    { key: "food", label: "Food", icon: FaUtensils },
    { key: "fashion", label: "Fashion", icon: FaTshirt },
    { key: "books", label: "Books", icon: FaBook },
];

export const items: Item[] = [
    // Tech
    { id: 1, title: "MacBook Pro", category: "tech" },
    { id: 2, title: "Dell XPS", category: "tech" },
    { id: 3, title: "Surface Laptop", category: "tech" },
    { id: 4, title: "Next.js Course", category: "tech" },
    { id: 5, title: "TypeScript Handbook", category: "tech" },
    { id: 6, title: "iPad Pro", category: "tech" },

    // Books
    { id: 7, title: "React Guide", category: "books" },
    { id: 8, title: "Clean Code", category: "books" },
    { id: 9, title: "Atomic Habits", category: "books" },
    { id: 10, title: "Deep Work", category: "books" },
    { id: 11, title: "Refactoring UI", category: "books" },

    // Food
    { id: 12, title: "Pizza", category: "food" },
    { id: 13, title: "Burger", category: "food" },
    { id: 14, title: "Sushi", category: "food" },
    { id: 15, title: "Ramen", category: "food" },
    { id: 16, title: "Tacos", category: "food" },
    { id: 17, title: "Pasta", category: "food" },

    // Fashion
    { id: 18, title: "T-shirt", category: "fashion" },
    { id: 19, title: "Sneakers", category: "fashion" },
    { id: 20, title: "Denim Jacket", category: "fashion" },
    { id: 21, title: "Hoodie", category: "fashion" },
    { id: 22, title: "Backpack", category: "fashion" },
];