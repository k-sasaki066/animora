export interface FormPartItem {
    key: string;
    title: string;
    video: string;
}

export const formPartData: FormPartItem[] = [
    {
        key: "floatingLabel",
        title: "Floating Label",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/floating-label.mp4`,
    },
    {
        key: "liftedLabel",
        title: "Lifted Label",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/lifted-label.mp4`,
    },
    {
        key: "softDropSelect",
        title: "Soft Drop Select",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/soft-drop-select.mp4`,
    },
    {
        key: "multiSelect",
        title: "Multi Select",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/multi-select.mp4`,
    },

    // radios
    {
        key: "radioSlide",
        title: "Radio Slide",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/radio-slide.mp4`,
    },
    {
        key: "popRadio",
        title: "Pop Radio",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/pop-radio.mp4`,
    },
    {
        key: "colorChangeRadio",
        title: "Color Change Radio",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/color-change-radio.mp4`,
    },
    {
        key: "rippleRadio",
        title: "Ripple Radio",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/ripple-radio.mp4`,
    },
    {
        key: "segmentedControl",
        title: "Segmented Control",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/segmented-control.mp4`,
    },
    {
        key: "iconRadio",
        title: "Icon Radio",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/icon-radio.mp4`,
    },

    // checkboxes
    {
        key: "foldCheck",
        title: "Fold Check",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/fold-check.mp4`,
    },
    {
        key: "simpleCheck",
        title: "Simple Check",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/simple-check.mp4`,
    },
    {
        key: "colorfulCheck",
        title: "Colorful Check",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/colorful-check.mp4`,
    },
    {
        key: "cardCheck",
        title: "Card Check",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/card-check.mp4`,
    },
    {
        key: "pencilCheck",
        title: "Pencil Check",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/pencil-check.mp4`,
    },

    //rate
    {
        key: "starGlow",
        title: "Star Glow",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/star-glow.mp4`,
    },
    {
        key: "starInput",
        title: "Star Input",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/star-input.mp4`,
    },
    {
        key: "starSlider",
        title: "Star Slider",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/star-slider.mp4`,
    },

    //steps
    {
        key: "questionStep",
        title: "Question Step",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/question-step.mp4`,
    },
    {
        key: "carouselStep",
        title: "Carousel Step",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/carousel-step.mp4`,
    },
    {
        key: "cardStepper",
        title: "Card Stepper",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/form-parts/card-stepper.mp4`,
    },
];