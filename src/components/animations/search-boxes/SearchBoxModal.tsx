import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SearchBoxPreview } from "./SearchBoxPreview";
import { searchBoxData } from "./searchBoxData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function SearchBoxModal({ animationKey, onClose }: Props) {
    const animationTitle = searchBoxData.find((s) => s.key === animationKey)?.title ?? "Search Box Preview";

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

                {animationKey && <SearchBoxPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}