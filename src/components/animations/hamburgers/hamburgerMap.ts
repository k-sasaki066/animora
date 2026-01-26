import type { ComponentType } from "react";
import StandardHamburger from "./examples/StandardHamburger";
import Rotate315Hamburger from "./examples/Rotate315Hamburger";
import RotateHamburger from "./examples/RotateHamburger";

export const hamburgerMap: Record<string, ComponentType> = {
    standardHamburger: StandardHamburger,
    rotate315Hamburger: Rotate315Hamburger,
    rotateHamburger: RotateHamburger,
};