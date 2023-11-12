import { useContext } from "react";
import { Authcontext } from "../../private/provider/Provider";
import ReactStars from "react-rating-stars-component";
import { LiaBedSolid } from "react-icons/lia";
import { BiBuildingHouse, BiBath, BiSolidCarGarage } from "react-icons/bi";
import { SlCalender} from "react-icons/sl";



const SeeDetailsCollaps = ({ data }) => {
  const { userDB, refresh } = useContext(Authcontext)
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <div className="bg-white mt-10 p-4 rounded-lg shadow-md pt-4">
        <div className="text-2xl font-medium">
          Overview
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 pt-4  p-4">
          <div>
            <p className="text-indigo-400 pl-3 text-2xl"><LiaBedSolid/></p>
            <p className="text-lg pt-2">{data.beds} Beds</p>
          </div>
          <div>
          <p className="text-indigo-400 pl-3 text-2xl"><BiBath/></p>
            <p className="text-lg pt-2">{data.bathroom} Baths</p>
          </div>
          <div>
          <p className="text-indigo-400 pl-3 text-2xl"><BiBuildingHouse/></p>
            <p className="text-lg pt-2">{data.space} Sqft</p>
          </div>
          <div>
          <p className="text-indigo-400 pl-3 text-2xl"><BiSolidCarGarage/></p>
            <p className="text-lg pt-2">{data.garage} Garages</p>
          </div>
          <div>
          <p className="text-indigo-400 pl-3 text-2xl"><SlCalender/></p>
            <p className="text-lg pt-2">{data.builtIn} Built In Year</p>
          
          </div>
        </div>
      </div>

      <div className="bg-white mt-10 p-4 rounded-lg shadow-md">
        <div className="text-2xl font-medium">
          Description
        </div>
        <p className="pt-4">{data.description}</p>
      </div>
      <div className="bg-white mt-10  rounded-lg p-4 shadow-md">
        <div className="text-2xl font-medium">
          Property Details
        </div>
        <div className="md:flex md:justify-between gap-4 pt-4 ">
          <section>
            <p className="text-md font-medium text-gray-500">Property Id : <span className="text-gray-600">{data._id}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Price : <span className="text-gray-600">{data.price}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Max People : <span className="text-gray-600">{data.maxPeople}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Property Size : <span className="text-gray-600">{data.space}</span> /sq ft</p>
          </section>
          <section>
            <p className="text-md font-medium text-gray-500 pt-1">Rooms : <span className="text-gray-600">{data.rooms}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Bedrooms : <span className="text-gray-600">{data.beds}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Bathrooms : <span className="text-gray-600">{data.bathroom}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Bathrooms : <span className="text-gray-600">{data.garage}</span></p>
          </section>
          <section>
            <p className="text-md font-medium text-gray-500 pt-1">Year Built : <span className="text-gray-600">{data.builtIn}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Floor : <span className="text-gray-600">{data.floor}</span></p>
            <p className="text-md font-medium text-gray-500 pt-1">Region : <span className="text-gray-600">{data.region}</span></p>
          </section>
        </div>
      </div>

      <div className="bg-white mt-10 p-4 rounded-lg shadow-md pb-4">
        <div className="text-2xl font-medium">
          Reviews
        </div>
        <section className="pt-3">
          <div className="md:flex md:justify-between">
            <div className="md:flex gap-8 ">
              <img className="w-20 h-20 rounded-lg" src={userDB.imageUrl} alt="" />
              <h3 className="text-xl font-medium pt-4">{userDB.name}</h3>
            </div>
            <div className="flex gap-4">
              <div><ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" /></div>
              <h3 className="text-lg font-medium pt-1 ">4.0(20 Reviews)</h3>
            </div>
          </div>
          <div >
            <p className="text-lg text-gray-400 pt-8 pb-8">It was popularised in the 1960s with the release of Letraset sheets containing LoremIpsum passages,
              and more recently with desktop publishing software like Aldus
              PageMakerincluding versions of Lorem Ipsum.It was popularised in the 1960s</p>
          </div>
        </section>

        <form className="w-full ">

          <div className='md:flex md:gap-6 justify-center pt-3'>
            <fieldset className='flex flex-col gap-3 '>
              <label className='font-semibold text-xl'>Name</label>
              <input type="text" required name='name' defaultValue={userDB.name} placeholder="Enter Your Name" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[375px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
              <p className='text-sm text-red-500'></p>
            </fieldset>
            <fieldset className='flex flex-col gap-3'>
              <label className='font-semibold text-xl'>Email</label>
              <input type="text" required name='email' defaultValue={userDB.email} placeholder="Price" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[375px]  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
              <p className='text-sm text-red-500'></p>
            </fieldset>
          </div>

          <fieldset className='flex flex-col gap-3 justify-center w-full '>
            <label className='font-semibold text-xl'>Description</label>
            <textarea name='description' required className="textarea textarea-info input input-bordered bg-slate-100  w-full md:w-[770px]  h-32 block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" placeholder="Enter Description"></textarea>
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