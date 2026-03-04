import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContriesData } from "../features/contries/contriesSlice";


export function TotalPopulation(){
    // API for countries data 'https://restcountries.com/v4/all?fields=name,population,capital,region,flag,language'    
    const totalPop = useSelector((state)=>state.contries.totalPopulation);
    const dispatch = useDispatch();
    return(
        <>
            <h1>World total population : </h1>
            <p>{totalPop}</p>
        </>
    );
}