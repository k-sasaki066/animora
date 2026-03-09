import { Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card";
import { PlusButton } from "@/components/ui/PlusButton";

interface Props {
    title: string;
    image: string;
    onClick: () => void;
}

export function GraphCard({ title, image, onClick }: Props) {
    return (
        <Card className="relative">
            <PlusButton onClick={onClick} />

            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="px-2 w-full flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-md"
                />
            </CardContent>
        </Card>
    );
}