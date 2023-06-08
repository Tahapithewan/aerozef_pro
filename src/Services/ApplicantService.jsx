import axios from "axios";
import URL from "../config/URL";

let InsertData = async(form)=>{
    let response = await axios.post(`${URL}/applicants` , form)
    return response.data
}

export {InsertData};

