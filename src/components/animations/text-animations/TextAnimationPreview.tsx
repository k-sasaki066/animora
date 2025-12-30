import { textAnimationMap } from "./textAnimationMap";

interface Props {
    animationKey: string;
    showTitle?: boolean;
}

export function TextAnimationPreview({ animationKey, showTitle = false, }: Props) {
    const AnimationComponent = textAnimationMap[animationKey];

    return (
        <div className="w-full space-y-6 text-center">
            {showTitle && (
                <h2 className="text-2xl font-bold mb-4">{animationKey}</h2>
            )}

            <div className="w-full min-h-32 border rounded-lg p-4 overflow-hidden flex justify-center items-center">
                <AnimationComponent />
            </div>
        </div>
    );
}