import React, {createContext, useState} from "react";

export const TimeSlotContext = createContext(null);

const TimeSlotProvider = ({children}) => {
    const [timeSlot, setTimeSlot] = useState([]);

    return (
        <TimeSlotContext.Provider value={[timeSlot, setTimeSlot]}>
            {children}
        </TimeSlotContext.Provider>
    )
}

export default TimeSlotProvider;