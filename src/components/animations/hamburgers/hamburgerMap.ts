import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type HamburgerComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const hamburgerMap: Record<string, HamburgerComponent> = {
    standardHamburger: lazy(() => import("./examples/StandardHamburger")),
    rotate315Hamburger: lazy(() => import("./examples/Rotate315Hamburger")),
    rotateHamburger: lazy(() => import("./examples/RotateHamburger")),
    extractHamburger: lazy(() => import("./examples/ExtractHamburger")),
    resetCrossHamburger: lazy(() => import("./examples/ResetCrossHamburger")),
    arrowHamburger: lazy(() => import("./examples/ArrowHamburger")),
    rotateArrowHamburger: lazy(() => import("./examples/RotateArrowHamburger")),
    rotate90Hamburger: lazy(() => import("./examples/Rotate90Hamburger")),
    circleAppearHamburger: lazy(() => import("./examples/CircleAppearHamburger")),
    labelHamburger: lazy(() => import("./examples/LabelHamburger")),
    dotsHamburger: lazy(() => import("./examples/DotsHamburger")),
    iconHamburger: lazy(() => import("./examples/IconHamburger")),
    elasticMorphHamburger: lazy(() => import("./examples/ElasticMorphHamburger")),
};