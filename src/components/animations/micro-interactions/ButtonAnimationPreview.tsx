import { buttonAnimationMap } from "./buttonAnimationMap";
import { Suspense } from "react";
import { PageLoader } from "@/components/ui/PageLoader";
import type { ButtonParams } from "./button-animation";

interface Props {
    animationKey: string;
    params: ButtonParams;
}

export function ButtonAnimationPreview({ animationKey, params }: Props) {
    const meta = buttonAnimationMap[animationKey];
    if (!meta) return null;

    const AnimationComponent = meta?.component;

    const mergedParams = {
        ...meta.defaultParams,
        ...params,
    };

    return (
        <div className="w-full aspect-video border rounded-lg p-4 overflow-hidden flex justify-center items-center">
            <Suspense fallback={<PageLoader />}>
                <AnimationComponent {...mergedParams} />
            </Suspense>
        </div>
    );
}