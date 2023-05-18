import React from 'react'

const ecommj = () => {
  return (
    <div className='container'>
         {/* Header Section */}
      <div className=" border-b-2  border-red-600">
        <h2 className="text-center text-4xl">Header</h2>
      </div>


      
    
      {/* Banner section */}
      <div className="border-t-2 border-b-2 pb-32 border-blue-600">
        <h2 className="text-center text-2xl">Banner</h2>
        
      </div>


         {/* Ecomm section */}
      <div className="mb-32 flex flex-col items-center">
        <h2 className="text-center pb-5">What is ecommJ?</h2>
        <p className='w-7/12 mx-auto text-center'>The ecommJ is an innovation of Jamstack+ based on JAMstack architecture.
The platform delivers fast, easily managed CMS, eCommerce vitals for businesses that are uniquely tailored with popular tech stack by decoupling frontend and backend responsibilities.</p>
<img
            className="py-4"
            src="https://github.com/MurtazaKp/Jamstack/blob/main/public/images/line-circle.png?raw=true"
          ></img>
      </div>


         {/* Ecomm process */}
         <div className="pb-32 border-t-2 border-b-2 border-red-600">
        <h2 className="text-center text-4xl">Ecommj Process</h2>
      </div>


      
         {/* Facts Section with bg color */}
         <div className=" bg-secondary flex flex-col items-center px-32 pt-24 pb-32">
        <h3 className="text-center text-white w-11/12 ">Did you know that, eCommerce acceleration is systematic, data-driven and capable of producing greater value over time for any brand with a quality products </h3>
      </div>


     {/* Facts Section with bg color */}
     <div className="py-32 border-t-2 border-b-2 border-red-600">
        <h2 className="text-center text-4xl">Accordian Section</h2>
        <div className="flex flex-col lg:flex-row bg-white  ">
          <div className='px-10 py-1 border-2 w-5/12'>section1</div>
          <div className='px-10 py-1 border-2 w-7/12'>Section2</div>
        </div>
      </div>


      
        {/* case study section */}
        <div className=" border-t-2 border-b-2 pb-24 border-blue-600">
        <h2 className="text-4xl text-center ">Case Study</h2>
      </div>


        
      {/* cta section */}
      <div className="flex fle-col bg-accent-100 justify-center items-center">
        <h2 className="text-4xl py-20 ">Excited to switch to ecommJ?</h2>
      </div>


      
      {/* Testimonial section */}
      <div className="py-24 border-t-2 border-b-2 border-red-600">
        <h2 className="text-4xl text-center ">Testimonial</h2>
        <div className="flex flex-col lg:flex-row  ">
          <div className="lg:w-5/12 border-2 px-10 py-2">section1</div>
          <div className="lg:w-7/12 border-2 px-10 py-2">Section2</div>
        </div>
      </div>

      {/*  blog section */}
      <div className=" border-b-2 pb-24 border-blue-600">
        <h2 className="text-center text-4xl">Blog card</h2>
      </div>


      
      {/*  footer section */}
      <div className="">
        <h2 className="text-center text-4xl">Footer</h2>
      </div>






    </div>
  )
}

export default ecommj