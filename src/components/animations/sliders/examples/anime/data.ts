export interface Anime {
    id: number
    title1: string
    title2: string
    image: string
    bg: string
}

export const slides: Anime[] = [
    {
        id: 0,
        title1: "Veggie",
        title2: "Burger",
        image: "https://mverissimo.github.io/tweenslideshow/dist/assets/images/burger.png",
        bg: "bg-[#3eac8b]",
    },
    {
        id: 1,
        title1: "Lost",
        title2: "In Space",
        image: "https://mverissimo.github.io/tweenslideshow/dist/assets/images/astronaut.png",
        bg: "bg-[#0f2f47]",
    },
    {
        id: 2,
        title1: "I Love",
        title2: "Coffee",
        image: "https://mverissimo.github.io/tweenslideshow/dist/assets/images/cup-2.png",
        bg: "bg-[#e2a486]"
    },
]