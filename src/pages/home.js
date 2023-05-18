import React from "react";

const home = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className=" h-7 mb-6">
        <h2 className="text-center text-4xl">Header</h2>
      </div>

      {/* Banner section */}
      <div className="border-t-2 border-b-2 border-red-600">
        <h2 className="text-center text-2xl">Banner</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white mb-32">
          <div className="border-2  p-10">section1</div>
          <div className="border-2  p-10">Section2</div>
        </div>
      </div>
      {/* Web section */}
      <div className="">
        <div className="flex flex-col items-center pb-36">
          <p className="font-normal w-10/12 text-center heading-4 lg:w-8/12 mx-auto ">
            The all-in-one modern technology solution that offers everything to
            accelerate your business across the digital platforms.
          </p>
          <img
            className="py-4"
            src="https://github.com/MurtazaKp/Jamstack/blob/main/public/images/line-circle.png?raw=true"
          ></img>
          <h4 className="w-4/12 font-bold text-center">
            Your one stop solution in web reality.
          </h4>
          <img
            className="mt-3"
            src="https://github.com/MurtazaKp/Jamstack/blob/main/public/images/logo.png?raw=true"
          />
        </div>
      </div>
      {/* textbanner list section */}
      <div className="grid grid-col-1 lg:grid-cols-2 bg-secondary  ">
        <div className=" ">
          <h2 className=" lg:p-11 lg:pl-24 p-5  sm:p-10 text-white ">
            Jamstack+ , the leading brand that provides start to end solutions
            to all web presence.
          </h2>
        </div>

        <div className="  bg-accent-100 p-5 sm:p-10  lg:p-11 lg:pl-20 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl">
          <h4 className="mb-14 bg-grey text-4xl">
            We are experts in JAMstack development which assure you{" "}
          </h4>
          <div>
            <div>
              <ul>
                <li className="p-2 flex gap-4">
                  <div className={`rounded-full w-5 h-5 bg-tertiary `}></div>
                  <div className="w-42 h-30 font-bold text-xl ">
                    High performance
                  </div>
                </li>
                <li className="p-2 flex gap-4">
                  <div className={`rounded-full w-5 h-5 bg-tertiary `}></div>
                  <div className="w-42 h-30 font-bold text-xl ">
                    High performance
                  </div>
                </li>
                <li className="p-2 flex gap-4">
                  <div className={`rounded-full w-5 h-5 bg-tertiary `}></div>
                  <div className="w-42 h-30 font-bold text-xl ">
                    High performance
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* video component section */}

      <div className="py-24">
        <h2 className="text-center text-4xl "> What is jamstack</h2>
      </div>

      {/* web facts section */}
      <div className=" p-5 lg:px-10 flex flex-col gap-5 py-12 bg-accent-100 ">
        <div className={`w-20 h-20 rounded-full bg-tertiary`}></div>
        <div>
          <h3 className="w-11/12">
            Google found that 53% of mobile users will leave a website that
            takes longer than three seconds to load.
          </h3>
        </div>
      </div>

      {/* web stactics section */}

      <div className="bg-secondary text-white lg:pl-28 lg:py-16">
        <div className="">
          <h2 className="">Know your webstatics</h2>
        </div>
        <div className="">
          <p className="w-7/12">Check your website performance and check how Jamstack+ can help you improve your business.</p>
        </div>
        
      </div>

      {/* benifits section */}
      <div className=" flex flex-col lg:flex-row  p-10 pb-0 lg:pt-32">
        <div className=" lg:w-5/12">
          <h3 className="lg:w-5/12 mb-5">Benefits of working with us:</h3>
        </div>

        <div className="lg:w-7/12">
          <div className="flex gap-5 pt-5 border-t-4 border-t-tertiary ">
            <div className="lg:pl-12 flex items-start gap-3 ">
              <div className="bg-tertiary w-1 h-1 p-3 mt-2  rounded-full "></div>
              <div>
                <h5> Everything for everyone </h5>
                <p className="pb-8  pt-5">
                  We cater from small businesses to big established businesses.
                  We provide all kinds of solution right from planning to launch
                  on any platform in web reality.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-5 border-t-4 border-t-tertiary ">
            <div className="lg:pl-12 flex items-start gap-3 ">
              <div className="bg-tertiary w-1 h-1 p-3 mt-2  rounded-full "></div>
              <div>
                <h5> Everything for everyone </h5>
                <p className="pb-8  pt-5">
                  We cater from small businesses to big established businesses.
                  We provide all kinds of solution right from planning to launch
                  on any platform in web reality.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-5 border-t-4 border-t-tertiary ">
            <div className="lg:pl-12 flex items-start gap-3 ">
              <div className="bg-tertiary w-1 h-1 p-3 mt-2  rounded-full "></div>
              <div>
                <h5> Everything for everyone </h5>
                <p className="pb-8  pt-5">
                  We cater from small businesses to big established businesses.
                  We provide all kinds of solution right from planning to launch
                  on any platform in web reality.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-5 border-t-4 border-t-tertiary ">
            <div className="lg:pl-12 flex items-start gap-3 ">
              <div className="bg-tertiary w-1 h-1 p-3 mt-2  rounded-full "></div>
              <div>
                <h5> Everything for everyone </h5>
                <p className="pb-8  pt-5">
                  We cater from small businesses to big established businesses.
                  We provide all kinds of solution right from planning to launch
                  on any platform in web reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product card section */}
      <div className="py-24 border-t-2 border-b-2 border-blue-500">
        <h2 className="text-center text-4xl">Product card</h2>
      </div>

      {/* Our client section */}
      
      <div className=" border-t-2 border-b-2 border-red-500 mt-1">
        <h2 className="text-4xl text-center">Our CLients</h2>
        <div className="flex flex-col lg:flex-row pb-32  border-t-2 border-b-2">
        <div className="lg:w-5/12 p-10 border">section1</div>
        <div className="lg:w-7/12 p-10 border">Section2</div>
        </div>
        
      </div>

      {/* Edge Network section */}
      <div className="border-t-2 border-b-2 pb-32 border-blue-600">
        <h2 className="text-4xl text-center ">Egde network</h2>
      </div>

      {/* case study section */}
      <div className=" border-t-2 border-b-2 pb-24 border-blue-600">
        <h2 className="text-4xl text-center ">Case Study</h2>
      </div>

      <div className=" flex flex-col items-center justify-center gap-6 bg-accent-100 py-10">
        <h2 className="text-4xl text-center w-6/12 ">
          Excited to switch on modern technology? Connect Today
        </h2>
        <button className=" bg-pink-600 text-white p-2 rounded-full">
          Connect today
        </button>
      </div>

      {/* Testimonial section */}
      <div className="py-24 border-t-2 border-b-2 border-red-600">
        <h2 className="text-4xl text-center ">Testimonial</h2>
        <div className="flex flex-col lg:flex-row  ">
          <div className="lg:w-5/12 border-2 px-10 py-2">section1</div>
          <div className="lg:w-7/12 border-2 px-10 py-2">Section2</div>
        </div>
      </div>

      {/* Blog card section */}
      <div className="pb-24 border-t-2 border-b-2 border-blue-500">
        <h2 className="text-center text-4xl">Blog card</h2>
      </div>

      {/* footer section */}
      <div className="">
        <h2 className="text-center text-4xl">Footer</h2>
      </div>
    </div>
  );
};

export default home;
