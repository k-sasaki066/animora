import { sliderMap } from "./sliderMap";

interface SliderPreviewProps {
    sliderKey: string;
}

export function SliderPreview({ sliderKey }: SliderPreviewProps) {
    const SliderComponent = sliderMap[sliderKey];

    return (
        <div className="space-y-4 w-full max-w-5xl mx-auto">
            <div className="border rounded-lg p-2">
                <SliderComponent />
            </div>
        </div>
    );
}