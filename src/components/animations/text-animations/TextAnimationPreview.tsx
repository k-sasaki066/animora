import { textAnimationMap } from "./textAnimationMap";

interface Props {
    animationKey: string;
}

export function TextAnimationPreview({ animationKey }: Props) {
    const AnimationComponent = textAnimationMap[animationKey];

    return (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">{animationKey}</h2>

            <div className="border rounded-lg p-8">
                <AnimationComponent />
            </div>
        </div>
    );
}