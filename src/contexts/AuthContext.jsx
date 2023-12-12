import { useContext, createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    function handleLogin(payload){
        // finta verifica
        if(payload.email === "mario@gmail.com" && payload.password === "password") {
            setIsLoggedIn(true);
            navigate("/dashboard")
        } else {
            throw new Error("Bro le credenziali non sono corrette");
      
        }
    }

    return (
        <AuthContext.Provider value={{user, isLoggedIn, handleLogin}} >

            { children }

        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}