"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Order, OrderStatus } from "./orderData";
import StatusProgress from "./StatusProgress";

type MobileProps = {
    order: Order;
    openId: string | null;
    toggleRow: (id: string) => void;
    formatDate: (date: Date) => string;
    statusLabelColor: Record<OrderStatus, string>;
};

const itemPadding = "p-3";
const itemPaddingBottom = "pb-3";
const labelClass = "inline-block mb-1 text-xs text-white bg-[#939292] px-2 py-0.5 rounded-xs";

export default function MobileOrderCard({ order, openId, toggleRow, formatDate,
    statusLabelColor
}: MobileProps) {
    return (
        <div className="border w-full flex-1 rounded-sm">

            {/* header */}
            <div
                onClick={() => toggleRow(order.id)}
                className="flex items-center justify-between text-left p-3 bg-gray-50"
            >
                <div>
                    <p className="font-semibold">
                        #{order.id}
                    </p>
                    <p className="text-xs text-gray-500">
                        {formatDate(order.date)}
                    </p>
                </div>

                <motion.span
                    animate={{ rotate: openId === order.id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                >
                    ▼
                </motion.span>
            </div>

            {/* body */}
            <AnimatePresence>
                {openId === order.id && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`min-w-53.5 bg-gray-100 p-3 ${itemPadding}`}
                    >
                        <div className="space-y-4">
                            {order.items.map((item, i) => (
                                <div key={i} className={`flex flex-col items-center gap-2 border-b last:border-none last:pb-0 ${itemPaddingBottom}`}>
                                    <div className="w-full flex items-center gap-3 mb-3">
                                        <img src={item.image} className="w-1/4 aspect-square object-cover"/>

                                        <div className="flex-1 flex-col text-left">
                                            <div className={itemPaddingBottom}>
                                                <span className={labelClass}>
                                                    Product
                                                </span>
                                                <p className="font-bold text-xs">
                                                    {item.name}
                                                </p>
                                            </div>

                                            {/* 配送情報 */}
                                            <div className={`font-medium text-xs ${itemPaddingBottom}`}>
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
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <span className={labelClass}>
                                                        Status
                                                    </span>
                                                    <span className={`px-2 py-1 text-xs rounded ${statusLabelColor[order.status]}`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                                <StatusProgress status={order.status} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full flex justify-between items-center">
                                        <p className="font-semibold px-2">
                                            {item.price}
                                        </p>
                                        {/* 再注文ボタン */}
                                        <div>
                                            <button className="px-4 py-2 bg-black text-white text-xs rounded-lg hover:bg-gray-600 cursor-pointer">
                                                Buy Again
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}