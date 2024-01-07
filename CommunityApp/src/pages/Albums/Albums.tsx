import { useContext, useEffect, useState } from "react"
import { userContext } from "../../components/AuthRequired"
import { useNavigate } from "react-router-dom"
import "./Albums.css"



export default function Albums(){
    const User = useContext(userContext);
    const navigate = useNavigate();
    const [albums,setAlbums] = useState([]);
    useEffect(() => {
        async function GetUserAlbums() {
          
            try {
               // if(!User)throw new Error("No User")
                
                    // const response= await fetch('https://jsonplaceholder.typicode.com/users/'+User.id+'/albums');
                     const response= await fetch('https://jsonplaceholder.typicode.com/users/1/albums');

                    const albums= await response.json();
                    setAlbums(albums);

            } catch (error) {console.log(error);}




        }
        GetUserAlbums();
    },[])

    function handleClick(id: number){
        navigate("/pinterest",{state: {albumId: id}})
    }

    const albumsElement = albums.map((album:any)=>{
        return(
            <div onClick={()=> handleClick(album.id)}>
                <div className="folder">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/OneDrive_Folder_Icon.svg"></img><br/>
                <a>{album.title}</a>
            </div>
            </div>
        )
    })
return(
    <div>
        <div className="SiteAlbums">
        <h2>My Albums:</h2>
        <div className="albumscontainer">
        {albumsElement}
        </div>
        </div>
        
        
        
        
    </div>
)
}