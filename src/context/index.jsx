import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParams, setSearchParams] = useState("");
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // State for filtered data

    const KEY = import.meta.env.VITE_API_KEY;

    async function fetchData() {
        try {
            const res = await fetch(KEY);
            const data = await res.json();
            setData(data);
            setFilteredData(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Filter data based on searchParams
        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(searchParams.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchParams, data]);

    return (
        <GlobalContext.Provider
            value={{
                searchParams,
                loading,
                filteredData,
                setSearchParams,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}