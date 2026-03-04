import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContriesData } from "../features/contries/contriesSlice";
import './style/totalPop_style.css'

export function TotalPopulation() {
    // API for countries data 'https://restcountries.com/v4/all?fields=name,population,capital,region,flag,language'    
    const totalPop = useSelector((state) => state.contries.totalPopulation);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContriesData())
    }, [totalPop, dispatch])
    return (
        <div className="population-container">
            <div className="population-card">
                <h1 className="population-title">
                    🌍 World Total Population
                </h1>
                <p className="population-number">
                    {totalPop.toLocaleString()}
                </p>
            </div>
        </div>
    );
}