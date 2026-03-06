import { useSelector } from "react-redux";


export function Region() {

    const contries = useSelector((item) => item.contries.fetchedContries);
    const regions = contries.map((it) => { return it.region });
    const uniqueRegions = [...new Set(regions)]
    console.log(uniqueRegions)
    return (
        <>
            <h1>Select By Region</h1>
            <select>
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