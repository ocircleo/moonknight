import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { useEffect } from "react";
import { toast } from "react-toastify";
import usePageTitle from "../../hooks/PageTitleHook";
import { useLoaderData } from "react-router-dom";


const UpdatePost = () => {
    const loader = useLoaderData()
    usePageTitle('Too late | host');

    const { userDB } = useContext(Authcontext)

    const submit = async e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const city = form.city.value;
        const region = form.region.value;
        const area = form.area.value;
        const rooms = form.rooms.value;
        const beds = form.beds.value;
        const bathroom = form.bathroom.value;
        const garage = form.garage.value;
        const floor = form.floor.value;
        const maxPeople = form.maxpepol.value;
        const description = form.description.value;
        const space = form.space.value
        const hostEmail = userDB.email;

        const data = { id: loader._id, title, price, city, region, area, rooms, beds, bathroom, garage, floor, maxPeople, description, space, hostEmail }
        const res = await fetch('https://moonknight-backend.vercel.app/admin/updatePost', {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
        const result = await res.json()
        if(result.modifiedCount > 0){
            toast("updated")
        }
    }
    return (
        <div className="md:flex md:flex-col  md:justify-center  md:items-center my-5 ">
            <div className="bg-gray-100 rounded lg:w-4/6 p-2 md:p-6 flex flex-col items-center">

                <div className='pb-5'>
                    <h1 className=' font-semibold text-xl pb-2 lg:text-3xl  capitalize'> Update Rent House Info</h1>

                </div>
                <form onSubmit={submit} className="w-full">

                    <div className='md:flex md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3 '>
                            <label className='font-semibold text-xl'>Title</label>
                            <input type="text" required name='title' placeholder="Title" defaultValue={loader?.title} className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Price</label>
                            <input type="number" required name='price' placeholder="Price" defaultValue={loader?.price} className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px]  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>

                    <div className=' md:flex md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>City</label>
                            <input type="text" required name='city' placeholder="City" defaultValue={loader?.city} className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full  md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Region</label>
                            <input type="text" required name='region' placeholder="Region" defaultValue={loader?.region} className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px]  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>
                    <div className=' md:flex md:gap-6 justify-center'>

                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Area </label>
                            <input type="text" name='area' defaultValue={loader?.area} placeholder="Area" className="input input-bordered bg-slate-100 input-info w-full  md:w-[612px]  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>

                    <div className='lg:flex md:flex lg:gap-6 md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Total Rooms</label>
                            <input type="number" required name='rooms' placeholder="Rooms" defaultValue={loader?.rooms} className="input input-bordered bg-slate-100 input-info w-full md:w-[300px]  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Beds Room</label>
                            <input type="number" required name='beds' placeholder="Beds" defaultValue={loader?.beds} className="input input-bordered bg-slate-100 input-info w-full  md:w-[300px] block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded 
                                
                                
                                
                py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>
                    <div className='lg:flex md:flex lg:gap-6 md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Bathroom</label>
                            <input type="number" required name='bathroom' placeholder="Bathroom" defaultValue={loader?.bathroom} className="input input-bordered bg-slate-100 input-info w-full md:w-[300px]  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Garage</label>
                            <input type="text" name='garage' defaultValue={loader?.garage} placeholder="Garage" className="input input-bordered bg-slate-100 input-info   block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>

                    <div className=' md:flex md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Which Floor ?</label>
                            <input type="number" name='floor' placeholder="Floor" defaultValue={loader?.floor} className="input input-bordered bg-slate-100 input-info   block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Max People</label>
                            <input type="number" name='maxpepol' placeholder="MaxPeople" defaultValue={loader?.maxPeople} className="input input-bordered bg-slate-100 input-info   block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>

                    <fieldset className='flex flex-col gap-3 w-full md:w-[612px] mx-auto'>
                        <label className='font-semibold text-xl'>Space ( sqft )</label>
                        <input type="number" name='space' defaultValue={loader?.space} placeholder="ex 2000 sqft" className="input input-bordered bg-slate-100 input-info   block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                        <p className='text-sm text-red-500'></p>
                    </fieldset>
                    <fieldset className='flex flex-col gap-3 w-full md:w-[612px] mx-auto'>
                        <label className='font-semibold text-xl'>Description</label>
                        <textarea name='description' defaultValue={loader?.description} required className="textarea textarea-info input input-bordered bg-slate-100  w-full  h-32 block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" placeholder="Enter Description"></textarea>
                        <p className='text-sm text-red-500'></p>
                    </fieldset>
                    <div className="w-full flex justify-center">

                        <button type='submit' className="btn bg-indigo-600  text-white hover:btn glass" >Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdatePost;