export type Card = {
    name: string;
    level: number;
    description: string;
    image: string;
    bg: string;
    color: string;
    training: number;
    speed: number;
    cost: number;
};

export const CARDS: Card[] = [
    {
        name: "The Barbarian",
        level: 4,
        description:
            "The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression.",
        image:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png",
        bg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg",
        color: "bg-orange-400",
        training: 20,
        speed: 16,
        cost: 150,
    },
    {
        name: "The Archer",
        level: 5,
        description:
            "The Archer is a female warrior with sharp eyes and deadly precision.",
        image:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png",
        bg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg",
        color: "bg-pink-500",
        training: 16,
        speed: 50,
        cost: 180,
    },
    {
        name: "The Giant",
        level: 5,
        description:
            "Slow, steady and powerful, Giants soak up huge amounts of damage.",
        image:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png",
        bg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg",
        color: "bg-orange-500",
        training: 30,
        speed: 10,
        cost: 300,
    },
];