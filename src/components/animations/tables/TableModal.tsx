import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TablePreview } from "./TablePreview";
import { tableData } from "./tableData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function TableModal({ animationKey, onClose }: Props) {
    const tableTitle = tableData.find((s) => s.key === animationKey)?.title ?? "Table Preview";

    return (
        <Dialog open={!!animationKey} onOpenChange={onClose}>
            <DialogContent className="pt-8 max-w-3xl w-[80%] overflow-hidden">
                <DialogHeader>
                    <DialogTitle>
                        {tableTitle}
                    </DialogTitle>
                    <DialogDescription>
                        プレビューを確認できます
                    </DialogDescription>
                </DialogHeader>

                {animationKey && <TablePreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}