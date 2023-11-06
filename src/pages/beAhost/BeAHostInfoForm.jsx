import { useContext } from 'react';
import pic from '../../assets/images/blogImage/girl1.jpg'
import { Authcontext } from '../../private/provider/Provider';

const BeAHostInfoForm = () => {
    const { user } = useContext(Authcontext)
    console.log(user)
    const submit = e => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div className="md:flex md:flex-col  md:justify-center  md:items-center my-5 ">
            <div className="bg-gray-100 rounded lg:w-4/6 p-2 md:p-6">

                <div className='pb-5 p-2'>
                    <h1 className=' font-semibold text-xl pb-1 lg:text-3xl  capitalize'>Add your Information  </h1>
                    
                </div>

                <form onSubmit={submit}>
                    <div className='flex flex-col gap-3 p-6' >
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
                                <label htmlFor="city" className='font-semibold text-xl'>Email</label>
                                <input type="text" placeholder="Enter Your Email" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
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
                            <div className='pt-6'>
                                <img className='h-20 w-20 rounded-xl object-cover' src={user.photoURL} alt="" />
                                <p>You may change profile pic but <br /> not nececery</p>
                            </div>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Add new Profile Image</label>
                                <input type="file" placeholder="Enter city name" multiple className="file-input w-full max-w-xs" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>


                        </div>
                        <div className='lg:pt-6'>
                            <button className="btn glass bg-indigo-600 text-white hover:btn glass">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default BeAHostInfoForm;