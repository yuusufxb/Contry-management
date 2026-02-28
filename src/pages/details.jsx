import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



export function Detail(){
    const {id}=useParams();
    const Countries = useSelector((state)=>state.contries.list.countries);
    const country = Countries.find((contrie)=>contrie.id == Number(id));
    return(
        <div className="detail-container">
      <div className="detail-card">
        <img
          src={country.flag}
          alt={country.name}
          className="flag"
        />

        <h1>{country.name}</h1>
        <h3>{country.officialName}</h3>

        <div className="info-grid">
          <p><strong>Code:</strong> {country.code}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Area:</strong> {country.areaKm2.toLocaleString()} km²</p>

          <p>
            <strong>Currency:</strong> {country.currency.name} ({country.currency.code}) {country.currency.symbol}
          </p>

          <p>
            <strong>Languages:</strong> {country.languages.join(", ")}
          </p>

          <p><strong>Timezone:</strong> {country.timezone}</p>

          <p>
            <strong>Coordinates:</strong> {country.coordinates.lat}, {country.coordinates.lng}
          </p>

          <p><strong>Line Name:</strong> {country.lineName}</p>
          <p><strong>Opacity:</strong> {country.opacity}</p>
        </div>
      </div>
    </div>
    );
}