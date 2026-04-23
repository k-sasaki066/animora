export interface SliderItem {
    key: string;
    title: string;
    video: string;
}

export const sliderData: SliderItem[] = [
    {
        key: "basic",
        title: "Basic Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/basic-slider.mp4`,
    },
    {
        key: "fade",
        title: "Fade Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/fade-slider.mp4`,
    },
    {
        key: "autoplay",
        title: "Autoplay Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/autoplay-slider.mp4`,
    },
    {
        key: "select",
        title: "Select Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/select-slider.mp4`,
    },
    {
        key: "vertical",
        title: "Vertical Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/vertical-slider.mp4`,
    },
    {
        key: "centerCarousel",
        title: "Center Carousel Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/center-carousel-slider.mp4`,
    },
    {
        key: "centerFocus",
        title: "Center Focus Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/center-focus-slider.mp4`,
    },
    {
        key: "heroCarousel",
        title: "Hero Carousel Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/hero-carousel-slider.mp4`,
    },
    {
        key: "Carousel3D",
        title: "3D Carousel Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/carousel-3d-slider.mp4`,
    },
    {
        key: "Split",
        title: "Split Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/split-slider.mp4`,
    },
    {
        key: "SkewedScroll",
        title: "Skewed Scroll Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/skew-scroll-slider.mp4`,
    },
    {
        key: "ForestSlider",
        title: "Forest Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/forest-slider.mp4`,
    },
    {
        key: "AnimeSlider",
        title: "Anime Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/anime-slider.mp4`,
    },
    {
        key: "Fancy",
        title: "Fancy Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/sliders/fancy-slider.mp4`,
    },
];