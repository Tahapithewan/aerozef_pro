import axios from "axios";
import URL from "../config/URL";

let insertData = async(form)=>{
    let result = await axios.post(`${URL}/everyone`,form)
    return result.data
}

let fetchData = async()=>{
    let info = await axios.get(`${URL}/everyone`)
    return info.data
}

export {insertData , fetchData}