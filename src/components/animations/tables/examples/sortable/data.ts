export type Row = {
    keyword: string;
    impressions: number;
    clicks: number;
    ctr: number;
    rank: number;
};

export type SortKey = keyof Row;

export const columns: { key: SortKey; label: string }[] = [
    { key: "keyword", label: "Keywords" },
    { key: "impressions", label: "Impressions" },
    { key: "clicks", label: "Clicks" },
    { key: "ctr", label: "CTR" },
    { key: "rank", label: "Rank" },
];

export const data: Row[] = [
    {
        keyword: "silly tshirts",
        impressions: 6000,
        clicks: 110,
        ctr: 1.8,
        rank: 22.2
    },
    {
        keyword: "desktop workspace photos",
        impressions: 2200,
        clicks: 500,
        ctr: 22,
        rank: 8.9
    },
    {
        keyword: "arrested development quotes",
        impressions: 13500,
        clicks: 900,
        ctr: 6.7,
        rank: 12
    },
    {
        keyword: "popular web series",
        impressions: 8700,
        clicks: 350,
        ctr: 4,
        rank: 7
    },
    {
        keyword: "2013 webapps",
        impressions: 9900,
        clicks: 460,
        ctr: 4.6,
        rank: 11.5
    },
    {
        keyword: "ring bananaphone",
        impressions: 10500,
        clicks: 748,
        ctr: 7.1,
        rank: 17.3
    },
];