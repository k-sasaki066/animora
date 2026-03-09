"use client";

import { useState } from "react";
import { TableCard } from "./TableCard";
import { TableModal } from "./TableModal";
import { tableData } from "./tableData";

export function TableList() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {tableData.map((item) => (
                    <TableCard
                        key={item.key}
                        title={item.title}
                        image={item.image}
                        mobileImage={item.mobileImage}
                        onClick={() => setActiveKey(item.key)}
                    />
                ))}
            </div>

            <TableModal
                animationKey={activeKey}
                onClose={() => setActiveKey(null)}
            />
        </>
    );
}