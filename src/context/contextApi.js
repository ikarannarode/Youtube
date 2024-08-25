import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCateogories, setSelectCateogories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
    useEffect(() => {
        fetchSelectedCategoryData(selectCateogories);
    }, [selectCateogories])
    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ data }) => {
            setSearchResults(data.contents);
            console.log(data.contents);
            setLoading(false);
        })

    }

    return (
        <Context.Provider value={{ loading, setLoading, searchResults, setSearchResults, selectCateogories, setSelectCateogories, mobileMenu, setMobileMenu }}>
            {props.children}
        </Context.Provider>
    )
}

