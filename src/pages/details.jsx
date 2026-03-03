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
      <div className="detail-card">
        {/* Flag */}
        <div className="flag-wrapper">
          <img
            src={country.flag?.png}
            alt={country.flag?.alt || "Country flag"}
            className="flag"
          />
        </div>

        {/* Name */}
        <div className="detail-header">
          <h1>{country.name.common}</h1>
          <h3>{country.name.official}</h3>
        </div>

        {/* Info Grid */}
        <div className="info-grid">
          <div className="info-item">
            <span>Capital:</span>
            <p>{country.capital?.join(", ") || "N/A"}</p>
          </div>

          <div className="info-item">
            <span>Region:</span>
            <p>{country.region}</p>
          </div>

          <div className="info-item">
            <span>Population:</span>
            <p>{country.population.toLocaleString()}</p>
          </div>

          <div className="info-item">
            <span>Area:</span>
            <p>{country.area.toLocaleString()} km²</p>
          </div>

          <div className="info-item">
            <span>Languages:</span>
            <p>
              {country.languages?.map((lang) => lang.name).join(", ") || "N/A"}
            </p>
          </div>

          <div className="info-item">
            <span>Currencies:</span>
            <p>
              {country.currencies
                ?.map((c) => `${c.name} (${c.symbol})`)
                .join(", ") || "N/A"}
            </p>
          </div>

          <div className="info-item">
            <span>Government:</span>
            <p>{country.government?.type}</p>
          </div>

          <div className="info-item">
            <span>National Holiday:</span>
            <p>{country.nationalHoliday}</p>
          </div>

          <div className="info-item">
            <span>Maps:</span>
            <p>
              <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    );
}