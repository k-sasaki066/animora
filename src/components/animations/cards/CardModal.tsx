import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CardPreview } from "./CardPreview";
import { cardData } from "./cardData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function CardModal({ animationKey, onClose }: Props) {
    const animationTitle = cardData.find((s) => s.key === animationKey)?.title ?? "Card Preview";

    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="pt-8 max-w-3xl w-[80%] overflow-hidden">
                <DialogHeader>
                    <DialogTitle>
                        {animationTitle}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <CardPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}