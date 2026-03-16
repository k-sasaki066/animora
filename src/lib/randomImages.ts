export function getRandomImages(count: number) {
    const allImages = Array.from({ length: 36 }, (_, i) =>
        `/images/samples/sample-${String(i + 1).padStart(2, "0")}.webp`
    );

    return allImages
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}