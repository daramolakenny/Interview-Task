import React, { useContext } from "react";
import { GlobalContext } from "../context";
import Search from "./Search";

const DataTable = () => {
    const { filteredData, loading } = useContext(GlobalContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="py-8 container mx-auto justify-center gap-10">
            {/* className="py-8 container mx-auto justify-center gap-10 bg-red-300" */}
            <h1 className="float-left text-2xl font-bold">Data Table</h1>
            <Search />
            <table className="border">
                <thead className="">
                    <tr className="border">
                        <th className="border px-4">ID</th>
                        <th className="border px-2">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr 
                            key={item.id}
                            className="border"
                        >
                            <td className="border px-4">{item.id}</td>
                            <td className="">{item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;