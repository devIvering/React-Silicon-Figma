import React,{ createContext, useContext, useEffect, useState } from "react";

const AppStore = createContext()
export const UseAppStore = () => useContext(AppStore)

export const AppStoreProvider = ({children}) => {


    const handleSubscribe = async (email) => {
        const res = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${email}', {
            method: 'post'
        
    })

            return res.status
}
    


    return <AppStore.Provider value={{handleSubscribe}}>
        {children}
    </AppStore.Provider>
}
