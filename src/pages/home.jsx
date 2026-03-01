import { useDispatch, useSelector } from "react-redux"
import { setcontries } from "../features/contries/contriesSlice";
import { useEffect } from "react";
import { Await, Link } from "react-router-dom";
import "./style/home_style.css"
import { fetchContriesData } from "../features/contries/contriesSlice";

export function Home () {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchContriesData());
    },[dispatch])
    const getArray = useSelector((item)=> item.contries.list);
    const fetchedContries = useSelector((item)=> item.contries.fetchedContries)
    return(
        <div className="countries-container">
            {getArray.countries.map((co) => (
            <Link to={"/countries/" + co.id} key={co.id} className="country-card">
                <h1>{co.name}</h1>
                <img src={co.flag} alt="country flag" />
                <h3>{co.capital}</h3>
            </Link>
            ))}
            {fetchedContries.map((fco)=>(
                
                <h1 style={{color:'black'}}>{fco.name.common}</h1>
            ))}
        </div>
    )
}