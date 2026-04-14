type LoaderBaseProps = {
    paused?: boolean;
};

export type LoaderParams = {
    speed?: number;
    size?: number;
    color?: string;
    delayStep?: number;
    scale?: number;
    xRange?: number;
    yRange?: number;
    boxCount?: number,
};

export type LoaderProps = LoaderBaseProps & LoaderParams;