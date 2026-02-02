import type { ComponentType } from "react";
import CenterAccordionMenu from "./examples/CenterAccordionMenu";
import CircleMenu from "./examples/CircleMenu";

export const menuMap: Record<string, ComponentType> = {
    centerAccordionMenu: CenterAccordionMenu,
    circleMenu: CircleMenu,
};