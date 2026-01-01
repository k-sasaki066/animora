export default function GooeyFilter({
    id = "goo",
    blur = 10,
    intensity = 30,
    threshold = -15,
}: {
    id?: string
    blur?: number
    intensity?: number
    threshold?: number
}) {
    return (
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <filter id={id}>
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation={blur}
                    result="blur"
                />
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values={`
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 ${intensity} ${threshold}
                    `}
                    result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </svg>
    )
}