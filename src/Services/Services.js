import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services,setServices] = useState([])

  useEffect(() => {

   fetch('services.json')
   .then(res => res.json())
   .then(data =>setServices(data))



  },[])





    return (

        <div>
        <div className='text-center mb-4'>
           <p className='text-2xl font-bold text-orange-600'>
          Services  
           </p>
           <h2 className='text-5xl font-bold' >
 
          Our Services Area

           </h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ipsam veritatis assumenda dolores rerum quaerat.</p>
        </div>



         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  
        
        
           {
             services.map(service => <ServiceCard
             
             key={service._id}

             service={service}
             
             >

             </ServiceCard>)
           }

         </div>
        </div>
    );
};

export default Services;