import type { ComponentType } from "react";
import FloatingButton from "./examples/basic/FloatingButton";
import BulbulButton from "./examples/basic/BulbulButton";
import ThumpButton from "./examples/basic/ThumpButton";
import SwayingButton from "./examples/basic/SwayingButton";
import ShakyButton from "./examples/basic/ShakyButton";
import SparklingButton from "./examples/basic/SparklingButton";
import RipplesButton from "./examples/basic/RipplesButton";
import SkewButton from "./examples/basic/SkewButton";
import SpinButton from "./examples/basic/SpinButton";
import JigglyButton from "./examples/basic/JigglyButton";
import ClickMoveButton from "./examples/basic/ClickMoveButton";
import GradientMoveButton from "./examples/basic/GradientMoveButton";

export const buttonAnimationMap: Record<string, ComponentType> = {
    floating: FloatingButton,
    bulbul: BulbulButton,
    thump: ThumpButton,
    swaying: SwayingButton,
    shaky: ShakyButton,
    sparkling: SparklingButton,
    ripples: RipplesButton,
    skew: SkewButton,
    spin: SpinButton,
    jiggly: JigglyButton,
    clickMove: ClickMoveButton,
    gradientMove: GradientMoveButton,

};