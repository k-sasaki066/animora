import type { ComponentType } from "react";
import MaterialTable from "./examples/material/MaterialTable";
import HighLightTable from "./examples/high-light/HighLightTable";
import SortableTable from "./examples/sortable/SortableTable";
import AnimalTable from "./examples/animal/AnimalTable";
import PlanTable from "./examples/plan/PlanTable";
import OrderHistoryTable from "./examples/order-history/OrderHistoryTable";
import InlineEditTable from "./examples/inline-edit/InlineEditTable";
import DragTable from "./examples/drag/DragTable";
import VacancyCalendar from "./examples/vacancy/VacancyCalendar";
import DayCalendar from "./examples/day-calendar/DayCalendar";

export const tableMap: Record<string, ComponentType> = {
    materialTable: MaterialTable,
    highLightTable: HighLightTable,
    sortableTable: SortableTable,
    animalTable: AnimalTable,
    planTable: PlanTable,
    orderHistoryTable: OrderHistoryTable,
    inlineEditTable: InlineEditTable,
    dragTable: DragTable,
    vacancyCalendar: VacancyCalendar,
    dayCalendar: DayCalendar,
}