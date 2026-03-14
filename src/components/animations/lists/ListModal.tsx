import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ListPreview } from "./ListPreview";
import { listData } from "./listData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function ListModal({ animationKey, onClose }: Props) {
    const animationTitle = listData.find((s) => s.key === animationKey)?.title ?? "List Preview";

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

                {animationKey && <ListPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}