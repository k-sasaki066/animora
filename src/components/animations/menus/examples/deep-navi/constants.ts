
export const BASE_WIDTH = 480;

export const NAV_MENUS = [
    {
        label: "Visit",
        children: [
            "What's On",
            "Hours & Rates",
            "Groups",
            "Families & Kids",
            "Our Neighbourhood",
            "Getting Here",
            "Visitor Information",
        ],
    },
    {
        label: "Experience",
        children: [
            "Exhibits",
            "Events",
            "Collections"
        ],
    },
    {
        label: "Learn",
        children: [
            "School Programs",
            "Youth Programs",
            "Adult Programs",
            "Resources",
        ],
    },
    {
        label: "Join & Give",
        children: [
            "Donate",
            "Become a Member",
            "Volunteer",
            "Sponsors"
        ],
    },
    { label: "Shop" },
    {
        label: "About",
        children: [
            "Society",
            "People",
            "Careers",
            "Press",
            "Media"
        ],
    },
    { label: "Blog" },
    {
        label: "Rentals",
        children: [
            "Weddings & Events",
            "Film & TV",
            "FAQ’s & Policies"
        ],
    },
    {
        label: "Farmers Market",
        children: [
            "Become a Vendor",
            "Market",
            "Our Vendors"
        ],
    },
    { label: "Contact" },
];

type LineConfig = {
    key: string;
    className: string;
    animate: (isOpen: boolean) => {
        y?: number;
        rotate?: number;
        opacity?: number;
    };
};

export const HAMBURGER_LINES: LineConfig[] = [
    {
        key: "top",
        className: "top-0",
        animate: (isOpen) => ({
            y: isOpen ? 12 : 0,
            rotate: isOpen ? -45 : 0,
        }),
    },
    {
        key: "middle",
        className: "top-[12px]",
        animate: (isOpen) => ({
            opacity: isOpen ? 0 : 1,
        }),
    },
    {
        key: "bottom",
        className: "bottom-0",
        animate: (isOpen) => ({
            y: isOpen ? -12 : 0,
            rotate: isOpen ? 45 : 0,
        }),
    },
];


export type NavMenu = typeof NAV_MENUS[number];