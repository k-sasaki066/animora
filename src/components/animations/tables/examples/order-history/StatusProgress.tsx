import { OrderStatus, steps } from "./orderData";

const stepColors: Record<OrderStatus, string> = {
    注文完了: "bg-yellow-500",
    発送済み: "bg-blue-500",
    配達完了: "bg-green-500",
};

type Props = {
    status: OrderStatus;
};

export default function StatusProgress({ status }: Props) {
    const current = steps.indexOf(status);
    const activeColor = stepColors[status];

    return (
        <div className="flex items-center mt-1">
            {steps.map((step, i) => (
                <div key={step} className="flex items-center">
                    <div
                        className={`w-4 h-4 rounded-full ${i <= current ? activeColor : "bg-gray-300"
                            }`}
                    />

                    {i !== steps.length - 1 && (
                        <div
                            className={`w-11 h-0.5 ${i < current ? activeColor : "bg-gray-300"
                                }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}