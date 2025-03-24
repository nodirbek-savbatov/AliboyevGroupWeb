"use client"

import React, { createContext, ReactNode, useState, useEffect } from "react";
import { ContextType } from "../types/ContextType";

export const Context = createContext<ContextType>({
    token: "",
    setToken: () => null
});

export const GlobalContext: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("accessToken");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem("accessToken", token);
        }
    }, [token]);

    return <Context.Provider value={{ setToken, token }}>
        {children}
    </Context.Provider>;
};