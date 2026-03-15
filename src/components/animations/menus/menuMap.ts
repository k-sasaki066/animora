import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
type MenuComponent = LazyExoticComponent<
    ComponentType<{ paused?: boolean }>
    >;

export const menuMap: Record<string, MenuComponent> = {
    centerAccordionMenu: lazy(() =>
    import("./examples/center-accordion/CenterAccordionMenu")
    ),

    faqAccordionMenu: lazy(() =>
        import("./examples/faq/FaqAccordionMenu")
    ),

    circleMenu: lazy(() =>
        import("./examples/CircleMenu")
    ),

    speechBubbleMenu: lazy(() =>
        import("./examples/speech-bubble/SpeechBubbleMenu")
    ),

    foldingMenu: lazy(() =>
        import("./examples/folding/FoldingMenu")
    ),

    collapsibleMenu: lazy(() =>
        import("./examples/collapsible/CollapsibleMenu")
    ),

    activeRailMenu: lazy(() =>
        import("./examples/active-rail/ActiveRailMenu")
    ),

    blurMenu: lazy(() =>
        import("./examples/blur/BlurHamburger")
    ),

    circleSpreadMenu: lazy(() =>
        import("./examples/circle-spread/CircleSpreadHamburger")
    ),

    curtainRevealMenu: lazy(() =>
        import("./examples/curtain-reveal/CurtainRevealHamburger")
    ),

    deepNaviMenu: lazy(() =>
        import("./examples/deep-navi/DeepNaviHamburger")
    ),

    explodingMenu: lazy(() =>
        import("./examples/exploding/ExplodingHamburger")
    ),

    gridOverlayMenu: lazy(() =>
        import("./examples/grid-overlay/GridOverlayHamburger")
    ),

    orbitMenu: lazy(() =>
        import("./examples/orbit/OrbitHamburger")
    ),

    overlayMenu: lazy(() =>
        import("./examples/overlay-hamburger/OverlayHamburger")
    ),

    pushDownMenu: lazy(() =>
        import("./examples/push-down/PushDownHamburger")
    ),

    slideInMenu: lazy(() =>
        import("./examples/slide-in/SlideInHamburger")
    ),

    yellowSlideMenu: lazy(() =>
        import("./examples/yellow-slide/YellowSlideHamburger")
    ),
};