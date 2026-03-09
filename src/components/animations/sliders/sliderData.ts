export interface SliderItem {
    key: string;
    title: string;
    video: string;
    description?: string;
}

export const sliderData: SliderItem[] = [
    {
        key: "basic",
        title: "Basic Slider",
        video: "/videos/sliders/basic-slider.mp4",
        description: "左右にスライドする基本形",
    },
    {
        key: "fade",
        title: "Fade Slider",
        video: "/videos/sliders/fade-slider.mp4",
        description: "フェード切り替え",
    },
    {
        key: "autoplay",
        title: "Autoplay Slider",
        video: "/videos/sliders/autoplay-slider.mp4",
        description: "自動再生スライダー",
    },
    {
        key: "select",
        title: "Select Slider",
        video: "/videos/sliders/select-slider.mp4",
        description: "画像選択",
    },
    {
        key: "vertical",
        title: "Vertical Slider",
        video: "/videos/sliders/vertical-slider.mp4",
        description: "画像選択",
    },
    {
        key: "centerCarousel",
        title: "Center Carousel Slider",
        video: "/videos/sliders/center-carousel-slider.mp4",
        description: "",
    },
    {
        key: "centerFocus",
        title: "Center Focus Slider",
        video: "/videos/sliders/center-focus-slider.mp4",
        description: "",
    },
    {
        key: "heroCarousel",
        title: "Hero Carousel Slider",
        video: "/videos/sliders/hero-carousel-slider.mp4",
        description: "",
    },
    {
        key: "Carousel3D",
        title: "3D Carousel Slider",
        video: "/videos/sliders/carousel-3d-slider.mp4",
        description: "",
    },
    {
        key: "Split",
        title: "Split Slider",
        video: "/videos/sliders/split-slider.mp4",
        description: "",
    },
    {
        key: "SkewedScroll",
        title: "Skewed Scroll Slider",
        video: "/videos/sliders/skew-scroll-slider.mp4",
        description: "",
    },
    {
        key: "ForestSlider",
        title: "Forest Slider",
        video: "",
        description: "",
    },
    {
        key: "AnimeSlider",
        title: "Anime Slider",
        video: "",
        description: "",
    },
    {
        key: "Fancy",
        title: "Fancy Slider",
        video: "",
        description: "",
    },
];