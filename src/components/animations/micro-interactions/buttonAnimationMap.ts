import type { ComponentType } from "react";
import FloatingButton from "./examples/basic/FloatingButton";
import BulbulButton from "./examples/basic/BulbulButton";
import ThumpButton from "./examples/basic/ThumpButton";

export const buttonAnimationMap: Record<string, ComponentType> = {
    floating: FloatingButton,
    bulbul: BulbulButton,
    thump: ThumpButton,

};