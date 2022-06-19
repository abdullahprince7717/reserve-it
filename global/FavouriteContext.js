import React, { useState, createContext, useRef, useEffect } from "react";

export const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
    const [favs, setFavs] = useState([]);
    const fetchFavs = useRef();

    fetchFavs.current = async() => {
        //get favs
    }

    useEffect(()=>{
        fetchFavs.current();
    },[])

    return(
        <FavoriteContext.Provider value={[favs, setFavs]}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider;