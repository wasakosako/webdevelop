import { useState, createContext, ReactNode, useCallback, useContext } from "react"
import { authcontexttype, userProps } from "../types/atoms";


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
export const AuthContext = createContext<authcontexttype | undefined>(undefined);

export const AuthProvider = (({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<userProps>();


    const login = useCallback((userdata: userProps) => { setUser(userdata) }, []);
    const logout = useCallback(() => {
        sessionStorage.removeItem("token")
        setUser(undefined);
    }, []);

    const contextvalue = {
        user,
        login,
        logout
    }

    return (
        <div>
            <AuthContext.Provider value={contextvalue}>
                {children}
            </AuthContext.Provider>
        </div >
    )
})