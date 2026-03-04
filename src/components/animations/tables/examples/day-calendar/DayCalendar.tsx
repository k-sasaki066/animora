"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FaChevronLeft, FaChevronRight, FaCalendarDay, FaCalendarWeek, FaCalendarAlt } from "react-icons/fa";
import { CalendarButton } from "./CalendarButton";
import { EventEditModal } from "./EventEditModal";
import { useCalendar } from "./useCalendar";

export default function DayCalendar() {
    const {
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
    } = useCalendar("dayGridMonth");

    // ナビゲーションボタンデータ
    const navButtons = [
        { icon: <FaChevronLeft />, onClick: goPrev },
        { label: "Today", onClick: goToday },
        { icon: <FaChevronRight />, onClick: goNext },
    ];

    // ビュー切替ボタンデータ
    const viewButtons = [
        { icon: <FaCalendarAlt />, view: "dayGridMonth" },
        { icon: <FaCalendarWeek />, view: "timeGridWeek" },
        { icon: <FaCalendarDay />, view: "timeGridDay" },
    ];

    return (
        <div className="w-full h-full mx-auto overflow-auto no-scrollbar">
            {/* カスタムツールバー */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                {/* ナビゲーション */}
                <div className="flex gap-2 text-xs md:text-sm lg:text-base">
                    {navButtons.map((btn, idx) => (
                        <CalendarButton
                            key={idx}
                            icon={btn.icon}
                            label={btn.label}
                            onClick={btn.onClick}
                        />
                    ))}
                </div>

                {/* タイトル */}
                <div className="text-sm md:text-base lg:text-lg font-bold">{calendarTitle}</div>

                {/* ビュー切替 */}
                <div className="flex gap-2 mt-2 sm:mt-0 text-xs md:text-sm lg:text-base">
                    {viewButtons.map((btn, idx) => (
                        <CalendarButton
                            key={idx}
                            icon={btn.icon}
                            active={currentView === btn.view}
                            onClick={() => changeView(btn.view)}
                        />
                    ))}
                </div>
            </div>

            {/* Calendar */}
            <div className="w-full h-full mx-auto overflow-auto no-scrollbar
            text-[8px] sm:text-[10px] md:text-sm">
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView={currentView}
                    selectable
                    editable
                    select={handleSelect}
                    headerToolbar={false}
                    events={events}
                    eventClick={handleEventClick}
                    nowIndicator
                    height="auto"
                    longPressDelay={200}
                    datesSet={handleDatesSet}
                />
            </div>

            {selectedEvent && (
                <EventEditModal
                    event={selectedEvent}
                    title={title}
                    setTitle={setTitle}
                    onClose={() => setSelectedEvent(null)}
                    onSave={saveEdit}
                    onDelete={deleteEvent}
                />
            )}
        </div>
    );
}