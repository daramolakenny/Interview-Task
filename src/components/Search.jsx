import React, { useContext } from "react";
import { GlobalContext } from "../context";

const Search = () => {
    const { setSearchParams } = useContext(GlobalContext);

    const handleChange = (e) => {
        setSearchParams(e.target.value);
    };

    return (
        <div className="pb-20">
            <input
            type="text"
            placeholder="Search ..."
            onChange={handleChange}
            className="border rounded-lg text-lg placeholder:px-2 outline-none float-right"
            />
        </div>
    );
};

export default Search;