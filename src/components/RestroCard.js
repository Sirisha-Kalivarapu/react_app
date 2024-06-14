import { Cloudnary_URL } from "../utils/constants";
const RestroCard= (props)=> {
    const {restData} = props
    const {cloudinaryImageId,name, cuisines,avgRating, sla} = restData;
    // console.log({restData})
    return (<div className="restro-card">
                <img className="logo" src={Cloudnary_URL+cloudinaryImageId}></img>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} star</h4>
                <h4>{restData.sla.deliveryTime} minutes</h4>
            </div>)
}

// named export
export {RestroCard};