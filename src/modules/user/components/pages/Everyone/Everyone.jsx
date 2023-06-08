import React,{useEffect , useState} from 'react'
import { useFormik } from 'formik'
import { insertData, fetchData } from '../../../../../Services/Everyone'
const Everyone = () => {
    let getInfo = async()=>{
        let info = await fetchData()
        console.log(info) 
    }
    useEffect(()=>{
        getInfo()
    },[])

    let {handleSubmit , handleChange , errors , touched ,setFieldValue} = useFormik({
        initialValues : { image : "" , heading : "", description : ""},
        onSubmit : async(data)=>{
            // console.log(data)
            let form = new FormData();
            for (var value in data){
                form.append(value , data[value])
            }
            let response = await insertData(form)
            let info = 
            console.log(response)
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
                        <h2 className='text-light text-center my-3'>Everyone Form</h2>
                    </div>
                    <div className="card-body bg-light">
                        <div className="form-group">
                            <label htmlFor="IM" className='mb-3'><h4>Insert Image :</h4></label>
                            <input type="file" name="image" id="IM" className='form-control' onChange={(e)=>setFieldValue("image", e.target.files[0])}/>
                        </div>
                        <div className="form-group my-5">
                            <label htmlFor="HE" className='mb-3'><h4>Heading :</h4></label>
                            <input type="text" name="heading" id="HE" className='form-control' onChange={handleChange}/>
                        </div>
                        <div className="form-group my-5">
                            <label htmlFor="DE" className='mb-3'><h4>Description :</h4></label>
                            <textarea name="description" id="DE" className='form-control' onChange={handleChange}></textarea>
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

export default Everyone