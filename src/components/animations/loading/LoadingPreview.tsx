import { loadingMap } from "./loadingMap";

interface Props {
    animationKey: string;
    paused?: boolean;
}

export function LoadingPreview({ animationKey, paused }: Props) {
    const AnimationComponent = loadingMap[animationKey];
    if (!AnimationComponent) return null;

    return (
        <div className="w-full aspect-video border rounded-lg p-4 overflow-hidden flex justify-center items-center">
            <AnimationComponent paused={paused} />
        </div>
    );
}