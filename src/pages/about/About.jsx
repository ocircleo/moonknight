import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';




const About = () => {

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <div className=' bg-blue-950 flex justify-center items-center h-56 '>
        <div className=''>
          <h2 className='text-4xl font-bold text-center text-white pb-2'>About Us</h2>
          <ul className='flex justify-center align-middle text-lg text-white'>
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <span className='px-2 text-[#FCAF3D]'>/</span>
            <li>
              <Link to={"/about"}> About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=' grid  grid-cols-3'>
        <span className='border-2 border-[#4F46E5]'></span>
        <span className='border-2 border-[#FCAF3D]'></span>
        <span className='border-2  border-[#0DCA95]'></span>
      </div>

      <div className=' py-6  md:py-8 lg:py-10 px-6 md:px-12 lg:px-28  bg-[#F1F1F1]'>
        <h4 className='text-[#6C60FE] font-semibold '>About DreamsEstate</h4>
        <h2 className=' text-2xl md:text-4xl lg:text-5xl text-[#0E0E46]  font-bold py-4 lg:pt-6 lg:pb-8 '>We connect building with <br /> people</h2>

        <p className=' text-[#8a99ad] font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante, <br /><br />

          congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum
          tempor. Praesent sollicitudin lectus ut pharetra pulvinar.
          Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet.</p>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5   px-16 md:px-28 lg:px-28 bg-[#f1f1f1]'>
        {/* <div> <img className=' w-80 hover:w-96' src="https://dreamsestate.dreamstechnologies.com/html/assets/img/about-us/about-us-01.jpg" alt="" /></div> */}

        <div className="relative w-full overflow-hidden rounded-3xl h-full"> {/* You can adjust the width and height */}
          <img
            src="https://dreamsestate.dreamstechnologies.com/html/assets/img/about-us/about-us-01.jpg"
            alt="Your Image"
            className="   transition  duration-1000 transform overflow-hidden  hover:scale-125 "
          />
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl h-full"> {/* You can adjust the width and height */}
          <img
            src="https://dreamsestate.dreamstechnologies.com/html/assets/img/about-us/about-us-02.jpg"
            alt="Your Image"
            className="   transition  duration-1000 transform overflow-hidden  hover:scale-125 "
          />
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl h-full"> {/* You can adjust the width and height */}
          <img
            src="https://dreamsestate.dreamstechnologies.com/html/assets/img/about-us/about-us-03.jpg"
            alt="Your Image"
            className="   transition  duration-1000 transform overflow-hidden  hover:scale-125 "
          />
        </div>


      </div>



      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>


        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4   place-content-center place-items-center text-center gap-5 px-24 py-20 bg-[#F1F1F1]'>
          <div className='items-center rounded-lg  w-64 h-64  pt-10  bg-[#FFFFFF] hover:bg-[#653cef] group hover:text-white ease-in-out duration-100 '>

            <img className='w-4/12 mx-auto' src="statistics/counter-icon-1 (1).svg" alt="" />

            <div className='mt-5 '>
              <h1 className='text-[#0E0E46]  group-hover:text-white text-4xl mb-2 font-bold '>
                {counterOn && <CountUp start={0} end={50} duration={2} delay={0}></CountUp>}
                K
              </h1>
              <p className='text-[#8a99ad]  group-hover:text-white text-xl  font-semibold'>Listings Added</p>
            </div>
          </div>
          <div className='items-center rounded-lg  w-64 h-64  pt-10  bg-[#FFFFFF] hover:bg-[#653cef] group hover:text-white ease-in-out duration-100 '>

            <img className='w-4/12 mx-auto' src="statistics/counter-icon-2.svg" alt="" />

            <div className='mt-5'>
              <h1 className='text-[0E0E46] group-hover:text-white text-4xl mb-2 font-bold'>
                {counterOn && <CountUp start={0} end={3000} duration={2} delay={0}></CountUp>}
                +
              </h1>
              <p className='text-[8a99ad] group-hover:text-white text-xl font-semibold'>Agents Listed</p>
            </div>
          </div>
          <div className='items-center rounded-lg  w-64 h-64  pt-10  bg-[#FFFFFF] hover:bg-[#653cef] group hover:text-white ease-in-out duration-100 '>

            <img className='w-4/12 mx-auto' src="statistics/counter-icon-3.svg" alt="" />

            <div className='mt-5'>
              <h1 className='text-[0E0E46] group-hover:text-white text-4xl mb-2 font-bold'>
                {counterOn && <CountUp start={0} end={2000} duration={2} delay={0}></CountUp>}
                +
              </h1>
              <p className='text-[8a99ad] group-hover:text-white text-xl font-semibold'>Sales Complited</p></div>
          </div>
          <div className='items-center rounded-lg  w-64 h-64  pt-10  bg-[#FFFFFF] hover:bg-[#653cef] group hover:text-white ease-in-out duration-100 '>

            <img className='w-4/12 mx-auto' src="statistics/counter-icon-4.svg" alt="" />

            <div className='mt-5'>
              <h1 className='text-[0E0E46] group-hover:text-white text-4xl mb-2 font-bold'>
                {counterOn && <CountUp start={0} end={5000} duration={2} delay={0}></CountUp>}
                +
              </h1>
              <p className='text-[8a99ad] group-hover:text-white text-xl font-semibold'>Users</p>
            </div>
          </div>


        </div>
      </ScrollTrigger>





      <div className='bg-[#1E1D85]  px-12 py-6  md:px-16 md:py-10 lg:px-24 lg:py-16'>
        <div className=' grid grid-cols-1 lg:grid-cols-2  gap-0'>
          <div className='p-0 m-0'>
            <h2 className=' md:text-center text-2xl md:text-4xl lg:text-5xl text-white font-bold  py-6 md:py-8 lg:py-12 lg:pl-12 '>Ready to Book a Place?</h2>

            <img src="https://dreamsestate.dreamstechnologies.com/html/assets/img/about-us/about-us-04.jpg" className='  md:items-center border-8 border-white  my-6  md:my-8 md:ml-16' alt="" />


          </div>
          <div className='text-white md:px-16'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula
              eu lectus vulputate porttitor sed feugiat nunc. <span className='text-[#FCAF3D]'>Mauris ac consectetur ante,</span></p>
            <br /><br />
            <p>congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum
              tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
              libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet. congue, sed luctus lectus
              congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor.
              Praesent sollicitudin lectus ut pharetra pulvinar. Done congue, sed luctus lectu congue. Integer
              condimentum sem. Duis elementum tortor eget condimentum tempor.
              Praesent sollicitudin lectus ut pharetra pulvinar. Done Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc. <span className='text-[#FCAF3D]'>Mauris ac consectetur ante,</span></p>
            <br /><br />
            <p>congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum
              tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula.
              Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>






    </div>
  );
};

export default About;