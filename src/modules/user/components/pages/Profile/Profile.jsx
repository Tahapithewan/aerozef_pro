import React,{useState ,useEffect} from 'react'
import { fetchData } from '../../../../../Services/ProfileService'
const Profile = () => {
    let [data , setData] = useState([])
    let getData = async ()=>{
        let response = await fetchData()
        // console.log(response)
        setData(response)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <div className="container my-5">
        <div className="row">
            {
                data.map((item , index)=>{
                    return (
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-dark">
                                    <h2 className='text-center text-light'>Profile of User</h2>
                                </div>
                                <div className="card-body bg-light">
                                    {/* <h3>{item.image}</h3> */}
                                    <img height={"250px"} src={item.image} className='img-thumbnail img-responsive img-rounded' alt="Not Found" />
                                    <h1>{item.heading}</h1>
                                    <h3>{item.description}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })  
            }         
        </div>
    </div>
    </>
  )
}

export default Profile;