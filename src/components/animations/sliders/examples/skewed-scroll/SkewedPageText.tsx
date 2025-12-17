interface Props {
    title: string
    description: string
}

export function SkewedPageText({ title, description }: Props) {
    return (
        <div className="flex flex-col items-center justify-canter text-white px-20">
            <h2 className="text-2xl uppercase mb-4">{title}</h2>
            <p className="text-lg text-center">{description}</p>
        </div>
    )
}