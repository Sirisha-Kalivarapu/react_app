import { ItemList } from "./ItemList";
import { useState } from "react";

const RestroCategory=({data})=>{
    console.log(data);
    const {title}= data;
    const [showItems,setShowItems]=useState(false);
    const handleClick= ()=>{
        console.log("clicked"+ showItems);
        setShowItems(!showItems);
        
    };

    return (
        <div>
            <div className="w-6/12 mx-auto my-3 bg-indigo-100 shadow-lg p-3 " >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data.itemCards}></ItemList>}

            </div>
        </div>
    )
}
export default RestroCategory;