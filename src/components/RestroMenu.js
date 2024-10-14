import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestroCategory from "./RestroCategory";


const RestroMenu= ()=>{

// const [restroInfo,setRestroMenu]=useState(null);
const [restroData,setRestroData]=useState([]);
const {resId}= useParams();
const [showIndex,setShowIndex]=useState(1);
// const [showItems,setShowItems]=useState(false);


const restroInfo =useRestroMenu(resId);

// const fetchData=async ()=>{
//     const data=await fetch(Menu_URl+resId);
//     const json = await data.json();

//     console.log(json.data.cards[2].card.card.info);
//     console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    
//     setRestroMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
//     setRestroData(json.data?.cards[2]?.card?.card);
// }
//     useEffect(()=>{
//         fetchData();
//     },[])

    // setRestroMenu(useRestroMenu(resId));

    if (restroInfo===null)
        return <Shimmer/>
    const {name, cuisines, costForTwo}= restroInfo?.cards[2]?.card?.card.info;
    const {itemCards} =restroInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    
    // console.log(restroInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    const categories= restroInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=> c?.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center">

            <h1 className="font-bold text-2xl my-3">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - Rs. {costForTwo/100} for two</p>
            {
                categories.map((category,index)=> <RestroCategory  key ={category.card.card.title} data={category.card.card } showItems={index==showIndex?(true):false}
                setShowIndex={()=>setShowIndex(index)}/>)
            }
            {/* <h2>Menu</h2>
            <ul>
            {itemCards.map(item=> {return(
                <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {item?.card?.info?.defaultPrice?item?.card?.info?.defaultPrice/100:item?.card?.info?.price/100}</li>
            )})}
            </ul> */}
            
        </div>
    )
}
export default RestroMenu;