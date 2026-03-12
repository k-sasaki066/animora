import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type TableComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const tableMap: Record<string, TableComponent> = {
    materialTable: lazy(() => import("./examples/material/MaterialTable")),
    highLightTable: lazy(() => import("./examples/high-light/HighLightTable")),
    sortableTable: lazy(() => import("./examples/sortable/SortableTable")),
    animalTable:lazy(() => import("./examples/animal/AnimalTable")),
    planTable: lazy(() => import("./examples/plan/PlanTable")),
    orderHistoryTable: lazy(() => import("./examples/order-history/OrderHistoryTable")),
    inlineEditTable: lazy(() => import("./examples/inline-edit/InlineEditTable")),
    dragTable: lazy(() => import("./examples/drag/DragTable")),
    vacancyCalendar: lazy(() => import("./examples/vacancy/VacancyCalendar")),
    dayCalendar: lazy(() => import("./examples/day-calendar/DayCalendar")),
}