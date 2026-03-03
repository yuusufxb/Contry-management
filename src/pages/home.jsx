import { useDispatch, useSelector } from "react-redux"
import { setcontries } from "../features/contries/contriesSlice";
import { useEffect, useState } from "react";
import { Await, Link } from "react-router-dom";
import "./style/home_style.css"
import { fetchContriesData } from "../features/contries/contriesSlice";

export function Home () {
    const [search,setsearch]= useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchContriesData());
    },[dispatch])
    const fetchedContries = useSelector((item)=> item.contries.fetchedContries)
    const filteredContries = fetchedContries.filter((item)=>);
    return(
        <div className="countries-container">
            <input type="text" value={search} placeholder="search for a contry" onChange={e =>setsearch(e.target.value)}/> 
            {filteredContries.map((co) => (
            <Link to={"/countries/" + co.name.common} key={co.name.common} className="country-card">
                <h1>{co.name.common}</h1>
                <img src={co.flag.png} alt="country flag" />
                <h3>{co.capital}</h3>
            </Link>
            ))}
        </div>
    )
}