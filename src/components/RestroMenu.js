import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_URl } from "../utils/constants";


const RestroMenu= ()=>{

const [restroMenu,setRestroMenu]=useState(null);
const [restroData,setRestroData]=useState([]);
const {resId}= useParams();

const fetchData=async ()=>{
    const data=await fetch(Menu_URl+resId);
    const json = await data.json();

    console.log(json.data.cards[2].card.card.info);
    console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    
    setRestroMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    setRestroData(json.data?.cards[2]?.card?.card);
}
    useEffect(()=>{
        fetchData();
    },[])
    

    if (restroMenu===null)
        return <Shimmer/>
    const {name, cuisines, costForTwo}= restroData?.info;
    
    return (
        <div className="restro-menu-container">

            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - Rs. {costForTwo/100} for two</p>
            <h2>Menu</h2>
            <ul>
            {restroMenu.map(item=> {return(
                <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {item?.card?.info?.defaultPrice?item?.card?.info?.defaultPrice/100:item?.card?.info?.price/100}</li>
            )})}
            </ul>
            
        </div>
    )
}
export default RestroMenu;