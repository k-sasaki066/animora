import type { ComponentType } from "react";
import FloatingButton from "./examples/basic/FloatingButton";
import BulbulButton from "./examples/basic/BulbulButton";
import ThumpButton from "./examples/basic/ThumpButton";
import SwayingButton from "./examples/basic/SwayingButton";
import ShakyButton from "./examples/basic/ShakyButton";
import SparklingButton from "./examples/basic/SparklingButton";
import RipplesButton from "./examples/basic/RipplesButton";

export const buttonAnimationMap: Record<string, ComponentType> = {
    floating: FloatingButton,
    bulbul: BulbulButton,
    thump: ThumpButton,
    swaying: SwayingButton,
    shaky: ShakyButton,
    sparkling: SparklingButton,
    ripples: RipplesButton,

};