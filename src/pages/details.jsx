import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style/detail_style.css";
import { useEffect } from "react";
import { fetcheContriesByName } from "../features/contries/contriesSlice";


export function Detail(){
    const dispatch = useDispatch();
    const {id}=useParams();
    useEffect(()=>{
      dispatch(fetcheContriesByName(id));
    },[dispatch,id  ])
    const country = useSelector((state)=>state.contries.fetchedByName);
    if (!country) return <p>Loading...</p>;
    return(
            <div className="detail-container">
          { country && <div className="detail-card">
            <div className="flag-wrapper">
              <img
                src={country.flag?.png}
                alt={country.flag?.alt || "Country flag"}
                className="flag"
              />
            </div>

            <div className="detail-content">
              <h1 className="country-name">{country.name.common}</h1>
              <h3 className="official-name">{country.name.official}</h3>

              <div className="info-grid">
                <div className="info-item">
                  <span>Description</span>
                  <p>{country.flag?.alt || "No description available"}</p>
                </div>

                <div className="info-item">
                  <span>Capital</span>
                  <p>{country.capital?.join(", ")}</p>
                </div>

                <div className="info-item">
                  <span>Region</span>
                  <p>{country.region}</p>
                </div>

                <div className="info-item">
                  <span>Population</span>
                  <p>{country.population.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>}
    </div>
    );
}