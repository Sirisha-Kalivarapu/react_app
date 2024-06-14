import { RestroCard } from "./RestroCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body= ()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestruants, setFilteredRestaurants]= useState([]);
    const [searchText,setSearchText]= useState("");
    // console.log(searchText);

    const fetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(listOfRestaurants);

    }
    const onlineStatus= useOnlineStatus();
    if(onlineStatus===false)
        return <h1>Looks like you are Offline!!!</h1>
    useEffect(()=>{fetchData();},[]);
    if(listOfRestaurants.length===0){
        return <Shimmer />;
    }
        
    return(
<div className="body-container"> 
<div className="filter">
    <div className="Search">
        <input type="text" className="search-text" value={searchText} onChange={(a)=> 
        {
            if(a.target.value.length==0){
            setFilteredRestaurants(listOfRestaurants);}
            setSearchText(a.target.value);
        }}
        ></input>
        <button className="search-btn" onClick={()=> searchText.length===0?setFilteredRestaurants(listOfRestaurants):setFilteredRestaurants(listOfRestaurants.filter(obj=> obj.info.name.toLowerCase().includes(searchText.toLowerCase())))

        }>search</button>
    </div>
    <button className= "topRated-filter" onClick={()=> 
        {const filteredRestList = listOfRestaurants.filter(obj=>obj.info.avgRating>4.5);
            setListOfRestaurants(filteredRestList)
        }}>TopRated Restruants</button>
</div>
<div className="restro-bar">
    {filteredRestruants.map((restObj)=>{
        // console.log(restObj.info.id);
        return  (<Link to={"/restaurants/"+restObj.info.id} key={restObj.info.id}><RestroCard restData = {restObj.info} /></Link>)
    })
    }
    {/* <RestroCard restData={restList[0].info}/>
    <RestroCard restData={restList[1].info}/> */}

    
</div>

</div>)}

export default Body;