export type Status = "available" | "few" | "full";

export type Availability = {
    date: string;
    status: Status;
    remaining: number;
    price: number;
};

export function generateAvailability(year: number, month: number): Availability[] {
    const result: Availability[] = [];
    const statuses: Status[] = ["available", "few", "full"];

    const today = new Date();
    const lastDate = new Date(year, month, 0).getDate();

    for (let d = 1; d <= lastDate; d++) {
        const currentDate = new Date(year, month - 1, d);
        let status: Status;

        if (currentDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
            // 当日より前は強制満室
            status = "full";
        } else {
            status = statuses[Math.floor(Math.random() * statuses.length)];
        }

        const remaining =
            status === "available"
                ? Math.floor(Math.random() * 5) + 2
                : status === "few"
                    ? 1
                    : 0;

        const price = 10000 + Math.floor(Math.random() * 5000);

        const date = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0" )}`;

        result.push({
            date,
            status,
            remaining,
            price,
        });
    }

    return result;
}