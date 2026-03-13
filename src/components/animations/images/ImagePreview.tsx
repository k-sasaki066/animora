import { imageMap } from "./imageMap";
import { Suspense } from "react";
import { PageLoader } from "@/components/ui/PageLoader";

interface Props {
    animationKey: string;
}

export function ImagePreview({ animationKey }: Props) {
    const AnimationComponent = imageMap[animationKey];
    if (!AnimationComponent) return null;

    return (
        <div className="w-full aspect-video space-y-6 flex justify-center items-center border rounded-lg p-4 overflow-hidden">
            <Suspense fallback={<PageLoader />}>
                <AnimationComponent />
            </Suspense>
        </div>
    );
}