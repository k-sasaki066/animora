import { Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card";
import { LoadingPreview } from "./LoadingPreview";
import { PlusButton } from "@/components/ui/PlusButton";
import { useInView } from "@/hooks/useInView";

interface Props {
    title: string;
    animationKey: string;
    onClick: () => void;
    paused?: boolean;
}

export function LoadingCard({ title, animationKey, onClick, paused }: Props) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const shouldPause = paused || !inView;

    return (
        <Card ref={ref} className="relative w-70">
            <PlusButton onClick={onClick} />

            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="px-2 w-full flex items-center justify-center overflow-hidden">
                <LoadingPreview
                    animationKey={animationKey}
                    paused={shouldPause}
                />
            </CardContent>
        </Card>
    );
}