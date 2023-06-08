import React,{useEffect ,useState} from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import {fetchData , InsertData} from '../../../../../Services/StudentServices'
import StudentSchema from '../../../../../Schemas/StudentSchema'
const Student = () => {
    let navigate = useNavigate()
    let {handleChange , handleSubmit ,errors , values ,setFieldValue, touched} = useFormik({
        initialValues : {image : "" , heading : "" , description : ""},
        validationSchema: StudentSchema,
        onSubmit : async (data)=>{
            console.log(data)
            let form = new FormData();
            for (let value in data){
                form.append(value, data[value])
            }
            let response = await InsertData(form)
            // console.log(response)
            navigate("../studentProfile")

            
        }
    })
  return (  
    <>
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h2 className='text-light text-center my-3'>Student Form</h2>
                    </div>
                    <div className="card-body bg-light">
                        <div className="form-group">
                            <label htmlFor="IM" className='mb-3'><h4>Insert Image :</h4></label>
                            <input type="file" name="image" id="IM" className={'form-control ' +(touched.image && errors.image ? 'is-invalid' : '')} onChange={(e)=>setFieldValue("image",e.target.files[0])}/>
                            <small className='text-danger'> {touched.image && errors.image ? errors.image : ''}</small>
                        </div>
                        <div className="form-group my-5">
                            <label htmlFor="HE" className='mb-3'><h4>Heading :</h4></label>
                            <input type="text" name="heading" id="HE" className={'form-control ' +(touched.heading && errors.heading ? 'is-invalid' : '')} onChange={handleChange}/>
                            <small className='text-danger'> {touched.heading && errors.heading ? errors.heading : ''}</small>
                        </div>
                        <div className="form-group my-5">
                            <label htmlFor="DE" className='mb-3'><h4>Description :</h4></label>
                            <textarea name="description" id="DE" className={'form-control ' +(touched.description && errors.description ? 'is-invalid' : '')}></textarea>
                            <small className='text-danger'> {touched.description && errors.description ? errors.description : ''}</small>
                        </div>
                    </div>
                    <div className="card-footer bg-dark">
                        <button type='submit' className='btn btn-light'>Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Student