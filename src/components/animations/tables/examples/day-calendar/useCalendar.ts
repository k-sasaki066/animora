
import { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { CalendarApi } from "@fullcalendar/core";
import { format } from "date-fns";

export type EventType = {
    id: string;
    title: string;
    start: Date | string;
    end?: Date | string;
};

export function useCalendar(initialView: string = "dayGridMonth") {
    const [events, setEvents] = useState<EventType[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
    const [title, setTitle] = useState("");
    const [currentView, setCurrentView] = useState(initialView);
    const [calendarTitle, setCalendarTitle] = useState("");

    const calendarRef = useRef<FullCalendar | null>(null);

    // FullCalendar API
    const calendarApi = () => calendarRef.current?.getApi();

    // ビュー変更
    const changeView = (view: string) => {
        setCurrentView(view);
        calendarApi()?.changeView(view);
    };

    // ナビゲーション
    const goPrev = () => calendarApi()?.prev();
    const goNext = () => calendarApi()?.next();
    const goToday = () => calendarApi()?.today();

    // 選択でイベント追加
    const handleSelect = (info: any) => {
        const title = prompt("予定タイトル");
        if (title) {
            const newEvent: EventType = {
                id: String(Date.now()),
                title,
                start: info.start,
                end: info.end,
            };
            setEvents((prev) => [...prev, newEvent]);
        }
    };

    // イベントクリックで選択
    const handleEventClick = (info: any) => {
        setSelectedEvent({
            id: info.event.id,
            title: info.event.title,
            start: info.event.start,
            end: info.event.end,
        });
        setTitle(info.event.title);
    };

    // 保存
    const saveEdit = () => {
        if (!selectedEvent) return;
        setEvents((prev) =>
            prev.map((e) => (e.id === selectedEvent.id ? { ...e, title } : e))
        );
        setSelectedEvent(null);
    };

    // 削除
    const deleteEvent = () => {
        if (!selectedEvent) return;
        setEvents((prev) => prev.filter((e) => e.id !== selectedEvent.id));
        setSelectedEvent(null);
    };

    // タイトル計算
    const getTitle = (calendarApi: CalendarApi) => {
        const view = calendarApi.view.type;
        const start = calendarApi.view.currentStart;
        const end = calendarApi.view.currentEnd;

        switch (view) {
            case "dayGridMonth":
                return format(start, "yyyy/MM");
            case "timeGridWeek":
                return `${format(start, "M/d")} - ${format(new Date(end.getTime() - 1), "M/d")}`;
            case "timeGridDay":
                return format(start, "M/d");
            default:
                return format(start, "yyyy/MM");
        }
    };

    // 初期タイトル
    useEffect(() => {
        const api = calendarApi();
        if (api) setCalendarTitle(getTitle(api));
    }, []);

    // 日付変化時にタイトル更新
    const handleDatesSet = () => {
        const api = calendarApi();
        if (api) setCalendarTitle(getTitle(api));
    };

    return {
        events,
        setSelectedEvent,
        selectedEvent,
        title,
        setTitle,
        currentView,
        calendarTitle,
        calendarRef,
        changeView,
        goPrev,
        goNext,
        goToday,
        handleSelect,
        handleEventClick,
        saveEdit,
        deleteEvent,
        handleDatesSet,
    };
}