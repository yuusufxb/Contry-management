import { useSelector } from "react-redux";


export function Region(){

    const contries = useSelector((item)=>item.contries.fetchedContries.region) ;
    const uniqueRegion = [...new Set(contries)]
    return(
        <>
        <h1>Select By Region</h1>
        <select onChange={<></>}>
            <option value="">Select Region →</option>
            <option value="Europe"></option>
            <option value="Africa"></option>
            <option value="Asia"></option>
            <option value="Americas"></option>
            <option value="Oceania"></option>
            <option value="Antarctic"></option>
        </select>
        </>
    );    
}