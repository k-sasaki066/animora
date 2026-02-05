export const BASE_WIDTH = 400;

export type NavItem = {
    id: string;
    label: string;
    content: string;
};

export const NAV_ITEMS: NavItem[] = [
    {
        id: "home",
        label: "Home",
        content: "Welcome to our website! Explore our latest updates and features on the Home page.".repeat(20),
    },
    {
        id: "about",
        label: "About",
        content: "Learn more about our team, mission, and values on the About page.".repeat(20),
    },
    {
        id: "services",
        label: "Services",
        content: "Discover the range of professional services we offer to our clients.".repeat(20),
    },
    {
        id: "portfolio",
        label: "Portfolio",
        content: "Check out our recent projects and creative portfolio examples.".repeat(20),
    },
    {
        id: "blog",
        label: "Blog",
        content: "Read our latest articles, news, and insights on the Blog page.".repeat(20),
    },
    {
        id: "contact",
        label: "Contact",
        content: "Get in touch with us for inquiries, support, or collaboration opportunities.".repeat(20),
    },
];

type LineConfig = {
    key: string;
    className: string;
};

export const LINES: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
    },
    {
        key: "middle",
        className: "top-[11px]",
    },
    {
        key: "bottom",
        className: "bottom-0",
    },
];