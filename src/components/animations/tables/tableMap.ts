import type { ComponentType } from "react";
import MaterialTable from "./examples/material/MaterialTable";
import HighLightTable from "./examples/high-light/HighLightTable";
import SortableTable from "./examples/sortable/SortableTable";
import AnimalTable from "./examples/animal/AnimalTable";
import PlanTable from "./examples/plan/PlanTable";

export const tableMap: Record<string, ComponentType> = {
    materialTable: MaterialTable,
    highLightTable: HighLightTable,
    sortableTable: SortableTable,
    animalTable: AnimalTable,
    planTable: PlanTable,
}