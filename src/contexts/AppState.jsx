import React,{ createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppStore = createContext()
export const UseAppStore = () => useContext(AppStore)

export const AppStoreProvider = ({children}) => {

    const [allowShadow, setAllowShadow] = useState(false)
    const location = useLocation()

    useEffect( () => {

        if (location.pathname === "/news")
            setAllowShadow (true)
        else
            setAllowShadow(false)
    }, [])

    const handleSubscribe = async (email) => {
        const res = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${email}', {
            method: 'post'
        
    })

            return res.status
}
    


    return <AppStore.Provider value={{allowShadow, handleSubscribe}}>
        {children}
    </AppStore.Provider>
}
