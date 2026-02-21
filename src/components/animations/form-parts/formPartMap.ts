import type { ComponentType } from "react";
import FloatingLabelInput from "./examples/inputs/floating-label/FloatingLabelInput";
import LiftedLabelInput from "./examples/inputs/lifted-label/LiftedLabelInput";
import SoftDropSelect from "./examples/selects/soft-drop/SoftDropSelect";
import MultiSelect from "./examples/selects/multi/MultiSelect";

import RadioSlideButton from "./examples/radios/RadioSlideButton";
import PopRadioButton from "./examples/radios/PopRadioButton";
import ColorChangeRadio from "./examples/radios/ColorChangeRadio";
import RippleRadio from "./examples/radios/RippleRadio";
import SegmentedControlRadio from "./examples/radios/SegmentedControlRadio";
import IconRadio from "./examples/radios/IconRadio";

import FoldCheck from "./examples/checkboxes/FoldCheck";
import SimpleCheck from "./examples/checkboxes/SimpleCheck";
import ColorfulCheck from "./examples/checkboxes/ColorfulCheck";
import CardCheck from "./examples/checkboxes/CardCheck";
import PencilCheck from "./examples/checkboxes/PencilCheck";

import StarGlowRate from "./examples/rates/StarGlowRate";
import StarInputRate from "./examples/rates/StarInputRate";
import StarSliderRate from "./examples/rates/StarSliderRate";

import QuestionStep from "./examples/steps/question/QuestionStep";
import CarouselStep from "./examples/steps/carousel/CarouselStep";

export const formPartMap: Record<string, ComponentType> = {
    floatingLabel: FloatingLabelInput,
    liftedLabel: LiftedLabelInput,
    softDropSelect: SoftDropSelect,
    multiSelect: MultiSelect,

    radioSlide: RadioSlideButton,
    popRadio: PopRadioButton,
    colorChangeRadio: ColorChangeRadio,
    rippleRadio: RippleRadio,
    segmentedControl: SegmentedControlRadio,
    iconRadio: IconRadio,

    foldCheck: FoldCheck,
    simpleCheck: SimpleCheck,
    colorfulCheck: ColorfulCheck,
    cardCheck: CardCheck,
    pencilCheck: PencilCheck,

    starGlow: StarGlowRate,
    starInput: StarInputRate,
    starSlider: StarSliderRate,

    questionStep: QuestionStep,
    carouselStep: CarouselStep,
};