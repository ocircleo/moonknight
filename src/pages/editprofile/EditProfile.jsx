import { useContext } from "react";
import { Authcontext } from "../../private/provider/Provider";


const EditProfile = () => {
    const { user } = useContext(Authcontext)
    const handleSubmit = event => {
        event.preventDefault();

    }
    return (
        <div className="md:flex md:flex-col   md:justify-center  md:items-center my-5 bg-gradient-to-r from-[#fff] from-10% via-[#dec9f3] via-30% to-[#ffff] to-90% p-4">
            <div className=" rounded lg:w-4/6 p-2 md:p-6">

                <div className='pb-5 p-2 text-center'>
                    <h1 className=' font-semibold font-serif text-xl pb-1 lg:text-3xl  capitalize'>Edit your Information  </h1>

                </div>

                <form onSubmit={handleSubmit} className="flex justify-center items-center  bg-gray-100 ">
                    <div className='flex flex-col gap-3 p-6 font-serif' >
                        <div className=' md:flex md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Name</label>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full lg:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Number</label>
                                <input type="Number" placeholder="Enter Your Number" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>

                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Age</label>
                                <input type="date" placeholder="Enter Your Age" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>City</label>
                                <input type="text" placeholder="Enter City" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>
                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Thana/Upzila</label>
                                <input type="text" placeholder="Enter Thana/Upzila" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Aditional Location</label>
                                <input type="text" placeholder="Enter Aditional Location" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>

                        <div className='lg:flex lg:gap-16'>
                            <div className=''>
                                <img className='md:h-20 md:w-20 sm:h-32 sm:w-32 mx-auto rounded-xl object-cover' src={user.photoURL} alt="" />
                                <p className=" text-center text-sm pt-2">You may change profile pic but <br /> not nececery</p>
                            </div>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Add new Profile Image</label>
                                <input type="file" placeholder="Enter city name" multiple className="file-input w-full max-w-xs" />

                            </fieldset>


                        </div>
                        <div className='lg:pt-6 text-center md:text-left '>

                            <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className="relative z-20 flex items-center text-sm">
                                    <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    Update
                                </span>
                            </a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditProfile;