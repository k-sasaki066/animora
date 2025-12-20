import { useWindowSize } from "@/lib/responsive/useWindowSize"
import { getSkewedSliderConfig } from "@/lib/responsive/skewedConfig"

interface Props {
    title: string
    description: string
}

export function SkewedPageText({ title, description }: Props) {
    const width = useWindowSize()
    const { titleClass, descriptionClass } = getSkewedSliderConfig(width)

    return (
        <div className="flex flex-col items-center justify-canter text-center text-white">
            <h2 className={`uppercase mb-4 ${titleClass}`}>{title}</h2>
            <p className={descriptionClass}>{description}</p>
        </div>
    )
}