import axios from "axios"
import { useState } from "react"
const Test = () => {
      
          const [storedata,setStoredata]=useState([]);



    const handler =()=>{
        axios.get("https://uat.ordering-farmshop.ekbana.net/api/v4/category",{
            headers:{
                "Api-Key":"3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
             
    
    
            }
        })
        .then((response)=>{
         console.log(response.data.data,"success")
            setStoredata(response.data.data);
            console.log( storedata,"hiii"   )
        })
        .catch((error)=>{
            console.log(error,"failure")
        })

    }
    

  return (
    <div>
   {
    storedata.map((data,index)=>{return(
        <div>
            <p> {data.id}</p>
            <img src={data.backgroundImage}/>

        </div>
    )})
   }
        <button onClick={handler}>hitme</button>
    </div>
  )
}

export default Test