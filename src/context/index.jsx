import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParams, setSearchParams] = useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    async function fetchData() {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
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
        const filtered = data.filter(item =>
            item.title && item.title.includes(searchParams)
        );
        setFilteredData(filtered);
    }, [searchParams, data]);

    return (
        <GlobalContext.Provider
            value={{
                searchParams,
                loading,
                filteredData, // Provide filtered data to be displayed
                setSearchParams,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
