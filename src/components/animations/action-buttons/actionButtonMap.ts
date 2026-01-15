import type { ComponentType } from "react";
import StandardHeart from "./examples/favorites/StandardHeart";
import ParticlesHeart from "./examples/favorites/ParticlesHeart";
import BubblyHeart from "./examples/favorites/BubblyHeart";
import RotateHeart from "./examples/favorites/RotateHeart";
import ReactionHeart from "./examples/favorites/ReactionHeart";
import CircleHeart from "./examples/favorites/CircleHeart";
import BurstCircleHeart from "./examples/favorites/burst/BurstCircleHeart";
import PawsHeart from "./examples/favorites/paws/PawsHeart";

import UploadProgress from "./examples/progress/UploadProgress";
import TruckProgress from "./examples/progress/truck/TruckProgress";
import HoldDownProgress from "./examples/progress/HoldDownProgress";
import DownloadProgress from "./examples/progress/DownloadProgress";

import SplatterButton from "./examples/splatter/SplatterButton";
import AddMenuButton from "./examples/AddMenuButton";
import NeumorphismButton from "./examples/NeumorphismButton";

import RotateToggle from "./examples/toggles/RotateToggle";
import SlideToggle from "./examples/toggles/SlideToggle";
import CircleExpandToggle from "./examples/toggles/CircleExpandToggle";
import RockerToggle from "./examples/toggles/RockerToggle";
import BlobToggle from "./examples/toggles/BlobToggle";
import ColorShiftToggle from "./examples/toggles/ColorShiftToggle";
import MonochromeToggle from "./examples/toggles/MonochromeToggle";
import MorphingToggle from "./examples/toggles/MorphingToggle";
import SunMoonToggle from "./examples/toggles/SunMoonToggle";

export const actionButtonMap: Record<string, ComponentType> = {
    particles: ParticlesHeart,
    bubbly: BubblyHeart,
    standard: StandardHeart,
    rotate: RotateHeart,
    reaction: ReactionHeart,
    circle: CircleHeart,
    burstCircle: BurstCircleHeart,
    paws: PawsHeart,

    upload: UploadProgress,
    truck: TruckProgress,
    holdDown: HoldDownProgress,
    download: DownloadProgress,

    splatter: SplatterButton,
    addMenu: AddMenuButton,
    neumorphism: NeumorphismButton,

    rotateToggle: RotateToggle,
    slideToggle: SlideToggle,
    circleExpandToggle: CircleExpandToggle,
    rockerToggle: RockerToggle,
    blobToggle: BlobToggle,
    colorShiftToggle: ColorShiftToggle,
    monochromeToggle: MonochromeToggle,
    morphingToggle: MorphingToggle,
    sunMoonToggle: SunMoonToggle,
};