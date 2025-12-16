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
];