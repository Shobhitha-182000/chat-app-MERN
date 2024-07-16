import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const storedUser = localStorage.getItem("chat-user");
    let initialAuthUser = null;

    try {
        initialAuthUser = storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
        console.error("Failed to parse stored user from localStorage:", e);
        initialAuthUser = null;
    }

    const [authUser, setAuthUser] = useState(initialAuthUser);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
