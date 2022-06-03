import React, {createContext, useState} from "react";

export const BusinessHoursContext = createContext(null);

const BusinessHoursProvider = ({children}) => {
    const [days, setDays] = useState([{}]);

    return (
        <BusinessHoursContext.Provider value={[{days, setDays}]}>
            {children}
        </BusinessHoursContext.Provider>
    )
}

export default BusinessHoursProvider;