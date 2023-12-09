import { Link } from "react-router-dom";

export default function Header()
{
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
            </nav>
        </>
    )
}