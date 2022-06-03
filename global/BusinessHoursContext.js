import React, {createContext, useState} from "react";

export const BusinessHoursContext = createContext(null);

const BusinessHoursProvider = ({children}) => {
    
    const [monday,setMonday] = useState([]);
    const [tuesday,setTuesday] = useState([]);
    const [wednesday,setWednesday] = useState([]);
    const [thursday,setThursday] = useState([]);
    const [friday,setFriday] = useState([]);
    const [saturday,setSaturday] = useState([]);
    const [sunday,setSunday] = useState([]);

    return (

        <BusinessHoursContext.Provider value={[monday,setMonday,tuesday,setTuesday,wednesday,setWednesday,thursday,setThursday,friday,setFriday,saturday,setSaturday,sunday,setSunday]}>
            {children}
        </BusinessHoursContext.Provider>
    )
}

export default BusinessHoursProvider;