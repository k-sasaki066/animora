import { sliderMap } from "./sliderMap";
import { Suspense } from "react";
import { PageLoader } from "@/components/ui/PageLoader";

interface SliderPreviewProps {
    sliderKey: string;
}

export function SliderPreview({ sliderKey }: SliderPreviewProps) {
    const SliderComponent = sliderMap[sliderKey];

    return (
        <div className="w-full mx-auto border rounded-lg p-2 overflow-auto no-scrollbar flex justify-center">
                <Suspense fallback={<PageLoader />}>
                    <SliderComponent />
                </Suspense>
        </div>
    );
}