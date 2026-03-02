"use client";

import React from "react";
import { animalTableData } from "./data";

export default function AnimalTable() {

    return (
        <div className="h-full w-full">
            {/* PC用 */}
            <div className="w-full h-full hidden md:block overflow-auto no-scrollbar">
                <table className="min-w-130 w-full table-fixed border border-gray-300 border-collapse">
                    <thead className="sticky -top-0.5 z-10 bg-gray-100">
                        <tr>
                            {animalTableData[0].map((header, idx) => (
                                <th key={idx} className="border border-gray-300 p-2 text-center w-1/5">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {animalTableData[1].map((cell, idx) => (
                                <td key={idx} className={`border border-gray-300 p-2 ${ idx === 0 ? "font-bold align-middle" : "align-top" }`}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* モバイル用 */}
            <div className="md:hidden w-full h-full overflow-y-auto no-scrollbar">
                <table className="w-full border border-gray-300 border-collapse">
                    <tbody>
                        {animalTableData[0].slice(1).map((header, idx) => (
                            <tr key={idx}>
                                <td className="border border-gray-300 p-2 font-bold w-26 whitespace-nowrap text-sm">
                                    {header}
                                </td>

                                <td className="border border-gray-300 p-2 overflow-x-auto no-scrollbar whitespace-nowrap max-w-45 text-sm">
                                    {animalTableData[1][idx + 1]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}