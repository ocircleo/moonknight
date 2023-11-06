import pic from '../../assets/images/blogImage/girl1.jpg'

const BeAHostInfoForm = () => {
    const submit = e => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div className="lg:flex md:flex lg:flex-col md:flex-col lg:justify-center md:justify-center lg:items-center md:items-center pb-6 pt-6">
            <div className="bg-white shadow-2xl rounded lg:w-[550px]">

                <div className='pb-5 p-2'>
                    <h1 className='text-indigo-500 font-semibold text-xl pb-2 lg:text-3xl  capitalize'>Information Add</h1>
                    <span className="w-14 h-1.5 bg-indigo-600 inline-block rounded-2xl mr-1.5"></span>
                    <span className="w-40 h-1.5 bg-indigo-600 inline-block rounded-2xl"></span>
                </div>

                <form onSubmit={submit}>
                    <div className='flex flex-col gap-3 p-6' >
                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Name</label>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered bg-slate-100 input-info max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Number</label>
                                <input type="Number" placeholder="Enter Your Number" className="input input-bordered bg-slate-100 input-info max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>

                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Email</label>
                                <input type="text" placeholder="Enter Your Email" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>City</label>
                                <input type="text" placeholder="Enter City" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>
                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Thana/Upzila</label>
                                <input type="text" placeholder="Enter Thana/Upzila" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Aditional Location</label>
                                <input type="text" placeholder="Enter Aditional Location" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>

                        <div className='lg:flex lg:justyfiy-between'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Image</label>
                                <input type="file" placeholder="Enter city name" multiple className="file-input w-full max-w-xs" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <div className='pt-6 lg:pl-12 md:pl-10'>
                                <img className='h-20 w-20 rounded-full' src={pic} alt="" />
                            </div>

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