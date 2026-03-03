"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { orders, tableHeaders, OrderStatus } from "./orderData";
import StatusProgress from "./StatusProgress";
import MobileOrderCard from "./MobileOrderCard";

const statusLabelColor: Record<OrderStatus, string> = {
    注文完了: "bg-yellow-100 text-yellow-700",
    発送済み: "bg-blue-100 text-blue-700",
    配達完了: "bg-green-100 text-green-700",
};

function formatDate(date: Date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${d}`;
}

const itemPadding = "p-4";
const itemPaddingBottom = "pb-4";
const labelClass = "inline-block mb-1 text-xs text-white bg-[#939292] px-2 py-0.5 rounded-xs";
const transitionColor = "transition-colors duration-300 ease-out";

export default function OrderHistoryTable() {

    const [openId, setOpenId] = useState<string | null>(null);
    const toggleRow = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="w-full h-full mx-auto flex flex-col overflow-scroll no-scrollbar">
            <h2 className="text-xl font-bold mb-4">Order History</h2>

            <div className="hidden md:block min-w-135 w-full flex-1 border rounded-sm overflow-scroll no-scrollbar">
                <table className="w-full">
                    <thead className="bg-gray-100 text-sm text-center sticky -top-0.5 z-10">
                        <tr>
                            {tableHeaders.map((col) => (
                                <th key={col.key} className="p-4">
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <Fragment key={order.id}>
                                <tr
                                    onClick={() => toggleRow(order.id)}
                                    className={`cursor-pointer border-t even:bg-gray-50 hover:bg-[#dff2fe] ${transitionColor}`}
                                >
                                    <td className="p-4 text-center w-10">
                                        <motion.span
                                            animate={{ rotate: openId === order.id ? 180 : 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="inline-block"
                                        >
                                            ▼
                                        </motion.span>
                                    </td>

                                    <td className={`${itemPadding}`}>
                                        #{order.id}
                                    </td>

                                    <td className={`${itemPadding}`}>
                                        {formatDate(order.date)}
                                    </td>

                                    <td className={`${itemPadding}`}>
                                        <span className={`px-2 py-1 text-xs rounded ${statusLabelColor[order.status]}`}>
                                            {order.status}
                                        </span>
                                    </td>

                                    <td className={`${itemPadding}`}>
                                        {order.price}
                                    </td>
                                </tr>

                                <AnimatePresence>
                                    {openId === order.id && (
                                        <tr>
                                            <td colSpan={tableHeaders.length} className="p-0">
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden bg-gray-50"
                                                >
                                                    <div className={`${itemPadding} space-y-4`}>
                                                        {order.items.map((item, i) => (
                                                            <div key={i} className={`flex flex-col items-center gap-2 border-b last:border-none last:pb-0 ${itemPaddingBottom}`}>
                                                                <div className="w-full flex items-center gap-4">
                                                                    <img src={item.image} className="w-1/4 aspect-square object-cover"/>

                                                                    <div className="flex-1 flex-col text-left">
                                                                        <div className={itemPaddingBottom}>
                                                                            <span className={labelClass}>
                                                                                Product
                                                                            </span>
                                                                            <p className="font-bold text-sm">
                                                                                {item.name}
                                                                            </p>
                                                                        </div>

                                                                        {/* 配送情報 */}
                                                                        <div className={`font-medium text-sm ${itemPaddingBottom}`}>
                                                                            <span className={labelClass}>
                                                                                Shipping Address
                                                                            </span>
                                                                            <p>
                                                                                〒{order.shipping.postalCode}
                                                                            </p>
                                                                            <p>
                                                                                {order.shipping.prefecture}
                                                                                {order.shipping.city} {order.shipping.address1}
                                                                            </p>
                                                                            <p>
                                                                                {order.shipping.building}
                                                                            </p>
                                                                        </div>

                                                                        {/* ステータス progress */}
                                                                        <div>
                                                                            <span className={labelClass}>
                                                                                Status
                                                                            </span>
                                                                            <StatusProgress status={order.status} />
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex flex-col">
                                                                        <p className={`font-semibold ${itemPaddingBottom}`}>
                                                                            {item.price}
                                                                        </p>
                                                                        {/* 再注文ボタン */}
                                                                        <div>
                                                                            <button className={`px-4 py-2 bg-black text-white text-xs rounded-lg hover:bg-gray-600 cursor-pointer ${transitionColor}`}>
                                                                                Buy Again
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </td>
                                        </tr>
                                    )}
                                </AnimatePresence>
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card Version */}
            <div className="space-y-4 md:hidden">
                {orders.map((order) => (
                    <MobileOrderCard
                        key={order.id}
                        order={order}
                        openId={openId}
                        toggleRow={toggleRow}
                        formatDate={formatDate}
                        statusLabelColor={statusLabelColor}
                    />
                ))}
            </div>
        </div>
    );
}