import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import AppSchema from '../../../../../Schemas/ApplicantSchema'
import './Applicants.css'
import { InsertData } from '../../../../../Services/ApplicantService'


const Applicants = () => {
    let navigate = useNavigate()
    let FormValues = {
        image : "",
        heading : "",
        description : "" ,
    }
    let {handleSubmit , handleChange ,touched ,errors , setFieldValue} = useFormik({
        initialValues : FormValues,
        validationSchema : AppSchema,
        onSubmit : async(data)=>{
            let form = new FormData()
            for (var properties in data){
                form.append(properties , data[properties])
            }        
            let response = await InsertData(form)
            // console.log(res.data)
            navigate("../profile")
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
                        <h2 className='text-light text-center my-3'>Applicant Form</h2>
                    </div>
                    <div className="card-body bg-light">
                        <div className="form-group">
                            <label htmlFor="IM" className='mb-3'><h4>Insert Image :</h4></label>
                            <input type="file" name="image" id="IM" onChange={(e)=>setFieldValue("image", e.target.files[0])}  className={'form-control ' +(touched.image && errors.image ? 'is-invalid' : '')}/>
                            <small className='text-danger'> {touched.image && errors.image ? errors.image : ''}</small>
                        </div>
                        <div className="form-group my-5">
                            <label htmlFor="HE" className='mb-3'><h4>Heading :</h4></label>
                            <input type="text" name="heading" id="HE" className={'form-control ' +(touched.heading && errors.heading ? 'is-invalid' : '')} onChange={handleChange}/>
                            <small className='text-danger'> {touched.heading && errors.heading ? errors.heading : ''}</small>
                        </div>
                        <div className="form-group my-5">
                            <label htmlFor="DE" className='mb-3'><h4>Description :</h4></label>
                            <textarea name="description" id="DE" className={'form-control ' +(touched.description && errors.description ? 'is-invalid' : '')} onChange={handleChange}></textarea>
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

export default Applicants