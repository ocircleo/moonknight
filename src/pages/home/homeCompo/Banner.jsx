import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiSearch } from "react-icons/fi";


const Banner = () => {
    const [tabIndex, setTabIndex] = useState(0);

  

  

    return (
        <div>
            <div className="bg-cover bg-center   h-screen" 

            style={{ backgroundImage: 'url("https://dreamsestate.dreamguystech.com/html/assets/img/banner.jpg")' }}>
    <div className=' pl-24 pt-20'>
    <h2 className=' text-5xl font-bold  font-serif  leading-snug text-blue-950'>Find Your Best Dream House <br />  for 
     <span className=' text-[#6A94FF]'> Rental, Buy & Sell...</span></h2>
     <p className=' text-blue-950 pt-6 text-xl'>Properties for buy / rent in in your location.
      We have more <br /> than 3000+ listings for you to choose</p>

    </div>


 

    
   <div className='mt-12 mx-24'>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="relative">
        <TabList className="flex   justify-start mb-4">
          <Tab>
            <button  style={{ textTransform: 'none' }}  className={`relative  btn mr-6  shadow-lg  text-base font-semibold
             text-blue-950 pt-3  pb-11 px-6    hover:bg-[#6A94FF] hover:text-white ${tabIndex === 0 ? 'active text-white bg-[#6A94FF]' : ''}`}>
         <img className={` pb-1     ${tabIndex === 0 ? 'invert-0 brightness-200 ' : ''}`} src='https://dreamsestate.dreamguystech.com/html/assets/img/icons/buy-icon.svg'></img>

              Buy a Property
              {tabIndex === 0 && (
                <span className="absolute   -bottom-2   right-24 mt-2 ml-2 w-4 h-4 bg-[#6A94FF] transform rotate-45"></span>
              )}
            </button>
          </Tab>
          <Tab>
          <button  style={{ textTransform: 'none' }}  className={`relative  btn    shadow-lg   text-base font-semibold
             text-blue-950 pt-3  pb-11 px-6   hover:bg-[#6A94FF] hover:text-white ${tabIndex === 1 ? 'active text-white bg-[#6A94FF]' : ''}`}>
       <img className={` pb-1     ${tabIndex === 1 ? 'invert-0 brightness-200 ' : ''}`} src='https://dreamsestate.dreamguystech.com/html/assets/img/icons/buy-icon.svg'></img>

              Rent a Property
              {tabIndex === 1 && (
                <span className="absolute   -bottom-2   right-24 mt-2 ml-2 w-4 h-4 bg-[#6A94FF] transform rotate-45"></span>
              )}
            </button>
          </Tab>
        </TabList>
      </div>
      <TabPanel>
      <div className="  bg-white   ">
      <form className=" flex items-center   justify-around  bg-white shadow-white rounded-lg py-8 px-4 ">
       
      <input type="text" placeholder="Enter Keyword" className=" mr-2 input w-full bg-slate-100 shadow-lg  text-lg  max-w-xs" />

        <div className="relative mx-1  flex justify-between  ">
        <select className=" w-64 bg-slate-100  text-slate-400 shadow-lg text-lg py-3  ">
     
        <option  className=' bg-slate-100    shadow-lg   text-xl' value="" disabled>Select property type</option>
            <option className=' bg-slate-100 appearance-none   text-slate-400 shadow-lg   text-xl' value="buy">Buy Property</option>
            <option className=' bg-slate-100 appearance-none   text-slate-400 shadow-lg   text-xl' value="rent">Rent Property</option>
</select>
          
        </div>
       
        <input type="text" placeholder="Enter Address" className="mx-1 input w-64  bg-slate-100  shadow-lg  text-lg  max-w-xs" />

      
   
        <input type="text" placeholder="Min Price" className="mx-1 input w-full bg-slate-100  shadow-lg  text-lg  max-w-xs" />

      
        <input type="text" placeholder="Max Price" className="mx-1 input w-full bg-slate-100  shadow-lg  text-lg  max-w-xs" />

  

      <div>
      <button
          type="submit"
          className= " bg-blue-500 hover:bg-blue-600 text-white py-5 px-5 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
         <FiSearch></FiSearch>
        </button>
      </div>
      </form>
   

    </div>
      </TabPanel>
      <TabPanel>
      <div className="  bg-white   ">
      <form className=" flex items-center   justify-around    bg-blue-100 shadow-white rounded-lg py-8 px-4 ">
       
      <input type="text" placeholder="Enter Keyword" className=" mr-2 input w-full bg-slate-100 shadow-lg  text-lg  max-w-xs" />

        <div className="relative mx-1  flex justify-between  ">
        <select className=" w-64 bg-slate-100  text-slate-400 shadow-lg text-lg py-3  ">
     
        <option  className=' bg-slate-100    shadow-lg   text-xl' value="" disabled>Select property type</option>
            <option className=' bg-slate-100 appearance-none   text-slate-400 shadow-lg   text-xl' value="buy">Buy Property</option>
            <option className=' bg-slate-100 appearance-none   text-slate-400 shadow-lg   text-xl' value="rent">Rent Property</option>
</select>
          
        </div>
       
        <input type="text" placeholder="Enter Address" className="mx-1 input w-64  bg-slate-100  shadow-lg  text-lg  max-w-xs" />

      
   
        <input type="text" placeholder="Min Price" className="mx-1 input w-full bg-slate-100  shadow-lg  text-lg  max-w-xs" />

      
        <input type="text" placeholder="Max Price" className="mx-1 input w-full bg-slate-100  shadow-lg  text-lg  max-w-xs" />

  

      <div>
      <button
          type="submit"
          className= " bg-[#6A94FF] hover:bg-blue-600 text-white py-5 px-5 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
         <FiSearch></FiSearch>
        </button>
      </div>
      </form>
   

    </div>
      </TabPanel>
    </Tabs>
    </div>

    





   
    </div>
        </div>
    );
};

export default Banner;