import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type ImageComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;


export const imageMap: Record<string, ImageComponent> = {
    opacity: lazy(() => import("./examples/OpacityImage")),
    zoom: lazy(() => import("./examples/ZoomImage")),
    border: lazy(() => import("./examples/BorderImage")),
    float: lazy(() => import("./examples/FloatImage")),
    gray: lazy(() => import("./examples/GrayscaleImage")),
    blur: lazy(() => import("./examples/BlurImage")),
    flip: lazy(() => import("./examples/FlipImage")),
    overlay: lazy(() => import("./examples/OverlayImage")),
    blink: lazy(() => import("./examples/BlinkImage")),
    hoverText: lazy(() => import("./examples/HoverTextImage")),
    change: lazy(() => import("./examples/ChangeImage")),
    changeText: lazy(() => import("./examples/ChangeTextImage")),
    hoverLine: lazy(() => import("./examples/HoverLineImage")),
    spin: lazy(() => import("./examples/SpinImage")),
    slide: lazy(() => import("./examples/SlideImage")),
    tilt3d: lazy(() => import("./examples/Tilt3dImage")),
    video: lazy(() => import("./examples/HoverVideoImage")),
    dashedBorder: lazy(() => import("./examples/DashedBorderImage")),
    follow: lazy(() => import("./examples/FollowImage")),
    mosaic: lazy(() => import("./examples/MosaicImage")),
    layer: lazy(() => import("./examples/LayerImage")),
    stretch: lazy(() => import("./examples/StretchImage")),
    hiddenText: lazy(() => import("./examples/HiddenTextImage")),
    skew: lazy(() => import("./examples/SkewImage")),
    spreads: lazy(() => import("./examples/SpreadsOutImage")),
    subMenu: lazy(() => import("./examples/SubMenuImage")),
    reduction: lazy(() => import("./examples/ReductionImage")),
    tile: lazy(() => import("./examples/TileImage")),
    caption: lazy(() => import("./examples/CaptionImage")),
    glitch: lazy(() => import("./examples/glitch/GlitchImage")),
};