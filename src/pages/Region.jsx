import { useState } from "react";
import { useSelector } from "react-redux";


export function Region() {
    // bringing the contries data
    const contries = useSelector((item) => item.contries.fetchedContries);
    const regions = contries.map((it) => { return it.region });
    // methode to select the unique values of an array 
    const uniqueRegions = [...new Set(regions)]
    console.log(uniqueRegions)
    // handling the region selected by the user 
    const [regionSelected , setregionSelecter] = useState("");
    const onChange = (e) =>{
        const param = e.target.value ;
        if (param) setregionSelecter(param);

    }
    console.log(regionSelected);
    // 
    const contriesByRegion = contries.find((co)=> co.Region == regionSelected);
    console.log(contriesByRegion);
    return (
        <>
            <h1>Select By Region</h1>
            <select onChange={onChange}>
                <option value="">Select Region →</option>
                {uniqueRegions.map((region)=>(
                <div>
                    <option value={region}>{region}</option>
                </div>

                ))}

            </select>
        </>
    );
}