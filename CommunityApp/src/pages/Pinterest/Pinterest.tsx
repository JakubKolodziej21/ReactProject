import { useEffect, useState } from "react"
import "./Pinterest.css"




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

    
    const dataArray= data.map((photo:any)=>{
        return(
            <div>
            <img src={photo.url} />
            <p>{photo.title}</p>
            </div>
        )
    })

    return(
        <div>
            <h1>
                Here gonna be a something like Pinterest
            </h1>

            {dataArray}

        </div>
        


    )
}