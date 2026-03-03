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
    const fetchedContries = useSelector((item)=> item.contries.fetchedContries)
    return(
        <div className="countries-container">
            {fetchedContries.map((co) => (
            <Link to={"/countries/" + co.name.common} key={co.name.common} className="country-card">
                <h1>{co.name.common}</h1>
                <img src={co.flag.png} alt="country flag" />
                <h3>{co.capital}</h3>
            </Link>
            ))}
        </div>
    )
}