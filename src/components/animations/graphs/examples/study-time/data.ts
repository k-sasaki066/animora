export type RangeType = "week" | "month" | "year";

export type Data = {
    day: string;
    math: number;
    english: number;
    science: number;
};

export const weekData: Data[] = [
    { day: "Mon", math: 2, english: 1.5, science: 1 },
    { day: "Tue", math: 1.5, english: 2, science: 1.2 },
    { day: "Wed", math: 2.3, english: 1.2, science: 1.8 },
    { day: "Thu", math: 1.8, english: 2.1, science: 1.5 },
    { day: "Fri", math: 2.5, english: 1.7, science: 1.3 },
    { day: "Sat", math: 3, english: 2.2, science: 2 },
];

export const monthData: Data[] = [
    { day: "1", math: 1.8, english: 1.2, science: 1 },
    { day: "2", math: 2.1, english: 1.5, science: 1.3 },
    { day: "3", math: 2.3, english: 1.8, science: 1.4 },
    { day: "4", math: 2.0, english: 1.4, science: 1.2 },
    { day: "5", math: 2.5, english: 1.9, science: 1.6 },
    { day: "6", math: 2.8, english: 2.1, science: 1.7 },
    { day: "7", math: 2.2, english: 1.7, science: 1.3 },
    { day: "8", math: 2.4, english: 2.0, science: 1.5 },
    { day: "9", math: 2.7, english: 2.2, science: 1.6 },
    { day: "10", math: 2.6, english: 2.1, science: 1.8 },
    { day: "11", math: 2.3, english: 1.9, science: 1.4 },
    { day: "12", math: 2.9, english: 2.4, science: 1.9 },
    { day: "13", math: 3.0, english: 2.3, science: 2.0 },
    { day: "14", math: 2.7, english: 2.0, science: 1.6 },
    { day: "15", math: 3.1, english: 2.5, science: 2.1 },
    { day: "16", math: 2.8, english: 2.2, science: 1.9 },
    { day: "17", math: 2.6, english: 2.0, science: 1.7 },
    { day: "18", math: 3.2, english: 2.6, science: 2.2 },
    { day: "19", math: 2.9, english: 2.3, science: 2.0 },
    { day: "20", math: 3.3, english: 2.7, science: 2.3 },
    { day: "21", math: 3.0, english: 2.4, science: 2.0 },
    { day: "22", math: 2.7, english: 2.2, science: 1.8 },
    { day: "23", math: 2.5, english: 2.0, science: 1.7 },
    { day: "24", math: 2.8, english: 2.3, science: 1.9 },
    { day: "25", math: 3.4, english: 2.8, science: 2.4 },
    { day: "26", math: 3.1, english: 2.5, science: 2.2 },
    { day: "27", math: 2.9, english: 2.3, science: 2.0 },
    { day: "28", math: 3.0, english: 2.4, science: 2.1 },
    { day: "29", math: 3.2, english: 2.6, science: 2.3 },
    { day: "30", math: 3.5, english: 2.9, science: 2.5 },
];

export const yearData: Data[] = [
    { day: "Jan", math: 60, english: 50, science: 40 },
    { day: "Feb", math: 65, english: 55, science: 42 },
    { day: "Mar", math: 70, english: 60, science: 48 },
    { day: "Apr", math: 75, english: 65, science: 50 },
    { day: "May", math: 80, english: 70, science: 55 },
    { day: "Jun", math: 85, english: 72, science: 58 },
    { day: "Jul", math: 95, english: 85, science: 70 },
    { day: "Aug", math: 90, english: 80, science: 68 },
    { day: "Sep", math: 88, english: 78, science: 65 },
    { day: "Oct", math: 92, english: 83, science: 72 },
    { day: "Nov", math: 96, english: 90, science: 78 },
    { day: "Dec", math: 100, english: 95, science: 82 },
];