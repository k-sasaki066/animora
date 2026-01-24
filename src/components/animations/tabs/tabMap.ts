import type { ComponentType } from "react";
import StandardTab from "./examples/StandardTab";
import ModernTab from "./examples/ModernTab";

export const tabMap: Record<string, ComponentType> = {
    standardTab: StandardTab,
    modernTab: ModernTab,

};