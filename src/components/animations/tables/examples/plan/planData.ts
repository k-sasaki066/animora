export type Plan = {
    name: string;
    price: string;
    setup: string;
    cpu: string;
    storage: string;
    memory: string;
};

export const plans: Plan[] = [
    {
        name: "Win1",
        price: "1,981円",
        setup: "1,800円 / 0円",
        cpu: "仮想 2Core",
        storage: "60GB / 100GB",
        memory: "1GB",
    },
    {
        name: "Win2",
        price: "2,553円",
        setup: "3,700円 / 1,886円",
        cpu: "仮想 3Core",
        storage: "120GB / 100GB",
        memory: "2GB",
    },
    {
        name: "Win3",
        price: "4,362円",
        setup: "4,900円 / 2,839円",
        cpu: "仮想 4Core",
        storage: "150GB / 200GB",
        memory: "4GB",
    },
    {
        name: "Win4",
        price: "6,458円",
        setup: "7,800円 / 4,743円",
        cpu: "仮想 5Core",
        storage: "150GB / 200GB",
        memory: "8GB",
    }
];

export const fields: { label: string; key: keyof Plan }[] = [
    { label: "初期費用", key: "setup" },
    { label: "CPU", key: "cpu" },
    { label: "SSD/HDD", key: "storage" },
    { label: "メモリ", key: "memory" }
];