import { useDispatch, useSelector } from "react-redux"
import { setcontries } from "../features/contries/contriesSlice";
import { useEffect } from "react";
import { Await, Link } from "react-router-dom";

export function Home () {
    const dispatch = useDispatch();
    const getArray = useSelector((item)=> item.contries.list);
    return(
        <>
         {getArray.countries.map((co)=>(
            <>
            {/* <Link to={"/"}></> */}
            <h1>{co.name}</h1>
            <img src={co.flag} alt="country flag" />
            <h3>{co.capital}</h3>
            </>
         ))}
        </>
    )
}