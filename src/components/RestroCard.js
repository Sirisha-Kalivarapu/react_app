import { Cloudnary_URL } from "../utils/constants";
const RestroCard= (props)=> {
    const {restData} = props
    const {cloudinaryImageId,name, cuisines,avgRating, sla} = restData;
    // console.log({restData})
    return (<div className="w-[200px] p-4 m-4 bg-indigo-100 hover:bg-gray-100">
                <img className="rounded-lg" src={Cloudnary_URL+cloudinaryImageId}></img>
                <h3 className="font-bold py-2">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} star</h4>
                <h4>{restData.sla.deliveryTime} minutes</h4>
            </div>)
}

// named export
export {RestroCard};