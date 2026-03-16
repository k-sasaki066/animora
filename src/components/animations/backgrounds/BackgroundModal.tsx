import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BackgroundPreview } from "./BackgroundPreview";
import { backgroundData } from "./backgroundData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function BackgroundModal({ animationKey, onClose }: Props) {
    const animationTitle = backgroundData.find((s) => s.key === animationKey)?.title ?? "Background Preview";

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

                {animationKey && <BackgroundPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}