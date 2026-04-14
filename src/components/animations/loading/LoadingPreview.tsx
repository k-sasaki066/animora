import { loadingMap } from "./loadingMap";
import { Suspense } from "react";
import { PageLoader } from "@/components/ui/PageLoader";
import type { LoaderProps } from "./loader";

interface Props {
    animationKey: string;
    params: LoaderProps;
}

export function LoadingPreview({ animationKey, params }: Props) {
    const meta = loadingMap[animationKey];
    if (!meta) return null;
    const AnimationComponent = meta?.component;

    const mergedParams = {
        ...meta.defaultParams,
        ...params,
    };

    return (
        <div className="w-full aspect-video border rounded-lg p-4 overflow-hidden flex justify-center items-center">
            <Suspense fallback={<PageLoader />}>
                <AnimationComponent  {...mergedParams} />
            </Suspense>
        </div>
    );
}