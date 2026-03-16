import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PaginationPreview } from "./PaginationPreview";
import { paginationData } from "./paginationData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function PaginationModal({ animationKey, onClose }: Props) {
    const animationTitle = paginationData.find((s) => s.key === animationKey)?.title ?? "Pagination Preview";

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

                {animationKey && <PaginationPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}