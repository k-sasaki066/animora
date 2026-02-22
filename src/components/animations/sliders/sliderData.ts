export interface SliderItem {
    key: string;
    title: string;
    thumbnail: string;
    description?: string;
}

export const sliderData: SliderItem[] = [
    {
        key: "basic",
        title: "Basic Slider",
        thumbnail: "/fruits.jpg",
        description: "左右にスライドする基本形",
    },
    {
        key: "fade",
        title: "Fade Slider",
        thumbnail: "/fruits.jpg",
        description: "フェード切り替え",
    },
    {
        key: "autoplay",
        title: "Autoplay Slider",
        thumbnail: "/fruits.jpg",
        description: "自動再生スライダー",
    },
    {
        key: "select",
        title: "Select Slider",
        thumbnail: "/fruits.jpg",
        description: "画像選択",
    },
    {
        key: "vertical",
        title: "Vertical Slider",
        thumbnail: "/fruits.jpg",
        description: "画像選択",
    },
    {
        key: "centerCarousel",
        title: "Center Carousel Slider",
        thumbnail: "/river.jpg",
        description: "",
    },
    {
        key: "centerFocus",
        title: "Center Focus Slider",
        thumbnail: "/sea.jpg",
        description: "",
    },
    {
        key: "heroCarousel",
        title: "Hero Carousel Slider",
        thumbnail: "/lavender.jpg",
        description: "",
    },
    {
        key: "Carousel3D",
        title: "3D Carousel Slider",
        thumbnail: "/leading.jpg",
        description: "",
    },
    {
        key: "Split",
        title: "Split Slider",
        thumbnail: "/river.jpg",
        description: "",
    },
    {
        key: "SkewedScroll",
        title: "Skewed Scroll Slider",
        thumbnail: "/fruits.jpg",
        description: "",
    },
    {
        key: "ForestSlider",
        title: "Forest Slider",
        thumbnail: "/lavender.jpg",
        description: "",
    },
    {
        key: "AnimeSlider",
        title: "Anime Slider",
        thumbnail: "/leading.jpg",
        description: "",
    },
    {
        key: "Fancy",
        title: "Fancy Slider",
        thumbnail: "/sea.jpg",
        description: "",
    },
];