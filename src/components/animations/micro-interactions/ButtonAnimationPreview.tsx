import { buttonAnimationMap } from "./buttonAnimationMap";

interface Props {
    animationKey: string;
}

export function ButtonAnimationPreview({ animationKey }: Props) {
    const AnimationComponent = buttonAnimationMap[animationKey];
    if (!AnimationComponent) return null;

    return (
        <div className="w-full aspect-video border rounded-lg p-4 overflow-hidden flex justify-center items-center">
            <AnimationComponent />
        </div>
    );
}