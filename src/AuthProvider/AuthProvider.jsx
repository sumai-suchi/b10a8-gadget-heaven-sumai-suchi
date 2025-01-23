import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [wish,setWish]=useState([])
    const[ MainProductData ,setMainProductData]=useState([])
    
    useEffect(()=>{
        fetch('../Gadget.json')
        .then(res=>res.json())
        .then(data=>setMainProductData(data))
    },[])
    console.log(MainProductData)
    
    const info={
        setWish,
        wish,
        MainProductData
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;