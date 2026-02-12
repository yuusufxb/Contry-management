import { useSelector } from "react-redux"


export function Home () {
    const getArray = useSelector((item)=> item.contries.list);
    return(
        <>
        <h1>hello home</h1>
        {getArray.map((arr)=>
            (
            <p>{arr}</p>
        )
            
        )}
        </>
    )
}