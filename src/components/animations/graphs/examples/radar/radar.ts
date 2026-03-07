import { Product } from "./products";

export function buildRadarData(products: Product[]) {
    return products[0].rating.map((r, i) =>
        products.reduce(
            (acc, p) => {
                acc[`product${p.id}`] = p.rating[i].value;
                return acc;
            },
            { subject: r.subject } as Record<string, number | string>
        )
    );
}

export function calculateAverages(products: Product[], selected: number[]) {
    return products
        .filter(p => selected.includes(p.id))
        .map(p => ({
            id: p.id,
            name: p.name,
            color: p.color,
            avg:
                p.rating.reduce((s, r) => s + r.value, 0) /
                p.rating.length
        }));
}