import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../AuthRequired";
import { logoutUser } from "../../services/api";
import "./Header.css";

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
                <nav className="header-navigation">
                    <div className="logo">
                        <img src="https://e.wsei.edu.pl/pluginfile.php/1/theme_edumy/headerlogo2/1698749635/wsei-fav-icon-hd.png" alt="Logo"/>
                        <h2>React Project</h2>
                    </div>
                    <div className="links">
                        <Link to="/main">ToDoList</Link>
                        <Link to="/main/albums">Albums</Link>
                        <Link to="/main/posts">Posts</Link>
                        <a href="#" onClick={logout}>Logout user</a>
                    </div>
                </nav>
            </header>
        </>
    )
}