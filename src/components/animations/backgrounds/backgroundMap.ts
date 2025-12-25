import type { ComponentType } from "react";
import WaveBackground from "./examples/WaveBackground";

export const backgroundMap: Record<string, ComponentType> = {
    wave: WaveBackground,
};