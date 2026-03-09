import { Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card";
import { PlusButton } from "@/components/ui/PlusButton";

interface Props {
    title: string;
    image: string;
    mobileImage?: string;
    onClick: () => void;
}

export function TableCard({ title, image, mobileImage, onClick }: Props) {
    return (
        <Card className="relative">
            <PlusButton onClick={onClick} />

            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="px-2 w-full flex items-center justify-center overflow-hidden">
                <picture className="w-full h-full">
                    {mobileImage && (
                        <source
                            media="(max-width: 767px)"
                            srcSet={mobileImage}
                            className="w-full h-full object-cover"
                        />
                    )}

                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </picture>
            </CardContent>
        </Card>
    );
}