import type { ComponentType } from "react";
import BasicSlider from "./examples/BasicSlider";
import FadeSlider from "./examples/FadeSlider";
import AutoplaySlider from "./examples/AutoplaySlider";
import SelectSlider from "./examples/SelectSlider";
import VerticalSlider from "./examples/VerticalSlider";
import CenterCarouselSlider from "./examples/CenterCarouselSlider";
import CenterFocusSlider from "./examples/CenterFocusSlider";
import HeroCarouselSlider from "./examples/hero-slider/HeroCarouselSlider";
import Carousel3dSlider from "./examples/carousel3d/Carousel3dSlider";
import SplitSlideshow from "./examples/split/SplitSlideshow";
import { SkewedScrollSlider } from "./examples/skewed-scroll/SkewedScrollSlider";
import ForestSlider from "./examples/forest-slider/ForestSlider";
import AnimeSlider from "./examples/anime/AnimeSlider";
import FancySlider from "./examples/fancy/FancySlider";

export const sliderMap: Record<string, ComponentType> = {
    basic: BasicSlider,
    fade: FadeSlider,
    autoplay: AutoplaySlider,
    select: SelectSlider,
    vertical: VerticalSlider,
    centerCarousel: CenterCarouselSlider,
    centerFocus: CenterFocusSlider,
    heroCarousel: HeroCarouselSlider,
    Carousel3D: Carousel3dSlider,
    Split: SplitSlideshow,
    SkewedScroll: SkewedScrollSlider,
    ForestSlider: ForestSlider,
    AnimeSlider: AnimeSlider,
    Fancy: FancySlider,
};