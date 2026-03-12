import { lineMap } from "./lineMap";
import { Suspense } from "react";
import { PageLoader } from "@/components/ui/PageLoader";

interface Props {
    animationKey: string;
}

export function LinePreview({ animationKey }: Props) {
    const AnimationComponent = lineMap[animationKey];
    if (!AnimationComponent) return null;

    return (
            <div className="w-full aspect-video border rounded-lg p-4 overflow-hidden flex justify-center items-center">
                <Suspense fallback={<PageLoader />}>
                    <AnimationComponent />
                </Suspense>
            </div>
    );
}