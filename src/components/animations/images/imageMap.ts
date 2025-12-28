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
import ChangeImage from "./examples/ChangeImage";
import ChangeTextImage from "./examples/ChangeTextImage";
import HoverLineImage from "./examples/HoverLineImage";
import SpinImage from "./examples/SpinImage";
import SlideImage from "./examples/SlideImage";
import Tilt3dImage from "./examples/Tilt3dImage";
import HoverVideoImage from "./examples/HoverVideoImage";
import DashedBorderImage from "./examples/DashedBorderImage";
import FollowImage from "./examples/FollowImage";

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
    change: ChangeImage,
    changeText: ChangeTextImage,
    hoverLine: HoverLineImage,
    spin: SpinImage,
    slide: SlideImage,
    tilt3d: Tilt3dImage,
    video: HoverVideoImage,
    dashedBorder: DashedBorderImage,
    follow: FollowImage,
};