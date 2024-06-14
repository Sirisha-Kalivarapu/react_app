import { useEffect, useState } from "react"
import { Menu_URL } from "./constants"

const useRestroMenu=(resId)=>{
    const[restroInfo,setRestroInfo]=useState(null);

    const fetchData= async()=>{
        const data= await fetch(Menu_URL+resId);
        const json= await data.json();
        setRestroInfo(json.data);

    }
    useEffect(()=>{
        fetchData();
    },[]);

    return restroInfo;
}

export default useRestroMenu;