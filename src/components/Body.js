import { RestroCard, promotedRestroCard } from "./RestroCard";
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

    const OpenRestaurant= promotedRestroCard(RestroCard);

    return(
<div className="body-container"> 
<div className="flex">
    <div className="m-2 p-2 ">
        <input type="text" className=" border rounded border-lg border-black" value={searchText} onChange={(a)=> 
        {
            if(a.target.value.length==0){
            setFilteredRestaurants(listOfRestaurants);}
            setSearchText(a.target.value);
        }}
        ></input>
        <button className="border rounded border-lg px-2 bg-indigo-300" onClick={()=> searchText.length===0?setFilteredRestaurants(listOfRestaurants):setFilteredRestaurants(listOfRestaurants.filter(obj=> obj.info.name.toLowerCase().includes(searchText.toLowerCase())))

        }>search</button>
    </div>
    <button className= "border rounded border-lg bg-gray-200" onClick={()=> 
        {const filteredRestList = listOfRestaurants.filter(obj=>obj.info.avgRating>4.5);
            setListOfRestaurants(filteredRestList)
        }}>TopRated Restruants</button>
</div>
<div className="flex flex-wrap">
    {filteredRestruants.map((restObj)=>{
        // console.log(restObj.info.id);
        return  (
        <Link to={"/restaurants/"+restObj.info.id} key={restObj.info.id}>{restObj.info.isOpen?<OpenRestaurant restData={restObj.info} />:<RestroCard restData = {restObj.info} />}</Link>)
    })
    }
    {/* <RestroCard restData={restList[0].info}/>
    <RestroCard restData={restList[1].info}/> */}

    
</div>

</div>)}

export default Body;