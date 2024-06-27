import { Cloudnary_URL } from "../utils/constants";
export const ItemList=({items})=>{
    console.log(items);
    return <div>
        <ul>
            {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border border-indigo-200 border-b-2 text-left flex justify-between">
                <div className=" py-2 w-9/12">
                    <span>{item.card.info.name}</span>
                    <span>- ₹ {item.card.info.price/100}</span>
                    <p>{item.card.info.description}</p>
                </div>
                <div className="w-3/12 ">
                    <div className="absolute center">
                        <button className="rounded border border-indigo-400 shadow-lg bg-indigo-400 mx-10 my-2 ">Add +</button>
                    </div>
                    <img src={Cloudnary_URL+item.card.info.imageId} className="w-40 h-25 m-2"></img>

                </div>

            </div>))}
        </ul>
    </div>


}
