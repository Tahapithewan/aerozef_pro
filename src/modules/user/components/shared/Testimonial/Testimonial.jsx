import React from 'react'
import '../Testimonial/Testimonial';

const Testimonial = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 pt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <span className='display-3' style={{fontFamily : 'Haettenschweiler', }}>LEARN TO CODE FOR FREE ON OUR CAMPUS IN BERLIN</span> <br />
                  <span style={{fontFamily : 'Silka'}}>We are an NGO using peer-to-peer learning <br /> to inspire tech for good</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header bg-warning" style={{height : '80px'}}>
                      <h1 className='text-left mt-2'><b>Next up</b></h1>
                    </div>
                    <div className="card-body">
                      <b>Introduction Talks</b> <br />
                      00.00.000 | 00.00 PM <br />
                      00.00.000 | 00.00 PM <br /> <br />

                     <b>Piscine</b>  <br />
                      00.00.000 | 00.00 PM <br />
                      00.00.000 | 00.00 PM <br /> <br />

                      <b>Introduction Talks</b> <br />
                      00.00.000 | 00.00 PM <br />
                      00.00.000 | 00.00 PM <br /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial