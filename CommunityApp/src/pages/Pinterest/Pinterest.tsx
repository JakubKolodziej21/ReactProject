import { useEffect, useState } from "react"
import "./Pinterest.css"
import { useLocation } from "react-router-dom";
import { Photo } from "../../types";

export default function Pinterest()
{
    const [data,setData] = useState<Photo[]>([]); 

    const location = useLocation();

   
    useEffect(()=>{ 
        async function GetData() {
                   
            try {

                    if(!location.state.albumId) throw new Error("Missing Album ID")
                    const response = await fetch('https://jsonplaceholder.typicode.com/albums/'+ location.state.albumId +'/photos');
                    const posts = await response.json();
                    setData(posts);

            } catch (error) {console.log(error);}
  
        }
        GetData();
       
    },[])

    
    const dataArray= data.map((photo: Photo)=>{
        return(
            <div className="box">
            
            <img src={photo.url} alt="there should be a photo" 
            // title={photo.thumbnailUrl}
            />
            <p>{photo.title}</p>
            
            </div>
        )
    })

    return(
        <div>
            <div className="container">
                {dataArray}
            </div>
        </div>
    )
}