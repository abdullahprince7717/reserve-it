import React, {createContext, useState} from "react";

export const AppointmentContext = createContext(null);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    return (
        <AppointmentContext.Provider value={[cart, setCart]}>
            {children}
        </AppointmentContext.Provider>
    )
}

export default CartProvider;