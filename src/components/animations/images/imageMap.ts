import type { ComponentType } from "react";
import OpacityImage from "./examples/OpacityImage";
import ZoomImage from "./examples/ZoomImage";
import BorderImage from "./examples/BorderImage";

export const imageMap: Record<string, ComponentType> = {
    opacity: OpacityImage,
    zoom: ZoomImage,
    border: BorderImage
};