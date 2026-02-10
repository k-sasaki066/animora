import type { ComponentType } from "react";
import FloatingLabelInput from "./examples/input/floating-label/FloatingLabelInput";
import LiftedLabelInput from "./examples/input/lifted-label/LiftedLabelInput";
import SoftDropSelect from "./examples/select/soft-drop/SoftDropSelect";
import MultiSelect from "./examples/select/multi/MultiSelect";

export const formPartMap: Record<string, ComponentType> = {
    floatingLabel: FloatingLabelInput,
    liftedLabel: LiftedLabelInput,
    softDropSelect: SoftDropSelect,
    multiSelect: MultiSelect,
};