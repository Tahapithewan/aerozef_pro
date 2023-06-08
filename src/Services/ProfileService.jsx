import axios from "axios";
import URL from "../config/URL";

let fetchData = async()=>{
    let result = await axios.get(`${URL}/applicants`)
    return result.data
}

export {fetchData}