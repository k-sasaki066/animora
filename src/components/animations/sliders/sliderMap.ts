import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type SliderComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const sliderMap: Record<string, SliderComponent> = {
    basic: lazy(() => import("./examples/BasicSlider")),
    fade: lazy(() => import("./examples/FadeSlider")),
    autoplay: lazy(() => import("./examples/AutoplaySlider")),
    select: lazy(() => import("./examples/SelectSlider")),
    vertical: lazy(() => import("./examples/VerticalSlider")),
    centerCarousel: lazy(() => import("./examples/CenterCarouselSlider")),
    centerFocus: lazy(() => import("./examples/CenterFocusSlider")),
    heroCarousel: lazy(() => import("./examples/hero-slider/HeroCarouselSlider")),
    Carousel3D: lazy(() => import("./examples/carousel3d/Carousel3dSlider")),
    Split: lazy(() => import("./examples/split/SplitSlideshow")),
    SkewedScroll: lazy(() => import("./examples/skewed-scroll/SkewedScrollSlider")),
    ForestSlider: lazy(() => import("./examples/forest-slider/ForestSlider")),
    AnimeSlider: lazy(() => import("./examples/anime/AnimeSlider")),
    Fancy: lazy(() => import("./examples/fancy/FancySlider")),
};