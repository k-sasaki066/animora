import { Card, CardHeader, CardTitle, CardContent }from "@/components/ui/card";

interface SliderCardProps {
    title: string;
    thumbnail: string;
    description?: string;
    onClick: () => void;
}

export function SliderCard({
    title,
    thumbnail,
    description,
    onClick,
    }: SliderCardProps) {
    return (
        <Card
        onClick={onClick}
        className="cursor-pointer transition hover:scale-102"
        >
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full aspect-video object-cover"
                />

                {description && (
                <p className="text-sm text-gray-500 text-center">
                    {description}
                </p>
                )}
            </CardContent>
        </Card>
    );
}