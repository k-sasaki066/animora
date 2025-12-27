import type { ComponentType } from "react";
import OpacityImage from "./examples/OpacityImage";
import ZoomImage from "./examples/ZoomImage";
import BorderImage from "./examples/BorderImage";
import FloatImage from "./examples/FloatImage";
import GrayscaleImage from "./examples/GrayscaleImage";
import BlurImage from "./examples/BlurImage";
import FlipImage from "./examples/FlipImage";
import OverlayImage from "./examples/OverlayImage";
import BlinkImage from "./examples/BlinkImage";
import HoverTextImage from "./examples/HoverTextImage";

export const imageMap: Record<string, ComponentType> = {
    opacity: OpacityImage,
    zoom: ZoomImage,
    border: BorderImage,
    float: FloatImage,
    gray: GrayscaleImage,
    blur: BlurImage,
    flip: FlipImage,
    overlay: OverlayImage,
    blink: BlinkImage,
    hoverText: HoverTextImage,
};