import { useDispatch, useSelector } from "react-redux"
import { setcontries } from "../features/contries/contriesSlice";
import { useEffect } from "react";
import { Await, Link } from "react-router-dom";
import "./style/home_style.css"

export function Home () {
    const dispatch = useDispatch();
    const getArray = useSelector((item)=> item.contries.list);
    return(
        <div className="countries-container">
            {getArray.countries.map((co) => (
            <Link to={"/countries/" + co.id} key={co.id} className="country-card">
                <h1>{co.name}</h1>
                <img src={co.flag} alt="country flag" />
                <h3>{co.capital}</h3>
            </Link>
            ))}
        </div>
    )
}