import React from 'react';

import person from '../genius-car-resources-main/assets/images/about_us/person.jpg'

import parts from '../genius-car-resources-main/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
 
    <div className=' relative w-1/2'>
    <img src={person}  alt='' className="max-w-sm rounded-lg shadow-2xl w-4/5" />
    <img src={parts}  alt='' className=" absolute w-3/5 right-5 top-1/2 max-w-sm rounded-lg shadow-2xl" />

    </div>
     <div  className='w-1/2'>
        <p className='text-2xl font-bold  text-orange-600'>About Us</p>
      <h1 className="my-5 text-5xl font-bold">We are qualiified <br/> & experience in this field  </h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;