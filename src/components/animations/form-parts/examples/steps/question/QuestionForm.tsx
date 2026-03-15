import { motion, AnimatePresence, Variants } from "framer-motion";

type QuestionFormProps = {
    QUESTIONS: string[];
    step: number;
    direction: 1 | -1;
    answers: string[];
    touched: boolean[];
    error: string | null;
    isSubmitting: boolean;
    isConfirmStep: boolean;
    reduce: boolean;
    textareaId: string;
    answerSchema: any;

    next: () => void;
    previous: () => void;
    updateAnswer: (value: string) => void;
    touchCurrent: () => void;
    onSubmit: (e: React.FormEvent) => void;
};

export default function QuestionForm({
    QUESTIONS,
    step,
    direction,
    answers,
    touched,
    error,
    isSubmitting,
    isConfirmStep,
    reduce,
    textareaId,
    answerSchema,
    next,
    previous,
    updateAnswer,
    touchCurrent,
    onSubmit,
}: QuestionFormProps) {
    const variants: Variants = {
        initial: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95,
        }),
            animate: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: reduce
                ? { duration: 0 }
                : { duration: 0.4, ease: "easeOut" },
            },
        exit: (dir: number) => ({
            x: dir > 0 ? -100 : 100,
            opacity: 0,
            scale: 0.95,
            transition: reduce
                ? { duration: 0 }
                : { duration: 0.3, ease: "easeIn" },
            }),
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="relative bg-white shadow-xl rounded-md p-6 overflow-y-auto min-h-65">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {!isConfirmStep ? (
                            <>
                                <h2 className="text-lg font-semibold mb-2 uppercase">
                                    Question {step + 1}
                                </h2>

                                <label
                                    htmlFor={`${textareaId}-${step}`}
                                    className="sr-only"
                                >
                                    Question {step + 1}
                                </label>

                                <p className="text-gray-600 mb-6 text-sm">
                                    {QUESTIONS[step]}
                                </p>

                                <textarea
                                    id={`${textareaId}-${step}`}
                                    name={`question-${step}`}
                                    value={answers[step]}
                                    onChange={(e) =>        updateAnswer(e.target.value)}
                                    onBlur={touchCurrent}
                                    className="w-full border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    rows={3}
                                    maxLength={100}
                                    aria-describedby={`error-${step}`}
                                    aria-invalid={touched[step] && !!error}
                                />

                                {touched[step] && error && (
                                    <p
                                        id={`error-${step}`}
                                        role="alert"
                                        aria-live="assertive"
                                        className="text-red-500 text-xs text-left mb-2"
                                    >
                                        {error}
                                    </p>
                                )}
                            </>
                        ) : (
                            <div
                                role="region" aria-labelledby="review-heading"
                            >
                                <h2
                                    id="review-heading"
                                    className="text-lg font-semibold mb-4 uppercase"
                                >
                                    Review Your Answers
                                </h2>

                                <div className="space-y-4">
                                    {QUESTIONS.map((q, i) => (
                                        <div key={i} className="text-sm">
                                            <p className="font-medium">{q}</p>
                                            <p className="text-gray-600 bg-gray-100 p-2 rounded mt-1">
                                                {answers[i]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between mt-4">
                            {step > 0 ? (
                                <button
                                    type="button"
                                    onClick={previous}
                                    className="text-sm px-4 py-1.5 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                >
                                    Prev
                                </button>
                            ) : (
                                <div />
                            )}

                            {!isConfirmStep ? (
                                <button
                                    type="button"
                                    onClick={next}
                                    disabled={
                                        !answerSchema.safeParse(answers[step]).success
                                    }
                                    aria-disabled={
                                        !answerSchema.safeParse(answers[step]).success
                                    }
                                    className="text-sm px-4 py-1.5 bg-indigo-500 text-white rounded-md disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-busy={isSubmitting}
                                    className="px-4 py-1.5 bg-green-500 text-white rounded-md disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-[#eee]"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </form>
    );
}