export type SliderField<K extends string> = {
    key: K;
    label: string;
    min: number;
    max: number;
    step: number;
    suffix?: string;
    format?: (v: number) => string;
};

export type ColorField<K extends string> = {
    key: K;
    label: string;
    type: "color";
};

export type ParamField<K extends string> =
    | (SliderField<K> & { type?: "slider" })
    | ColorField<K>;

type ButtonSliderKey =
    | "speed"
    | "delayStep"
    | "size"
    | "scale"
    | "xRange"
    | "yRange"
    | "rotate"
    | "boxCount"
    | "color";

export const sliders: ParamField<ButtonSliderKey>[] = [
    {
        key: "speed",
        label: "Speed",
        min: 0.1,
        max: 5,
        step: 0.1,
        suffix: "s",
    },
    {
        key: "delayStep",
        label: "Delay",
        min: 0,
        max: 1,
        step: 0.01,
        suffix: "s",
        format: (v) => v.toFixed(2),
    },
    {
        key: "size",
        label: "Size",
        min: 1,
        max: 150,
        step: 1,
        suffix: "px",
    },
    {
        key: "scale",
        label: "Scale",
        min: 1,
        max: 5,
        step: 0.1,
    },
    {
        key: "xRange",
        label: "X Range",
        min: -50,
        max: 50,
        step: 1,
    },
    {
        key: "yRange",
        label: "Y Range",
        min: -50,
        max: 50,
        step: 1,
    },
    {
        key: "rotate",
        label: "Rotate",
        min: -90,
        max: 360,
        step: 5,
    },
    {
        key: "boxCount",
        label: "Count",
        min: 1,
        max: 10,
        step: 1,
    },
    {
        key: "color",
        label: "Color",
        type: "color",
    },
];