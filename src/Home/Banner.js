import React from 'react';

import img1 from '../genius-car-resources-main/assets/images/banner/1.jpg'

import img2 from '../genius-car-resources-main/assets/images/banner/2.jpg'

import img3 from '../genius-car-resources-main/assets/images/banner/3.jpg'
import img4 from '../genius-car-resources-main/assets/images/banner/4.jpg'

import img5 from '../genius-car-resources-main/assets/images/banner/5.jpg'

import img6 from '../genius-car-resources-main/assets/images/banner/6.jpg'

import './carousel-img.css'


const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
         <div className='carousel-img'>
         <img src={img1} alt='' className="w-full" />
         </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-25 top-1/4">
          
          <h1 className='text-6xl font-bold text-white'>

            Affordable <br/>
            Price for Car <br/>
            Servicing


          </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 w-1/2 top-1/2">
          
     
        <p className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, architecto! Maxime libero id alias doloremque in earum sapiente quaerat molestiae soluta </p>

          </div>

          <div className="absolute flex justify-start transform -translate-y-3/4 left-5 right-5 w-1/2 top-3/4">

          <button className="btn btn-outline btn-primary mr-5">Button</button>
         <button className="btn btn-outline btn-secondary">Button</button>
  
            </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
     

          {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div> */}
        </div> 

    
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;