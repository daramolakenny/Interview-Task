import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context";
import CustomHook from "./CustomHook";

const Search = () => {
    const { setSearchParams } = useContext(GlobalContext);
    const [inputValue, setInputValue] = useState(''); 
    const debouncedInputValue = CustomHook({ value: inputValue, delay: 500 }); 

    useEffect(() => {
        setSearchParams(debouncedInputValue);
    }, [debouncedInputValue, setSearchParams]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="pb-20">
            <input
                type="text"
                value={inputValue}
                placeholder="Search ..."
                onChange={handleChange}
                className="border rounded-lg shadow text-lg placeholder:px-2 outline-none float-right"
            />
        </div>
    );
};

export default Search;
