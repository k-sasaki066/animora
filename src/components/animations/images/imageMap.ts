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
import MosaicImage from "./examples/MosaicImage";
import LayerImage from "./examples/LayerImage";
import StretchImage from "./examples/StretchImage";
import HiddenTextImage from "./examples/HiddenTextImage";
import SkewImage from "./examples/SkewImage";
import SpreadsOutImage from "./examples/SpreadsOutImage";
import SubMenuImage from "./examples/SubMenuImage";
import ReductionImage from "./examples/ReductionImage";
import TileImage from "./examples/TileImage";
import CaptionImage from "./examples/CaptionImage";
import GlitchImage from "./examples/glitch/GlitchImage";

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
    mosaic: MosaicImage,
    layer: LayerImage,
    stretch: StretchImage,
    hiddenText: HiddenTextImage,
    skew: SkewImage,
    spreads: SpreadsOutImage,
    subMenu: SubMenuImage,
    reduction: ReductionImage,
    tile: TileImage,
    caption: CaptionImage,
    glitch: GlitchImage,
};