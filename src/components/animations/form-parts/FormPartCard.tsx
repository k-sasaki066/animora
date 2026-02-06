"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FormPartPreview } from "./FormPartPreview";

interface Props {
    title: string;
    animationKey: string;
    onClick: () => void;
}

export function FormPartCard({ title, animationKey, onClick }: Props) {
    return (
        <Card
            onClick={onClick}
            className="cursor-pointer hover:shadow-lg transition w-70"
        >
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>

            <CardContent className="px-2 w-full flex items-center justify-center overflow-hidden">
                {/* 一覧でアニメーションを再生 */}
                <FormPartPreview animationKey={animationKey} />
            </CardContent>
        </Card>
    );
}