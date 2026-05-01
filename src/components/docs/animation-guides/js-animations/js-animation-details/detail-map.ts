export const detailMap = {
    jsAnimationModal: () => import("./js-animation-modal"),
    jsAnimationMenuToggle: () => import("./js-animation-menu-toggle"),
    jsAnimationLoading: () => import("./js-animation-loading"),
    jsAnimationScrollReveal: () => import("./js-animation-scroll-reveal"),
    jsAnimationAccordionToggle: () => import("./js-animation-accordion-toggle"),
    jsAnimationTabSwitch: () => import("./js-animation-tab-switch"),
    jsAnimationButtonHover: () => import("./js-animation-button-hover"),
    jsAnimationInputErrorFeedback: () => import("./js-animation-input-error-feedback"),
    jsAnimationToastNotification: () => import("./js-animation-toast-notification"),
    jsAnimationPageTransitionFade: () => import("./js-animation-page-transition-fade"),
    jsAnimationCarousel: () => import("./js-animation-carousel"),
    jsAnimationTooltip: () => import("./js-animation-tooltip"),
    jsAnimationClickState: () => import("./js-animation-click-state"),
    jsAnimationFavorite: () => import("./js-animation-favorite"),
    jsAnimationDeleteComplete: () => import("./js-animation-delete-complete"),
    jsAnimationProgressBar: () => import("./js-animation-progress-bar"),
    jsAnimationNumberCountUp: () => import("./js-animation-number-count-up"),
    jsAnimationBackground: () => import("./js-animation-background"),
} as const;

export type DetailKey = keyof typeof detailMap;