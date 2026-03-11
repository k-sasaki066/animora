import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ButtonAnimationPreview } from "./ButtonAnimationPreview";
import { buttonAnimationData } from "./buttonAnimationData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function ButtonAnimationModal({ animationKey, onClose }: Props) {
    const animationTitle = buttonAnimationData.find((s) => s.key === animationKey)?.title ?? "Button Preview";

    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl w-[80%]">
                <DialogHeader>
                    <DialogTitle>
                        {animationTitle}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <ButtonAnimationPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}