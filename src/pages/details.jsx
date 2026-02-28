import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



export function Detail(){
    const {id}=useParams();
    const Countries = useSelector((state)=>state.contries.list.countries);
    const country = Countries.find((contrie)=>contrie.id == Number(id));
    return(
        <>
        <h1>Countrie Details</h1>
        <h1>{country.name}</h1>
        </>
    );
}