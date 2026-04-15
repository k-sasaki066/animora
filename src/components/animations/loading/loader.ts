import type { AnimationBaseParams } from "../core/AnimationBaseParams";

type LoaderBaseProps = {
    paused?: boolean;
};

export type LoaderParams = AnimationBaseParams;

export type LoaderProps = LoaderBaseProps & AnimationBaseParams;