import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../../../private/provider/Data_Provider';
const Banner = () => {
  const { setSearchData } = useContext(dataContext)
  const navigate = useNavigate()
  const searchPage = (e) => {
    e.preventDefault()
    const form = e.target;
    const location = form.location.value;
    const city = form.city.value;
    setSearchData(location, city)
    navigate('/search')
  }



  return (

    <div className="bg-center bg-cover h-auto py-16 pb-24 bg-no-repeat"
      style={{ backgroundImage: 'url("/banner/banner.jpg")' }}>
      <div className='pl-8 pt-6 md:pl-12 md:pt-8 lg:pl-24 lg:pt-20'>
        <h2 className='text-xl md:text-3xl lg:text-5xl font-bold  leading-snug text-blue-950'>Find Your Best Dream House  for <br />
          <span className=' text-[#6C60FE]'> Rental, Buy & Sell...</span></h2>
        <p className=' text-blue-950 pt-6 md:text-xl'>Properties for buy / rent in in your location.
          We have more <br /> than 3000+ listings for you to choose</p>
      </div>
      <form onSubmit={searchPage} className="mx-auto rounded p-4 mt-5 flex flex-col md:flex-row gap-4 items-center justify-center bg-white/10 w-5/6 md:w-4/6">
        <input type="text" placeholder='location' name='location' className='border-2 border-indigo-400 rounded p-3 w-full md:w-48 lg:w-96 bg-gray-200/20' />
        <input type="text" name='city' required placeholder='city (ex: dhaka)' className='w-full md:w-36 lg:w-72 border-2 border-indigo-400 rounded p-3 bg-gray-200/20' />
        <button type='submit' className='bg-indigo-400 w-full md:w-auto px-3 py-3 capitalize font-semibold rounded text-white active:scale-95 duration-100'>Search</button>
      </form>


    </div>

  );
};

export default Banner;