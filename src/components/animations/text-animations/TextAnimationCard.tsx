import { Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card";

interface Props {
    title: string;
    previewText: string;
    onClick: () => void;
}

export function TextAnimationCard({ title, previewText, onClick }: Props) {
    return (
        <Card
        onClick={onClick}
        className="cursor-pointer hover:shadow-lg transition"
        >
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-center text-gray-400 line-clamp-2">
                {previewText}
                </p>
            </CardContent>
        </Card>
    );
}