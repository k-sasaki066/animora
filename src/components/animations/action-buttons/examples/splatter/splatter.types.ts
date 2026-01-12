export type SplatterType = 'round' | 'ring' | 'star' | 'square';

export type Splatter = {
    id: number;
    type: SplatterType;
    x: number;
    y: number;
    angle: number;
    scale: number;
};