import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LoadingPreview } from "./LoadingPreview";
import { loadingData } from "./loadingData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function LoadingModal({ animationKey, onClose }: Props) {
    const animationTitle = loadingData.find((s) => s.key === animationKey)?.title ?? "Loading Preview";

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

                {animationKey && <LoadingPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}