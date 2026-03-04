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
    const filteredContries = fetchedContries.filter((item)=> item.name.common.toLowerCase().includes(search.toLowerCase()))
    return(
        <div className="countries-container">
  <div className="search-box">
    <input
      type="text"
      value={search}
      placeholder="Search for a country..."
      onChange={(e) => setsearch(e.target.value)}
      className="search-input"
    />
  </div>

  <div className="countries-grid">
    {filteredContries.map((co) => (
      <Link
        to={"/countries/" + co.name.common}
        key={co.name.common}
        className="country-card"
      >
        <img src={co.flag.png} alt="country flag" />
        <div className="card-content">
          <h2>{co.name.common}</h2>
          <p>{co.capital?.join(", ") || "No capital"}</p>
        </div>
      </Link>
    ))}
  </div>
</div>
    )
}