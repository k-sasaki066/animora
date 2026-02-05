import type { ComponentType } from "react";
import CenterAccordionMenu from "./examples/center-accordion/CenterAccordionMenu";
import FaqAccordionMenu from "./examples/faq/FaqAccordionMenu";
import CircleMenu from "./examples/CircleMenu";
import SpeechBubbleMenu from "./examples/speech-bubble/SpeechBubbleMenu";
import FoldingMenu from "./examples/folding/FoldingMenu";
import CollapsibleMenu from "./examples/collapsible/CollapsibleMenu";
import ActiveRailMenu from "./examples/active-rail/ActiveRailMenu";
import BlurHamburger from "./examples/blur/BlurHamburger";
import CircleSpreadHamburger from "./examples/circle-spread/CircleSpreadHamburger";
import CurtainRevealHamburger from "./examples/curtain-reveal/CurtainRevealHamburger";
import DeepNaviHamburger from "./examples/deep-navi/DeepNaviHamburger";
import ExplodingHamburger from "./examples/exploding/ExplodingHamburger";
import GridOverlayHamburger from "./examples/grid-overlay/GridOverlayHamburger";
import OrbitHamburger from "./examples/orbit/OrbitHamburger";
import OverlayHamburger from "./examples/overlay-hamburger/OverlayHamburger";
import PushDownHamburger from "./examples/push-down/PushDownHamburger";
import SlideInHamburger from "./examples/slide-in/SlideInHamburger";
import YellowSlideHamburger from "./examples/yellow-slide/YellowSlideHamburger";

export const menuMap: Record<string, ComponentType> = {
    centerAccordionMenu: CenterAccordionMenu,
    circleMenu: CircleMenu,
    speechBubbleMenu: SpeechBubbleMenu,
    foldingMenu: FoldingMenu,
    collapsibleMenu: CollapsibleMenu,
    activeRailMenu: ActiveRailMenu,
    faqAccordionMenu: FaqAccordionMenu,
    blurMenu: BlurHamburger,
    circleSpreadMenu: CircleSpreadHamburger,
    curtainRevealMenu: CurtainRevealHamburger,
    deepNaviMenu: DeepNaviHamburger,
    explodingMenu: ExplodingHamburger,
    gridOverlayMenu: GridOverlayHamburger,
    orbitMenu: OrbitHamburger,
    overlayMenu: OverlayHamburger,
    pushDownMenu: PushDownHamburger,
    slideInMenu: SlideInHamburger,
    yellowSlideMenu: YellowSlideHamburger,
};