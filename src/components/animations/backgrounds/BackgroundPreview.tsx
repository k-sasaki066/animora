import { backgroundMap } from "./backgroundMap";

interface Props {
    animationKey: string;
    showTitle?: boolean;
}

export function BackgroundPreview({ animationKey, showTitle = false, }: Props) {
    const AnimationComponent = backgroundMap[animationKey];

    return (
        <div className="w-full space-y-6 text-center">
            {showTitle && (
                <h2 className="text-2xl font-bold mb-4">{animationKey}</h2>
            )}

            <div className="w-full border rounded-lg p-8 overflow-hidden">
                <AnimationComponent />
            </div>
        </div>
    );
}