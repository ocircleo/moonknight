import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiSearch } from "react-icons/fi";


const Banner = () => {
  const [tabIndex, setTabIndex] = useState(0);





  return (
    <div>
      <div className="bg-center bg-cover  lg:h-screen bg-no-repeat "

        style={{ backgroundImage: 'url("../../../../public/banner/banner.jpg")' }}>
        <div className='pl-8 pt-6 md:pl-12 md:pt-8 lg:pl-24 lg:pt-20'>
          <h2 className='text-xl md:text-3xl lg:text-5xl font-bold   font-serif  leading-snug text-blue-950'>Find Your Best Dream House <br />  for
            <span className=' text-[#6C60FE]'> Rental, Buy & Sell...</span></h2>
          <p className=' text-blue-950 pt-6 md:text-xl'>Properties for buy / rent in in your location.
            We have more <br /> than 3000+ listings for you to choose</p>

        </div>





        <div className='pl-8 pt-6 md:pl-12 md:pt-8 lg:pt-20 lg:pl-24 '>
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <div className="relative">
              <TabList className="flex   justify-start mb-4">
                <Tab>
                  <button style={{ textTransform: 'none' }} className={`relative  btn md:mr-6  shadow-lg   text-xs md:text-base font-semibold
             text-blue-950 pt-3  pb-3 md:pb-11 md:px-6    hover:bg-[#6C60FE] hover:text-white ${tabIndex === 0 ? 'active text-white bg-[#6C60FE]' : ''}`}>
                    <div className='flex'>
                      <img className={` pb-1   pr-2 pt-0  md:pt-1   ${tabIndex === 0 ? 'invert-0 brightness-200 ' : ''}`} src='https://dreamsestate.dreamguystech.com/html/assets/img/icons/buy-icon.svg'></img>

                      <h2 className='mt-1'>Buy a Property</h2>
                    </div>
                    {tabIndex === 0 && (
                      <span className="absolute   -bottom-2   right-24 mt-2 ml-2 w-4 h-4 bg-[#6C60FE] transform rotate-45"></span>
                    )}
                  </button>
                </Tab>
                <Tab>
                  <button style={{ textTransform: 'none' }} className={`relative  btn md:mr-6  shadow-lg   text-xs md:text-base font-semibold
             text-blue-950 pt-3  pb-3 md:pb-11 md:px-6    hover:bg-[#6C60FE] hover:text-white ${tabIndex === 1 ? 'active text-white bg-[#6C60FE]' : ''}`}>
                    <div className='flex'>
                      <img className={` pb-1   pr-2 pt-0  md:pt-1   ${tabIndex === 1 ? 'invert-0 brightness-200 ' : ''}`} src='https://dreamsestate.dreamguystech.com/html/assets/img/icons/buy-icon.svg'></img>

                      <h2 className='mt-1'>Rent a Property</h2>
                    </div>
                    {tabIndex === 1 && (
                      <span className="absolute   -bottom-2   right-24 mt-2 ml-2 w-4 h-4 bg-[#6C60FE] transform rotate-45"></span>
                    )}
                  </button>
                </Tab>
              </TabList>
            </div>
            <TabPanel>
              <div className="  lg:bg-white  rounded-2xl lg:mr-12  ">
                <form className=" grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-6 p-5    gap-2 mr-8 md:mr-0 rounded-xl lg:opacity-100     lg:bg-white lg:py-8 shadow-white   md:py-8 md:px-4 ">

                  <input type="text" placeholder="Write Keyword" className="my-1 md:mx-1  border-y-blue-600 lg:border-none input w-full bg-black opacity-30 lg:opacity-100  lg:bg-slate-100  font-semibold   text-white lg:text-blue-950    shadow-lg  text-lg  max-w-xs" />

                  <div className="relative md:ml-0 pl-0   bg-black opacity-30 lg:opacity-100  lg:bg-slate-100 border-y-blue-600 lg:border-none   font-semibold text-white  lg:text-slate-400 my-2 lg:py-0  md:my-0 lg:pr-0 lg:m-1 lg:p-0 w-full flex  rounded input  justify-between   ">
                    <select className="  w-full  rounded lg:p-0 lg:m-0     py-0   lg:py-3  md:mx-1 input  lg:opacity-100 opacity-50
         lg:bg-slate-100 bg-black shadow-lg  text-lg  max-w-xs ">

                      <option className='  lg:bg-red-200 py-0   shadow-lg  text-xl' value="" disabled>Select property type</option>
                      <option className=' lg:bg-blue-400 appearance-none  font-semibold   lg:text-blue-950 shadow-lg   text-xl' value="buy">Buy Property</option>
                      <option className='  lg:bg-green-300 appearance-none   font-semibold   lg:text-blue-950 shadow-lg   text-xl' value="rent">Rent Property</option>
                    </select>

                  </div>
                  <input type="text" placeholder="Write Address" className="my-1 md:mx-1 border-y-blue-600  bg-black opacity-30 lg:opacity-100 lg:border-none input w-full bg-black  lg:bg-slate-100  font-semibold text-white  lg:text-blue-950    shadow-lg  text-lg  max-w-xs" />
                  <input type="text" placeholder="Min Price" className="my-1 md:mx-1 border-y-blue-600 input  bg-black opacity-30 lg:opacity-100 lg:border-none w-full bg-black  lg:bg-slate-100  font-semibold text-white  lg:text-blue-950    shadow-lg  text-lg  max-w-xs" />
                  <input type="text" placeholder="Max price" className="my-1 md:mx-1 border-y-blue-600 input  bg-black opacity-30 lg:opacity-100 lg:border-none w-full bg-black  lg:bg-slate-100  font-semibold text-white  lg:text-blue-950    shadow-lg  text-lg  max-w-xs" />
                  <div className=' flex justify-center  '>


                    <button
                      type="submit"
                      className=" after: bg-[#6C60FE] w-full md:my-1  hover:bg-blue-600 text-white py-3  md:px-5 lg:py-0 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      <span className='flex justify-center text-2xl '><FiSearch ></FiSearch></span>
                    </button>




                  </div>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="   lg:mr-12 rounded-2xl  ">
                <form className=" grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-6 p-5    gap-2 mr-8 md:mr-0 rounded-xl lg:opacity-100     lg:bg-slate-200 lg:p-8 shadow-white   md:py-8 md:px-4 ">

                  <input type="text" placeholder="Write Keyword" className="my-1 md:mx-1  border-y-blue-600 lg:border-none input w-full bg-black opacity-30 lg:opacity-100  lg:bg-slate-100  font-semibold   text-white lg:text-blue-950    shadow-lg  text-lg  max-w-xs" />

                  <div className="relative md:ml-0 pl-0   bg-black opacity-30 lg:opacity-100  lg:bg-slate-100 border-y-blue-600 lg:border-none   font-semibold text-white  lg:text-slate-400 my-2 lg:py-0  md:my-0 lg:pr-0 lg:m-1 lg:p-0 w-full flex  rounded input  justify-between   ">
                    <select className="  w-full  rounded lg:p-0 lg:m-0     py-0   lg:py-3  md:mx-1 input  lg:opacity-100 opacity-50
         lg:bg-slate-100 bg-black shadow-lg  text-lg  max-w-xs ">

                      <option className='  lg:bg-red-200 py-0   shadow-lg  text-xl' value="" disabled>Select property type</option>
                      <option className=' lg:bg-blue-400 appearance-none  font-semibold   lg:text-blue-950 shadow-lg   text-xl' value="buy">Buy Property</option>
                      <option className='lg:bg-green-300 appearance-none   font-semibold   lg:text-blue-950 shadow-lg   text-xl' value="rent">Rent Property</option>
                    </select>

                  </div>
                  <input type="text" placeholder="Write Address" className="my-1 md:mx-1 border-y-blue-600 opacity-30 lg:opacity-100 lg:border-none input w-full bg-black  lg:bg-slate-100  font-semibold text-white  lg:text-blue-950    shadow-lg  text-lg  max-w-xs" />
                  <input type="text" placeholder="Min Price" className="my-1 md:mx-1 border-y-blue-600 input  bg-black opacity-30 lg:opacity-100 lg:border-none w-full lg:bg-slate-100  font-semibold text-white  lg:text-blue-950    shadow-lg  text-lg  max-w-xs" />
                  <input type="text" placeholder="Max price" className="my-1 md:mx-1 border-y-blue-600 input  bg-black opacity-30 lg:opacity-100 lg:border-none w-full lg:bg-slate-100  font-semibold text-white  lg:text-blue-950    shadow-lg  text-lg  max-w-xs" />
                  <div className=' flex justify-center  '>
                    <button
                      type="submit"
                      className=" after: bg-blue-500 w-full md:my-1  hover:bg-blue-600 text-white py-3  md:px-5 lg:py-0 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      <span className='flex justify-center text-2xl '><FiSearch ></FiSearch></span>
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