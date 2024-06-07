import { RestroCard } from "./RestroCard";
import { restList } from "../utils/RestroData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body= ()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const fetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants);

    }
    useEffect(()=>{fetchData();},[]);
    if(listOfRestaurants.length===0){
        return <Shimmer />;
    }
        
    return(
<div className="body-container"> 
<div className="filter">
    <button className= "topRated-filter" onClick={()=> 
        {const filteredRestList = listOfRestaurants.filter(obj=>obj.info.avgRating>4.5);
            setListOfRestaurants(filteredRestList)
        }}>TopRated Restruants</button>
</div>
<div className="restro-bar">
    {listOfRestaurants.map((restObj)=>{
        return <RestroCard restData = {restObj.info} key={restObj.info.id}/>
    })
    }
    {/* <RestroCard restData={restList[0].info}/>
    <RestroCard restData={restList[1].info}/> */}

    
</div>

</div>)}

export default Body;