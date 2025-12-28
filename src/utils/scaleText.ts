type ScaleOptions = {
    min: number;
    max: number;
    ratio: number; // 親幅に対する割合
};

export function scaleText(
    containerWidth: number,
    { min, max, ratio }: ScaleOptions
) {
    if (!containerWidth) return min;

    const size = containerWidth * ratio;
    return Math.min(Math.max(size, min), max);
}