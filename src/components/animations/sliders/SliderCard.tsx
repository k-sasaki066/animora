import { Card, CardHeader, CardTitle, CardContent }from "@/components/ui/card";

interface SliderCardProps {
    title: string;
    video: string;
    onClick: () => void;
}

export function SliderCard({
    title,
    video,
    onClick,
}: SliderCardProps) {
    return (
        <Card
            onClick={onClick}
            className="max-w-140 mx-auto cursor-pointer transition hover:scale-102"
        >
            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                />
            </CardContent>
        </Card>
    );
}