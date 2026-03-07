import { useState } from "react";
import { useSelector } from "react-redux";
import './style/region_style.css'

export function Region() {
    // bringing the contries data
    const contries = useSelector((item) => item.contries.fetchedContries);
    const regions = contries.map((it) => { return it.region });
    // methode to select the unique values of an array 
    const uniqueRegions = [...new Set(regions)]
    console.log(uniqueRegions)
    // handling the region selected by the user 
    const [regionSelected, setregionSelecter] = useState("");
    const onChange = (e) => {
        const param = e.target.value;
        if (param) setregionSelecter(param);

    }
    console.log(regionSelected);
    // 
    const contriesByRegion = contries.filter((co) =>
        co.region == regionSelected);
    console.log(contriesByRegion);
    return (
        <>
            <h1 className="title">Select By Region</h1>

            <select className="regionSelect" onChange={onChange}>
                <option value="">Select Region →</option>

                {uniqueRegions.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>

            {contriesByRegion.length > 0 ? (
                <div className="countriesContainer">
                    {contriesByRegion.map((co) => (
                        <div className="countryCard" key={co.name.common}>

                            <img
                                className="flag"
                                src={co.flag.png}
                                alt={co.flag.alt || co.name.common}
                            />

                            <h2>{co.name.common}</h2>

                            <p>
                                <strong>Capital:</strong> {co.capital?.[0] || "N/A"}
                            </p>

                            <p>
                                <strong>Population:</strong>{" "}
                                {co.population.toLocaleString()}
                            </p>

                            <p>
                                <strong>Region:</strong> {co.region}
                            </p>

                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <p>Select a Region !</p>
                </div>
            )}
        </>
    );
}