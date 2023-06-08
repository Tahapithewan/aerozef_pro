import React,{ useState,useEffect } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import './AppSlider.css';
import Cards from "../MyCards/Cards";
import axios from "axios";
import URL from "../../../../../config/URL";

 const AppSlider = ()=>{
    let [data, setData]=useState([]);
    let fetchData = async()=>{
        let response = await axios.get(`${URL}/applicants`)
        // console.log(response.data)
        setData(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
          slidesToSlide: 2,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      const product = data.map((item,index)=>{
        return(
            <Cards
            id={item.id}
            image={item.image}
            heading={item.heading}
            description={item.description}
            />
            )
    });

    return(
        <div className="App mt-5 pt-5 mb-5">
            <h1>Applicants Products</h1>
            <Carousel
            responsive={responsive}
            // swipeable={false}
            // draggable={false}
            // showDots={true}
            infinite={true}
            // keyBoardControl={true}
            // customTransition="all .5"
            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {product}
            </Carousel>
        </div>
    )
}

export default AppSlider;