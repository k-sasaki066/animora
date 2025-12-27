import { imageMap } from "./imageMap";

interface Props {
    animationKey: string;
    showTitle?: boolean;
}

export function ImagePreview({ animationKey, showTitle = false, }: Props) {
    const AnimationComponent = imageMap[animationKey];

    return (
        <div className="w-full space-y-6 text-center">
            {showTitle && (
                <h2 className="text-2xl font-bold mb-4">{animationKey}</h2>
            )}

            <div className="w-full border rounded-lg p-4 overflow-hidden">
                <AnimationComponent />
            </div>
        </div>
    );
}