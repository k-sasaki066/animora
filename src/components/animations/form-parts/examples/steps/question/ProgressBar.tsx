"use client";

type ProgressBarProps = {
    total: number;
    currentStep: number;
};

export default function ProgressBar({
    total,
    currentStep,
}: ProgressBarProps) {
    return (
        <ul
            className="flex mb-8"
            role="list"
            aria-label="Form progress"
        >
            {Array.from({ length: total }).map((_, i) => (
                <li key={i} className="flex-1 relative">
                    <div
                        aria-current={i === currentStep ? "step" : undefined}
                        className={`relative w-6 h-6 mx-auto text-xs flex items-center justify-center rounded-full border z-50
                            ${i <= currentStep
                                ? "bg-indigo-500 text-white border-indigo-500"
                                : "bg-white text-gray-400 border-gray-300"
                            }
                        `}
                    >
                        {i + 1}
                    </div>

                    {i !== 0 && (
                        <div
                            className={`absolute top-1/2 -translate-y-1/2 -left-1/2 w-full h-1 z-0
                                ${i <= currentStep
                                    ? "bg-indigo-500"
                                    : "bg-gray-300"
                                }
                            `}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}