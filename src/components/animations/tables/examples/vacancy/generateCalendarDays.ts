export type CalendarDay = {
    day: number;
    currentMonth: boolean;
    date: string;
};

const formatDate = (y: number, m: number, d: number) =>
    `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

export function generateCalendarDays(year: number, month: number): CalendarDay[] {
    const firstWeekday = new Date(year, month - 1, 1).getDay();
    const prevLastDate = new Date(year, month - 1, 0).getDate();
    const currentLastDate = new Date(year, month, 0).getDate();

    const calendarDays: CalendarDay[] = [];

    // 前月
    for (let i = firstWeekday; i > 0; i--) {
        const d = prevLastDate - i + 1;
        const m = month - 1 === 0 ? 12 : month - 1;
        const y = month - 1 === 0 ? year - 1 : year;

        calendarDays.push({
            day: d,
            currentMonth: false,
            date: formatDate(y, m, d),
        });
    }

    // 当月
    for (let d = 1; d <= currentLastDate; d++) {
        calendarDays.push({
            day: d,
            currentMonth: true,
            date: formatDate(year, month, d),
        });
    }

    // 次月
    const remain = 42 - calendarDays.length;

    for (let i = 1; i <= remain; i++) {
        const m = month + 1 === 13 ? 1 : month + 1;
        const y = month + 1 === 13 ? year + 1 : year;

        calendarDays.push({
            day: i,
            currentMonth: false,
            date: formatDate(y, m, i),
        });
    }

    return calendarDays;
}