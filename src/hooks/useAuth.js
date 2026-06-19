import { useContext, useDebugValue } from "react"
import { authContext } from "../context"

export const useAuth = () => {
    const { auth } = useContext(authContext);
    useDebugValue(auth, auth => auth?.user ? 'User Logged in' : 'User Logged out');
    return useContext(authContext);
}