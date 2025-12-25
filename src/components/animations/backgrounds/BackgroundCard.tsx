import { Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card";
import { BackgroundPreview } from "./BackgroundPreview";

interface Props {
    title: string;
    animationKey: string;
    onClick: () => void;
}

export function BackgroundCard({ title, animationKey, onClick }: Props) {
    return (
        <Card
        onClick={onClick}
        className="cursor-pointer hover:shadow-lg transition"
        >
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>

            <CardContent
                className="px-2 h-auto w-full flex items-center justify-center overflow-hidden"
            >
                {/* 一覧でアニメーションを再生 */}
                <BackgroundPreview animationKey={animationKey} />
            </CardContent>
        </Card>
    );
}