import { getSkewedSliderConfig } from "@/lib/responsive/skewedConfig";

interface Props {
    title: string;
    description: string;
    containerWidth: number;
};

export function SkewedPageText({ title, description, containerWidth, }: Props) {
    const { titleClass, descriptionClass } = getSkewedSliderConfig(containerWidth)

    return (
        <div className="w-[60%] flex flex-col items-center justify-canter text-center text-white">
            <h2 className={`uppercase mb-4 ${titleClass}`}>{title}</h2>
            <p className={descriptionClass}>{description}</p>
        </div>
    )
}