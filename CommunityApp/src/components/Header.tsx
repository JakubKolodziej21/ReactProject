import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./AuthRequired";
import { logoutUser } from "../services/api";

export default function Header()
{
    const user = useContext(userContext);
    const navigate = useNavigate();

    const logout = async () =>
    {
        try {
            if(user?.email)
            {
                await logoutUser(user?.email);
                navigate("/");
            }else
            {
                throw new Error("No user email!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <header>    
                <p>&#9993;<a href="mailto:jakub.kolodziej28@microsoft.wsei.edu.pl">jakub.kolodziej28@microsoft.wsei.edu.pl</a></p>
            </header>
            
            <nav>
                <img src="https://e.wsei.edu.pl/pluginfile.php/1/theme_edumy/headerlogo2/1698749635/wsei-fav-icon-hd.png"  alt="Logo"/>
                <h2>React Project</h2>
                <Link to="/main">ToDoList</Link>
                <Link to="/main/pinterest">Pinterest</Link>
                <a href="#" onClick={logout}>Logout user</a>
            </nav>
        </>
    )
}