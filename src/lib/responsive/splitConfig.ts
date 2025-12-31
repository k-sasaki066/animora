import { BREAKPOINTS } from "./breakpoints";

export interface SplitConfig {
    width: number,
    fontSize: number,
    indicatorSize: number,
}

export function getSplitConfig(width: number): SplitConfig {

    if (!width) {
        return {
            width: 300,
            fontSize: 20,
            indicatorSize: 18,
        };
    }

    if (width < 640) {
        return {
            width: width * 0.9,
            fontSize: width * 0.06,
            indicatorSize: 16,
        };
    }

    if (width < 1024) {
        return {
            width: width * 0.7,
            fontSize: width * 0.05,
            indicatorSize: 18,
        };
    }

    return {
        width: Math.min(width * 0.6, 560),
        fontSize: 28,
        indicatorSize: 20,
    };
}