import { RestroCard } from "./RestroCard";
import { restList } from "../utils/RestroData";
import { useState } from "react";
const Body= ()=>{
    const [ListOfRestruants,setListOfRestruants]=useState(restList);
    return(
<div className="body-container"> 
<div className="filter">
    <button className= "topRated-filter" onClick={()=> 
        {const filteredRestList = ListOfRestruants.filter(obj=>obj.info.avgRating>4.5);
            setListOfRestruants(filteredRestList)
        }}>TopRated Restruants</button>
</div>
<div className="restro-bar">
    {ListOfRestruants.map((restObj)=>{
        return <RestroCard restData = {restObj.info} key={restObj.info.id}/>
    })
    }
    {/* <RestroCard restData={restList[0].info}/>
    <RestroCard restData={restList[1].info}/> */}

    
</div>

</div>)}

export default Body;