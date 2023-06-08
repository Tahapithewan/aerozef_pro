import axios from "axios";
import URL from "../config/URL"
let fetchData = async()=>{
    let result = await axios.get(`${URL}/student`)
    console.log(result.data)
    return result.data
}

let InsertData = async(form)=>{
    let response = await axios.post(`${URL}/student`,form)
    return response.data
}
export {fetchData , InsertData};