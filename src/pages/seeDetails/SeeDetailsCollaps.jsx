import { useContext } from "react";
import { Authcontext } from "../../private/provider/Provider";

import { LiaBedSolid } from "react-icons/lia";
import { BiBuildingHouse, BiBath, BiSolidCarGarage } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import Reviews from "./Reviews";



const SeeDetailsCollaps = ({ data }) => {
  const { userDB, refresh } = useContext(Authcontext)
  let [reviews, setReviews] = useState([])
  const review = (e) => {
    e.preventDefault();
    let form = e.target;
    let name, email, description, rating;
    name = form.name.value;
    email = form.email.value;
    description = form.description.value;
    rating = form.rating.value;
    const comentData = {
      postId: data._id,
      hostEmail: data.hostEmail,
      name: name,
      email: email,
      description: description,
      rating: rating,
      userImg: userDB?.imageUrl || false,

    }

    fetch('https://moonknight-backend.vercel.app/user/comment', {
      method: 'POST',
      headers: { 'content-type': "application/json" },
      body: JSON.stringify(comentData)
    }).then(res => res.json()).then(data => {
      if (data.modifiedCount == 1) {
        toast('posted');
        form.reset()
      }
    })
  }
  useEffect(() => {
    if (data?.comments.length > 0) {
      const fetchData = async () => {
        try {
          const promises = data.comments.map(id => fetch(`https://moonknight-backend.vercel.app/user/comment/${id}`).then(res => res.json()))
          const result = await Promise.all(promises)
          setReviews(result)
        } catch (err) {
          console.log(err)
        }
      }
      fetchData()
    }
  }, [data.comments])
  return (
    <div>
      <div className="bg-white mt-10 p-4 rounded-lg shadow-md pt-4">
        <div className="text-2xl font-medium">
          Overview
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 pt-4  p-4">
          <div>
            <p className="text-indigo-400 pl-3 text-2xl"><LiaBedSolid /></p>
            <p className="text-lg pt-2">{data.beds} Beds</p>
          </div>
          <div>
            <p className="text-indigo-400 pl-3 text-2xl"><BiBath /></p>
            <p className="text-lg pt-2">{data.bathroom} Baths</p>
          </div>
          <div>
            <p className="text-indigo-400 pl-3 text-2xl"><BiBuildingHouse /></p>
            <p className="text-lg pt-2">{data.space} Sqft</p>
          </div>
          <div>
            <p className="text-indigo-400 pl-3 text-2xl"><BiSolidCarGarage /></p>
            <p className="text-lg pt-2">{data.garage} Garages</p>
          </div>
          <div>
            <p className="text-indigo-400 pl-3 text-2xl"><SlCalender /></p>
            <p className="text-lg pt-2">{data.builtIn} Built In Year</p>

          </div>
        </div>
      </div>

      <div className="bg-white mt-10 p-4 rounded-lg shadow-md">
        <div className="text-2xl font-medium">
          Description
        </div>
        <p className="pt-4 text-gray-500">{data.description}</p>
      </div>
      <div className="bg-white mt-10  rounded-lg p-4 shadow-md">
        <div className="text-2xl font-medium">
          Property Details
        </div>
        <div className="md:flex md:justify-between gap-4 pt-4 ">
          <section>
            <p className="text-md font-medium text-gray-500">Property Area : <span className="text-gray-600">{data.area}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Price : <span className="text-gray-600">{data.price}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Max People : <span className="text-gray-600">{data.maxPeople}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Property Size : <span className="text-gray-600">{data.space}</span> /sq ft</p>
          </section>
          <section>
            <p className="text-md font-medium text-gray-500 pt-1">Rooms : <span className="text-gray-600">{data.rooms}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Bedrooms : <span className="text-gray-600">{data.beds}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Bathrooms : <span className="text-gray-600">{data.bathroom}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Garage : <span className="text-gray-600">{data.garage}</span></p>
          </section>
          <section>
            <p className="text-md font-medium text-gray-500 pt-1">Year Built : <span className="text-gray-600">{data.builtIn}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Floor : <span className="text-gray-600">{data.floor}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Region : <span className="text-gray-600">{data.region}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">City : <span className="text-gray-600">{data.city}</span></p>
          </section>
        </div>
      </div>

      <div className="bg-white mt-10 rounded-lg shadow-md pb-4">
        <div className="border-solid  border-gray-300 p-2 rounded-md">
          <div className="text-2xl font-medium  p-2">
            Reviews
          </div>
          <div className="flex flex-col gap-4">
            {
              data?.comments.length > 0 ? <>{
                reviews.map(ele => <Reviews key={ele._id} data={ele}></Reviews>)
              }</> : <p className="text-xl text-center font-semibold text-gray-400">No Reviews</p>
            }


          </div>
        </div>

        <form onSubmit={review} className="w-full p-4">
          <div>
            <fieldset className='flex flex-col gap-3 '>
              <label className='font-semibold text-xl'>Name</label>
              <input type="text" required name='name' defaultValue={userDB.name} placeholder="Enter Your Name" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[100%] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
              <p className='text-sm text-red-500'></p>
            </fieldset>
          </div>
          <div className='lg:flex lg:gap-6 justify-center pt-3'>
            <fieldset className='flex flex-col gap-3'>
              <label className='font-semibold text-xl'>Email</label>
              <input type="text" required name='email' defaultValue={userDB.email} placeholder="Price" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-full lg:w-[375px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
              <p className='text-sm text-red-500'></p>
            </fieldset>
            <fieldset className='flex flex-col gap-3 '>
              <label className='font-semibold text-xl'>Ratting</label>
              <input type="number" required name='rating' placeholder="Enter Ratting Point" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-full lg:w-[375px]  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
              <p className='text-sm text-red-500'></p>
            </fieldset>
          </div>

          <fieldset className='flex flex-col gap-3 justify-center w-full '>
            <label className='font-semibold text-xl'>Description</label>
            <textarea name='description' required className="textarea textarea-info input input-bordered bg-slate-100  w-full lg:w-[770px]  h-32 block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" placeholder="Enter Description"></textarea>
            <p className='text-sm text-red-500'></p>
          </fieldset>

          <div className="w-full flex justify-center">

            <button type='submit' className="btn bg-indigo-600  text-white hover:btn glass" >Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeeDetailsCollaps;