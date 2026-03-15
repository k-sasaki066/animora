import { Dialog, DialogContent, DialogHeader,DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FormPartPreview } from "./FormPartPreview";
import { formPartData } from "./formPartData";

interface Props {
    animationKey: string | null;
    onClose: () => void;
}

export function FormPartModal({ animationKey, onClose }: Props) {
    const animationTitle = formPartData.find((s) => s.key === animationKey)?.title ?? "Form Part Preview";

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

                {animationKey && <FormPartPreview animationKey={animationKey} />}
            </DialogContent>
        </Dialog>
    );
}