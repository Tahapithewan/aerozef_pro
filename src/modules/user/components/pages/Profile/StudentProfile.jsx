import React, { useEffect, useState } from 'react'
import { fetchData } from '../../../../../Services/StudentServices'
const StudentProfile = () => {
    let [data , setData] = useState([])
    let getAllData = async()=>{
        let result = await fetchData()
        setData(result)
    }

    useEffect(()=>{
        getAllData()
    },[])
  return (
    <>
    <div className="container my-5">
        <div className="row">
        {
            data.map((item , index)=>{
                return(
                    <>
                    <div key={index} className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">{item.heading}</h2>
                            </div>
                            <div className="card-body">
                                <img src={item.image} className='img-thumbnail img-responsive img-rounded' alt="" />
                                <h5 className='text-center mt-3'>{item.description}</h5>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })
        }
        </div>
    </div>
    </>
  )
}

export default StudentProfile