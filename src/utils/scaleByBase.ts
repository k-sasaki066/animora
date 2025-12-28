interface ScaleByBaseOptions {
    base: number;     // デザイン基準値（px）
    baseWidth?: number;
}

export function scaleByBase(
    currentWidth: number,
    { base, baseWidth = 280 }: ScaleByBaseOptions
) {
    if (!currentWidth) return base;
    return (currentWidth / baseWidth) * base;
}