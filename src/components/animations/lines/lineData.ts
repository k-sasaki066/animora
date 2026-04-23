export interface LineItem {
    key: string;
    title: string;
    video: string;
}

export const lineData: LineItem[] = [
    {
        key: "solidLine",
        title: "Solid Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/solid-line.mp4`,
    },
    {
        key: "doubleLine",
        title: "Double Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/double-line.mp4`,
    },
    {
        key: "dottedLine",
        title: "Dotted Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/dotted-line.mp4`,
    },
    {
        key: "cutLine",
        title: "Cut Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/cut-line.mp4`,
    },
    {
        key: "verticalStitchLine",
        title: "Vertical Stitch Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/vertical-stitch-line.mp4`,
    },
    {
        key: "hatchedStitchLine",
        title: "Hatched Stitch Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/hatched-stitch-line.mp4`,
    },
    {
        key: "stripeLine",
        title: "Stripe Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/stripe-line.mp4`,
    },
    {
        key: "crayonLine",
        title: "Crayon Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/crayon-line.mp4`,
    },
    {
        key: "dotSeparator",
        title: "Dot Separator",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/dot-separator.mp4`,
    },
    {
        key: "waveHero",
        title: "Wave Hero",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/wave-hero.mp4`,
    },
    {
        key: "spiderSeparator",
        title: "Spider Separator",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/spider-separator.mp4`,
    },
    {
        key: "waveLine",
        title: "Wave Line",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/wave-line.mp4`,
    },
    {
        key: "shapeRunner",
        title: "Shape Runner",
        video: `${process.env.NEXT_PUBLIC_R2_URL}/videos/lines/shape-runner.mp4`,
    },
];