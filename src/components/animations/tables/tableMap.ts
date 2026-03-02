import type { ComponentType } from "react";
import MaterialTable from "./examples/material/MaterialTable";
import HighLightTable from "./examples/high-light/HighLightTable";
import SortableTable from "./examples/sortable/SortableTable";

export const tableMap: Record<string, ComponentType> = {
    materialTable: MaterialTable,
    highLightTable: HighLightTable,
    sortableTable: SortableTable,
}