import {useState} from "react";

export function useIncrement(initial =0 ,step=1){
    const[count,setCount] = useState(initial)

    const increment = ()=> {
        setCount(c =>c + step)
    }
    return [count,increment]
}