import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type ActionButtonComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
>;

export const actionButtonMap: Record<string, ActionButtonComponent> = {
    particles: lazy(() => import("./examples/favorites/ParticlesHeart")),
    bubbly: lazy(() => import("./examples/favorites/BubblyHeart")),
    standard: lazy(() => import("./examples/favorites/StandardHeart")),
    rotate: lazy(() => import("./examples/favorites/RotateHeart")),
    reaction: lazy(() => import("./examples/favorites/ReactionHeart")),
    circle: lazy(() => import("./examples/favorites/CircleHeart")),
    burstCircle: lazy(() => import("./examples/favorites/burst/BurstCircleHeart")),
    paws: lazy(() => import("./examples/favorites/paws/PawsHeart")),

    upload: lazy(() => import("./examples/progress/UploadProgress")),
    truck: lazy(() => import("./examples/progress/truck/TruckProgress")),
    holdDown: lazy(() => import("./examples/progress/HoldDownProgress")),
    download: lazy(() => import("./examples/progress/DownloadProgress")),

    splatter: lazy(() => import("./examples/splatter/SplatterButton")),
    addMenu: lazy(() => import("./examples/AddMenuButton")),
    neumorphism: lazy(() => import("./examples/NeumorphismButton")),

    rotateToggle: lazy(() => import("./examples/toggles/RotateToggle")),
    slideToggle: lazy(() => import("./examples/toggles/SlideToggle")),
    circleExpandToggle: lazy(() => import("./examples/toggles/CircleExpandToggle")),
    rockerToggle: lazy(() => import("./examples/toggles/RockerToggle")),
    blobToggle: lazy(() => import("./examples/toggles/BlobToggle")),
    colorShiftToggle: lazy(() => import("./examples/toggles/ColorShiftToggle")),
    monochromeToggle: lazy(() => import("./examples/toggles/MonochromeToggle")),
    morphingToggle: lazy(() => import("./examples/toggles/MorphingToggle")),
    sunMoonToggle: lazy(() => import("./examples/toggles/SunMoonToggle")),
    lightToggle: lazy(() => import("./examples/toggles/LightToggle")),
    lockToggle: lazy(() => import("./examples/toggles/LockToggle")),
};