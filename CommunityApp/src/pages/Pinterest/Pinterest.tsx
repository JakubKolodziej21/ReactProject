import { useEffect, useState } from "react"
import "./Pinterest.css"
import { Photo } from "../../types";

export default function Pinterest()
{
    const [data,setData]= useState([]); 

    useEffect(()=>{ 
        async function GetData() {           
            const response= await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            const posts= await response.json();
            setData(posts); 
        }
        GetData();
       
    },[])

    const dataArray= data.map((photo: Photo)=>{
        return(
            <div className="box">
                <img src={photo.url} alt="there should be a photo" />
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