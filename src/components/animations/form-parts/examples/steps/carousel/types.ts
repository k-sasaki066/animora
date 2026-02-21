export type FormData = {
    name: string;
    email: string;
    choice: string;
};

export type Errors = Partial<Record<keyof FormData, string>>;

export type StepComponentProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    errors: Errors;
    reduce: boolean;
};
