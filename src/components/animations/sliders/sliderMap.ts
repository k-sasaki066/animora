import type { ComponentType } from "react";
import BasicSlider from "./examples/BasicSlider";
import FadeSlider from "./examples/FadeSlider";
import AutoplaySlider from "./examples/AutoplaySlider";
import CenterCarouselSlider from "./examples/CenterCarouselSlider";
import CenterFocusSlider from "./examples/CenterFocusSlider";
import HeroCarouselSlider from "./examples/hero-slider/HeroCarouselSlider";

export const sliderMap: Record<string, ComponentType> = {
    basic: BasicSlider,
    fade: FadeSlider,
    autoplay: AutoplaySlider,
    centerCarousel: CenterCarouselSlider,
    centerFocus: CenterFocusSlider,
    heroCarousel: HeroCarouselSlider,
};