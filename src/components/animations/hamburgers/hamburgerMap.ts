import type { ComponentType } from "react";
import StandardHamburger from "./examples/StandardHamburger";
import Rotate315Hamburger from "./examples/Rotate315Hamburger";
import RotateHamburger from "./examples/RotateHamburger";
import ExtractHamburger from "./examples/ExtractHamburger";
import ResetCrossHamburger from "./examples/ResetCrossHamburger";
import ArrowHamburger from "./examples/ArrowHamburger";
import RotateArrowHamburger from "./examples/RotateArrowHamburger";
import Rotate90Hamburger from "./examples/Rotate90Hamburger";
import CircleAppearHamburger from "./examples/CircleAppearHamburger";
import LabelHamburger from "./examples/LabelHamburger";
import DotsHamburger from "./examples/DotsHamburger";
import IconHamburger from "./examples/IconHamburger";

import SlideInHamburger from "./examples/SlideInHamburger";
import OverlayHamburger from "./examples/overlay-hamburger/OverlayHamburger";
import GridOverlayHamburger from "./examples/grid-overlay/GridOverlayHamburger";
import CircleSpreadHamburger from "./examples/circle-spread/CircleSpreadHamburger";
import YellowSlideHamburger from "./examples/yellow-slide/YellowSlideHamburger";
import PushDownHamburger from "./examples/push-down/PushDownHamburger";
import DeepNaviHamburger from "./examples/deep-navi/DeepNaviHamburger";

export const hamburgerMap: Record<string, ComponentType> = {
    standardHamburger: StandardHamburger,
    rotate315Hamburger: Rotate315Hamburger,
    rotateHamburger: RotateHamburger,
    extractHamburger: ExtractHamburger,
    resetCrossHamburger: ResetCrossHamburger,
    arrowHamburger: ArrowHamburger,
    rotateArrowHamburger: RotateArrowHamburger,
    rotate90Hamburger: Rotate90Hamburger,
    circleAppearHamburger: CircleAppearHamburger,
    labelHamburger: LabelHamburger,
    dotsHamburger: DotsHamburger,
    iconHamburger: IconHamburger,

    slideInHamburger: SlideInHamburger,
    overlayHamburger: OverlayHamburger,
    gridOverlayHamburger: GridOverlayHamburger,
    circleSpreadHamburger: CircleSpreadHamburger,
    yellowSlideHamburger: YellowSlideHamburger,
    pushDownHamburger: PushDownHamburger,
    deepNaviHamburger: DeepNaviHamburger,
};