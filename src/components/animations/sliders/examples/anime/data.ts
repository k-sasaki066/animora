export interface Anime {
    id: number
    title1: string
    title2: string
    image: string
    bgColor: string
}

export const slides: Anime[] = [
    {
        id: 0,
        title1: "Veggie",
        title2: "Burger",
        image: "https://mverissimo.github.io/tweenslideshow/dist/assets/images/burger.png",
        bgColor: "#3eac8b",
    },
    {
        id: 1,
        title1: "Lost",
        title2: "In Space",
        image: "https://mverissimo.github.io/tweenslideshow/dist/assets/images/astronaut.png",
        bgColor: "#0f2f47",
    },
    {
        id: 2,
        title1: "I Love",
        title2: "Coffee",
        image: "https://mverissimo.github.io/tweenslideshow/dist/assets/images/cup-2.png",
        bgColor: "#e2a486"
    },
]