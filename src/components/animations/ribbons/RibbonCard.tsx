import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlusButton } from "@/components/ui/PlusButton";

interface Props {
    title: string;
    image: string;
    onClick: () => void;
}

export function RibbonCard({ title, image, onClick }: Props) {
    return (
        <Card className="relative w-70">
            <PlusButton onClick={onClick} />

            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="px-2 w-full flex items-center justify-center overflow-hidden">
                <picture className="w-full h-full">
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