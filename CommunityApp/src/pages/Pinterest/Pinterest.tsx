import { useEffect, useState } from "react"
import "./Pinterest.css"
import { useLocation } from "react-router-dom";





export default function Pinterest()
{
    const [data,setData]= useState([]); 

    const location = useLocation();

   
    useEffect(()=>{ 
        async function GetData() {
                   
            try {

                    if(!location.state.albumId) throw new Error("Missing Album ID")
                    const response= await fetch('https://jsonplaceholder.typicode.com/albums/'+ location.state.albumId +'/photos');
                    const posts= await response.json();
                    setData(posts);

            } catch (error) {console.log(error);}
  
        }
        GetData();
       
    },[])

    
    const dataArray= data.map((photo:any)=>{
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
            <header>    
            
                <p>&#9993;<a href="mailto:jakub.kolodziej28@microsoft.wsei.edu.pl">jakub.kolodziej28@microsoft.wsei.edu.pl</a></p>
            
            
            </header>
            
            <nav>
            
            <img src="https://e.wsei.edu.pl/pluginfile.php/1/theme_edumy/headerlogo2/1698749635/wsei-fav-icon-hd.png"  alt="Logo"/>
            <h2>React Project</h2>
            
            
           
                
            

            </nav>
                <div className="container">
                {dataArray}
                </div>
           

            <footer>
            <p>&copy; 2023 | Created by: Jakub Kołodziej | Student ID: 14128</p>
            </footer>
        </div>
        


    )
}