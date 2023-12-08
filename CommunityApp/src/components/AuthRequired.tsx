import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getCookie, getUserData } from "../services/api";
import { User } from "../types";

export const userContext = createContext<User | null>(null);

export default function AuthRequired()
{
    const [action, setAction] = useState(<h1>Loading...</h1>);
    const location = useLocation();
    let { email } = location.state;

    useEffect(() => {
        const AuthObserver = async () => {
            try {
                let userData: User | null;

                if(email) {
                    const cookie = getCookie(email);
                    if(!cookie) throw new Error("No cookie for this email!");
                    userData = await getUserData(email);
                    if(!userData) throw new Error("No data for this user!");

                    setAction(
                        <userContext.Provider value={userData}>
                            <Outlet />
                        </userContext.Provider>
                    )
                } else
                {
                    const user = useContext(userContext);
                    if(!user) throw new Error("No user in context!");
                    const cookie = getCookie(user.email);
                    if(!cookie) throw new Error("No cookie for this email!");
                    setAction(
                        <userContext.Provider value={user}>
                            <Outlet />
                        </userContext.Provider>
                    )
                }             

            } catch (error) {
                console.log(error);
            }
        }

        AuthObserver();
    }, [])

    return (
        <>
            {action}
        </>
    )
}