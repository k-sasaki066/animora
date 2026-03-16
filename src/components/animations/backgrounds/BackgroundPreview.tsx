import { backgroundMap } from "./backgroundMap";
import { Suspense } from "react";
import { PageLoader } from "@/components/ui/PageLoader";

interface Props {
    animationKey: string;
}

export function BackgroundPreview({ animationKey }: Props) {
    const AnimationComponent = backgroundMap[animationKey];

    return (
        <div className="w-full aspect-video border rounded-lg p-4 overflow-hidden flex justify-center items-center">
            <Suspense fallback={<PageLoader />}>
                <AnimationComponent />
            </Suspense>
        </div>
    );
}