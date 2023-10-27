import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import buyIcon from '../../../src/assets/images/slider/buy-icon.svg'
import { AiFillCaretDown } from "react-icons/ai";

const Banner = () => {
    const [tabIndex, setTabIndex] = useState(0);

  

  

    return (
        <div>
            <div className="bg-cover bg-center   h-screen" 

            style={{ backgroundImage: 'url("https://dreamsestate.dreamguystech.com/html/assets/img/banner.jpg")' }}>
    <div className=' pl-36 pt-20'>
    <h2 className=' text-5xl font-bold  font-serif  leading-snug text-blue-950'>Find Your Best Dream House <br />  for 
     <span className=' text-blue-500'> Rental, Buy & Sell...</span></h2>
     <p className=' text-blue-950 pt-6 text-xl'>Properties for buy / rent in in your location.
      We have more <br /> than 3000+ listings for you to choose</p>

    </div>


 

    
   <div className='mt-12 mx-36'>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="relative">
        <TabList className="flex   justify-start mb-4">
          <Tab>
            <button  style={{ textTransform: 'none' }}  className={`relative  btn mr-6  shadow-lg  text-base font-semibold
             text-blue-950 pt-3  pb-11 px-6    hover:bg-blue-500 hover:text-white ${tabIndex === 0 ? 'active text-white bg-blue-500' : ''}`}>
         <img className={` pb-1     ${tabIndex === 0 ? 'invert-0 brightness-200 ' : ''}`} src={buyIcon}></img>

              Buy a Property
              {tabIndex === 0 && (
                <span className="absolute   -bottom-2   right-24 mt-2 ml-2 w-4 h-4 bg-blue-500 transform rotate-45"></span>
              )}
            </button>
          </Tab>
          <Tab>
          <button  style={{ textTransform: 'none' }}  className={`relative  btn    shadow-lg   text-base font-semibold
             text-blue-950 pt-3  pb-11 px-6   hover:bg-blue-500 hover:text-white ${tabIndex === 1 ? 'active text-white bg-blue-500' : ''}`}>
       <img className={` pb-1     ${tabIndex === 1 ? 'invert-0 brightness-200 ' : ''}`} src={buyIcon}></img>

              Rent a Property
              {tabIndex === 1 && (
                <span className="absolute   -bottom-2   right-24 mt-2 ml-2 w-4 h-4 bg-blue-500 transform rotate-45"></span>
              )}
            </button>
          </Tab>
        </TabList>
      </div>
      <TabPanel>
      <div className="  bg-white   ">
      <form className=" flex items-center   justify-around  bg-white shadow-white rounded-lg p-8 ">
       <div className='mx-4'>
       <input
          type="text"
          id="keyword"
          name="keyword"
          placeholder="Enter keyword"
          required
          className=" bg-slate-100 appearance-none  text-black shadow-lg   text-xl rounded py-3 px-1 w-full leading-tight focus:outline-none focus:shadow-outline"
        />
       </div>
       

        <div className="relative inline-block  flex justify-between ">
          
          <select
            id="propertyType"
            name="propertyType"
            className=" bg-slate-100 appearance-none  text-black shadow-lg   text-xl rounded py-3 px-1 w-full leading-tight focus:outline-none focus:shadow-outline"
            >
              
            <option value="" disabled>Select property type</option>
            <option value="buy">Buy Property</option>
            <option value="rent">Rent Property</option>
          </select>
          <div className=" m-6pointer-events-none   inset-y-0   flex   items-center px-2 text-gray-700">
           <span className='ml-5'><AiFillCaretDown></AiFillCaretDown></span>
           </div>
        </div>
       

        <div className='mx-4'>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter Address"
          required
          className=" bg-slate-100 appearance-none  text-black shadow-lg   text-xl rounded py-3 px-1 w-full leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
   

       <div className='mx-4 '>
       <input
          type="number"
          id="minPrice"
          name="minPrice"
          placeholder="Min Price"
          required
          className=" bg-slate-100 appearance-none  text-black shadow-lg   text-xl rounded py-3 px-1 w-full leading-tight focus:outline-none focus:shadow-outline"
          />
       </div>
     
<div className='mx-4'>
    
<input
          type="number"
          id="maxPrice"
          name="maxPrice"
          placeholder="Max Price"
          required
          className=" bg-slate-100 appearance-none  text-black shadow-lg   text-xl rounded py-3 px-1 w-full leading-tight focus:outline-none focus:shadow-outline"
          />
</div>
  

      <div>
      <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          Search
        </button>
      </div>
      </form>
   

    </div>
      </TabPanel>
      <TabPanel>
        <h2 className="text-3xl">Content for Rent</h2>
      </TabPanel>
    </Tabs>
    </div>

    





   
    </div>
        </div>
    );
};

export default Banner;