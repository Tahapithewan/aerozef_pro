import React from 'react'
import mypro from "../../../../../images/mypro.jpg"
import butterfly from "../../../../../images/butterfly.jpg"
const Slider = () => {
  
  return (
    <>
     {/* <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" >
       <ol className="carousel-indicators">
         <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
         <li data-bs-target="#myCarousel" data-bs-slide-to="1" className="active"></li>
         <li data-bs-target="#myCarousel" data-bs-slide-to="2" className="active"></li>
       </ol>

       <div className="carousel-inner">
           <div className="carousel-item active" style={{height:"32rem",color:"white",position:"relative",backgroundColor:"grey"}}>
             <div className="container" style={{position:"absolute",bottom:"0",left:"0",right:"0",padding:"50px"}}>
               <h1>Example Headlines</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla rerum sed cumque
                 mollitia expedita ratione Taha voluptatem suscipit voluptates, cupiditate aut libero
                 modi debitis rem nobis fuga deleniti aspernatur?</p>
                 <a href="#" className="btn btn-lg btn-primary">Dabao</a>
             </div>
           </div>

           <div className="carousel-item active" style={{height:"32rem",color:"white",position:"relative",backgroundColor:"grey"}}>
             <div className="container" style={{position:"absolute",bottom:"0",left:"0",right:"0",padding:"50px"}}>
               <h1>Example Headlines</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla rerum sed cumque
                 mollitia expedita ratione Burhan voluptatem suscipit voluptates, cupiditate aut libero
                 modi debitis rem nobis fuga deleniti aspernatur?</p>
                 <a href="#" className="btn btn-lg btn-primary">Dabao</a>
             </div>
           </div>
           <div className="carousel-item active" style={{height:"32rem",color:"white",position:"relative",backgroundColor:"grey"}}>
             <div className="container" style={{position:"absolute",bottom:"0",left:"0",right:"0",padding:"50px"}}>
               <h1>Example Headlines</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla rerum sed cumque
                 mollitia expedita ratione Husain voluptatem suscipit voluptates, cupiditate aut libero
                 modi debitis rem nobis fuga deleniti aspernatur?</p>
                 <a href="#" className="btn btn-lg btn-primary">Dabao</a>
             </div>
           </div>
       </div>

       <a href="#myCarousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
         <span className="sr-only">Previous</span>
         <span className="carousel-control-prev-icon"aria-hidden="true"></span>
       </a>
       <a href="#myCarousel" className="carousel-control-next" role="button"data-bs-slide="next">
         <span className="sr-only">Next</span>
         <span className="carousel-control-next-icon"aria-hidden="true"></span>
       </a>
     </div> */}

     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
       <ol className="carousel-indicators">
         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
       </ol>
       <div className="carousel-inner">
         <div className="carousel-item active">
           <img className="d-block w-100" src={mypro} alt="First slide" />
         </div>
         <div className="carousel-item">
           <img className="d-block w-100" src={butterfly} alt="Second slide" />
         </div>
         <div className="carousel-item">
           <img className="d-block w-100" src="..." alt="Third slide" />
         </div>
       </div>
       <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>
       </a>
       <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="sr-only">Next</span>
       </a>
     </div>
     </>
  )
}

export default Slider