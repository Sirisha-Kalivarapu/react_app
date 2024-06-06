import { RestroCard } from "./RestroCard";
import { restList } from "../utils/RestroData";
const Body= ()=>(<div className="body-container"> 
<div className="search">Search</div>
<div className="restro-bar">
    {restList.map((restObj)=>{
        return <RestroCard restData={restObj.info} key={restObj.info.id}/>
    })
    }
    {/* <RestroCard restData={restList[0].info}/>
    <RestroCard restData={restList[1].info}/> */}

    
</div>

</div>)

export default Body;