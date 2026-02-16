import { useDispatch, useSelector } from "react-redux"
import { setcontries } from "../features/contries/contriesSlice";
import { useEffect } from "react";
import { Await } from "react-router-dom";

export function Home () {
    const dispatch = useDispatch();
    const getArray = useSelector((item)=> item.contries.list);
    return(
        <>
        <h1>hello home</h1>
        </>
    )
}