import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type FormPartComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const formPartMap: Record<string, FormPartComponent> = {
    floatingLabel: lazy(() =>
    import("./examples/inputs/floating-label/FloatingLabelInput")
    ),
    liftedLabel: lazy(() =>
        import("./examples/inputs/lifted-label/LiftedLabelInput")
    ),

    softDropSelect: lazy(() =>
        import("./examples/selects/soft-drop/SoftDropSelect")
    ),
    multiSelect: lazy(() =>
        import("./examples/selects/multi/MultiSelect")
    ),

    radioSlide: lazy(() =>
        import("./examples/radios/RadioSlideButton")
    ),
    popRadio: lazy(() =>
        import("./examples/radios/PopRadioButton")
    ),
    colorChangeRadio: lazy(() =>
        import("./examples/radios/ColorChangeRadio")
    ),
    rippleRadio: lazy(() =>
        import("./examples/radios/RippleRadio")
    ),
    segmentedControl: lazy(() =>
        import("./examples/radios/SegmentedControlRadio")
    ),
    iconRadio: lazy(() =>
        import("./examples/radios/IconRadio")
    ),

    foldCheck: lazy(() =>
        import("./examples/checkboxes/FoldCheck")
    ),
    simpleCheck: lazy(() =>
        import("./examples/checkboxes/SimpleCheck")
    ),
    colorfulCheck: lazy(() =>
        import("./examples/checkboxes/ColorfulCheck")
    ),
    cardCheck: lazy(() =>
        import("./examples/checkboxes/CardCheck")
    ),
    pencilCheck: lazy(() =>
        import("./examples/checkboxes/PencilCheck")
    ),

    starGlow: lazy(() =>
        import("./examples/rates/StarGlowRate")
    ),
    starInput: lazy(() =>
        import("./examples/rates/StarInputRate")
    ),
    starSlider: lazy(() =>
        import("./examples/rates/StarSliderRate")
    ),

    questionStep: lazy(() =>
        import("./examples/steps/question/QuestionStep")
    ),
    carouselStep: lazy(() =>
        import("./examples/steps/carousel/CarouselStep")
    ),
    cardStepper: lazy(() =>
        import("./examples/steps/card-stepper/CardStepper")
    ),
};