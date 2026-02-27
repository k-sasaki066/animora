import { Transition } from "framer-motion";

const circleTransition: Transition = {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
    };

const createFloat = (x: number[], y: number[]) => ({
    animate: { x, y },
    transition: circleTransition,
});

export const BUBBLES = [
    {
        float: createFloat(
            [0, 20, -10, -20, 10, 0],
            [0, -10, -30, -10, 10, 0]
        ),
        className:
            "w-125 -bottom-63.5 -left-64 bg-white opacity-30",
    },
    {
        float: createFloat(
            [20, -10, 0, 20, -10, 20],
            [0, 20, -10, 0, 20, 0]
        ),
        className:
            "w-30 bottom-53.5 -left-18 bg-white opacity-50",
    },
    {
        float: createFloat(
            [-30, -10, 0, 20, 15, -30],
            [10, 0, -20, 10, -20, 10]
        ),
        className:
            "w-7.5 top-46 left-19.5 bg-white opacity-60",
    },
    {
        float: createFloat(
            [-30, -10, 0, 20, 15, -30],
            [10, 0, -20, 10, -20, 10]
        ),
        className:
            "w-55 -bottom-25 left-25 border-2 border-white opacity-60",
    },
    {
        float: createFloat(
            [20, -10, 0, 20, -10, 20],
            [0, 20, -10, 0, 20, 0]
        ),
        className:
            "w-12.5 bottom-7.5 left-74.5 bg-white opacity-50",
    },
    {
        float: createFloat(
            [-30, -10, 0, 20, 15, -30],
            [10, 0, -20, 10, -20, 10]
        ),
        className:
            "w-75 -top-37.5 -right-20 border-2 border-white opacity-60",
    },
    {
        float: createFloat(
            [0, 20, -10, -20, 10, 0],
            [0, -10, -30, -10, 10, 0]
        ),
        className:
            "w-42 top-17.75 -right-26.5 bg-white opacity-45",
    },
    {
        float: createFloat(
            [20, -10, 0, 20, -10, 20],
            [0, 20, -10, 0, 20, 0]
        ),
        className:
            "w-5 top-46 right-19.5 bg-white opacity-70",
    },
];
