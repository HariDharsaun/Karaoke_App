import { useState } from "react";

const useLocalStorage = (key)=>{
    var[text,setText]=useState("");
    const jsonValue = localStorage.getItem(key)
    if(!jsonValue) return jsonValue
     
}

export default useLocalStorage;