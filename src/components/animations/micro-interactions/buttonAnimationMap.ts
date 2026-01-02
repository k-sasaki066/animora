import type { ComponentType } from "react";
import FloatingButton from "./examples/basic/FloatingButton";
import BulbulButton from "./examples/basic/BulbulButton";
import ThumpButton from "./examples/basic/ThumpButton";
import SwayingButton from "./examples/basic/SwayingButton";
import ShakyButton from "./examples/basic/ShakyButton";
import SparklingButton from "./examples/basic/SparklingButton";
import RipplesButton from "./examples/basic/RipplesButton";
import SkewButton from "./examples/basic/SkewButton";
import SpinButton from "./examples/basic/SpinButton";
import JigglyButton from "./examples/basic/JigglyButton";
import ClickMoveButton from "./examples/basic/ClickMoveButton";
import GradientMoveButton from "./examples/basic/GradientMoveButton";

import ChangeTextButton from "./examples/hover-text/ChangeTextButton";
import FlowTextButton from "./examples/hover-text/FlowTextButton";
import FancyTextButton from "./examples/hover-text/FancyTextButton";
import SmokeTextButton from "./examples/hover-text/SmokeTextButton";

import ExtendLeftButton from "./examples/hover/ExtendLeftButton";
import DiagonalSwipeButton from "./examples/hover/DiagonalSwipeButton";
import DoubleSwipeButton from "./examples/hover/DoubleSwipeButton";
import StopSwipeButton from "./examples/hover/StopSwipeButton";
import PassingButton from "./examples/hover/PassingButton";
import CircleOutButton from "./examples/hover/CircleOutButton";
import ClickButton from "./examples/hover/ClickButton";
import FlipButton from "./examples/hover/FlipButton";
import ColorCycleButton from "./examples/hover/ColorCycleButton";
import ColorIntoCenterButton from "./examples/hover/ColorIntoCenterButton";
import ChangeShapeButton from "./examples/hover/ChangeShapeButton";
import HiddenTextButton from "./examples/hover/HiddenTextButton";
import ColorFlowButton from "./examples/hover/ColorFlowButton";
import MochiButton from "./examples/hover/MochiButton";
import WaveButton from "./examples/hover/WaveButton";
import BackgroundMovesButton from "./examples/hover/BackgroundMovesButton";
import GradientSlideButton from "./examples/hover/GradientSlideButton";
import ToggleButton from "./examples/hover/ToggleButton";
import PixelHoverButton from "./examples/hover/PixelHoverButton";
import BubbleButton from "./examples/hover/BubbleButton";
import LetterFillButton from "./examples/hover/LetterFillButton";

import SideBracketsButton from "./examples/hover-line/SideBracketsButton";
import TransformShapeButton from "./examples/hover-line/TransformShapeButton";
import HoverLineButton from "./examples/hover-line/HoverLineButton";
import RotateButton from "./examples/hover-line/RotateButton";
import ArrowExtendButton from "./examples/hover-line/ArrowExtendButton";
import SportyButton from "./examples/hover-line/SportyButton";
import HoverOutlineButton from "./examples/hover-line/HoverOutlineButton";
import Hover4CornerButton from "./examples/hover-line/Hover4CornerButton";
import HoverSurroundButton from "./examples/hover-line/HoverSurroundButton";
import PileUpButton from "./examples/hover-line/PileUpButton";

export const buttonAnimationMap: Record<string, ComponentType> = {
    floating: FloatingButton,
    bulbul: BulbulButton,
    thump: ThumpButton,
    swaying: SwayingButton,
    shaky: ShakyButton,
    sparkling: SparklingButton,
    ripples: RipplesButton,
    skew: SkewButton,
    spin: SpinButton,
    jiggly: JigglyButton,
    clickMove: ClickMoveButton,
    gradientMove: GradientMoveButton,

    changeText: ChangeTextButton,
    flowText: FlowTextButton,
    fancyText: FancyTextButton,
    smokeText: SmokeTextButton,

    extendLeft: ExtendLeftButton,
    diagonalSwipe: DiagonalSwipeButton,
    doubleSwipe: DoubleSwipeButton,
    stopSwipe: StopSwipeButton,
    passing: PassingButton,
    circleOut: CircleOutButton,
    click: ClickButton,
    flip: FlipButton,
    colorCycle: ColorCycleButton,
    colorIntoCenter: ColorIntoCenterButton,
    changeShape: ChangeShapeButton,
    hiddenText: HiddenTextButton,
    colorFlow: ColorFlowButton,
    mochi: MochiButton,
    wave: WaveButton,
    backgroundMoves: BackgroundMovesButton,
    gradientSlide: GradientSlideButton,
    toggle: ToggleButton,
    pixelHover: PixelHoverButton,
    bubble: BubbleButton,
    letterFill: LetterFillButton,

    sideBrackets: SideBracketsButton,
    transformShape: TransformShapeButton,
    hoverLine: HoverLineButton,
    rotate: RotateButton,
    arrowExtend: ArrowExtendButton,
    sporty: SportyButton,
    hoverOutline: HoverOutlineButton,
    hover4Corner: Hover4CornerButton,
    hoverSurround: HoverSurroundButton,
    pileUp: PileUpButton,

};