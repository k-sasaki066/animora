export interface TabDataItem {
    id: number;
    label: string;
    title: string;
    text: string;
}

export const standardTabData: TabDataItem[] = [
    {
        id: 1,
        label: "con1",
        title: "Content1",
        text: "Sample text for Content1 goes here.",
    },
    {
        id: 2,
        label: "con2",
        title: "Content2",
        text: "Sample text for Content2 goes here.",
    },
    {
        id: 3,
        label: "con3",
        title: "Content3",
        text: "Sample text for Content3 goes here.",
    },
    {
        id: 4,
        label: "con4",
        title: "Content4",
        text: "Sample text for Content4 goes here.",
    },
];

export interface TextTabDataItem {
    id: string;
    label: string;
    content: string;
}

export const textTabData: TextTabDataItem[] = [
    {
        id: "about",
        label: "About",
        content:
            "Sample text for About goes here. This section is used to provide a brief overview or description. You can include general information, background details, or any content that helps users understand the purpose of this area.",
    },
    {
        id: "social",
        label: "Social",
        content:
            "Sample text for Social goes here. This section gives a quick introduction and a bit of background information. It’s a simple placeholder used to show how content will look in this area.",
    },
    {
        id: "location",
        label: "Location",
        content:
            "Sample text for Location goes here. This is just some sample content to fill the space and show the layout. Feel free to swap it out with your own text whenever you like.",
    },
];