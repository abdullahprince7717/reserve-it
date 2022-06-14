import React, {createContext, useState} from "react";

export const CredentialsContext = createContext(null);

const CredentialsProvider = ({children}) => {
    const [storedCredentials , setStoredCredentials] = useState([]);

    return (
        <CredentialsContext.Provider value={[storedCredentials , setStoredCredentials]}>
            {children}
        </CredentialsContext.Provider>
    )
}

export default CredentialsProvider;