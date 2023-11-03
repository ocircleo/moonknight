import wellcome from '../../assets/images/BeHost/Welcome.gif'

const BeAHost = () => {
    const submit = e => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div className='w-full lg:w-5/6 mx-auto p-2 mt-10'>
            <div className='lg:flex md:flex lg:gap-36'>
                <section className='lg:pt-28'>
                    <img src={wellcome} alt="" />
                </section>
                <section className='bg-white  rounded px-8 pt-6 pb-8 mb-4 lg:w-[550px] border-4 border-indigo-500' style={{ boxShadow: "6px 10px 6px 10px #888888" }}>

                    <div className='pb-5'>
                        <h1 className='text-indigo-500 font-semibold text-xl pb-2 lg:text-3xl  capitalize'> Rent House Add</h1>
                        <span className="w-14 h-1.5 bg-indigo-600 inline-block rounded-2xl mr-1.5"></span>
                        <span className="w-40 h-1.5 bg-indigo-600 inline-block rounded-2xl"></span>
                    </div>

                    <form onSubmit={submit}>
                        <div className='flex flex-col gap-3 ' >
                            <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                                <fieldset className='flex flex-col gap-3'>
                                    <label htmlFor="city" className='font-semibold text-xl'>City Name</label>
                                    <input type="text" placeholder="Enter city name" className="input input-bordered bg-slate-100 input-info max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                    <p className='text-sm text-red-500'></p>
                                </fieldset>
                                <fieldset className='flex flex-col gap-3'>
                                    <label htmlFor="city" className='font-semibold text-xl'>Number Of Rooms</label>
                                    <input type="text" placeholder="Enter Number Of Rooms" className="input input-bordered bg-slate-100 input-info max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                    <p className='text-sm text-red-500'></p>
                                </fieldset>
                            </div>

                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Aditional Location</label>
                                <input type="text" placeholder="Enter Aditional Location" className="input input-bordered bg-slate-100 input-info w-full lg:w-[490px] md:w-[490px] block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>

                            <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                                <fieldset className='flex flex-col gap-3'>
                                    <label htmlFor="city" className='font-semibold text-xl'>Maximum People</label>
                                    <input type="text" placeholder="Maximum People" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                    <p className='text-sm text-red-500'></p>
                                </fieldset>
                                <fieldset className='flex flex-col gap-3'>
                                    <label htmlFor="city" className='font-semibold text-xl'>Price</label>
                                    <input type="text" placeholder="Enter Price" className="input input-bordered bg-slate-100 input-info w-full max-w-xs block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                    <p className='text-sm text-red-500'></p>
                                </fieldset>
                            </div>

                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Description</label>
                                <textarea className="textarea textarea-info input input-bordered bg-slate-100 input-info w-full lg:w-[490px] h-20 block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" placeholder="Enter Description"></textarea>
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                           <div className='lg:flex lg:justyfiy-between'>
                           <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Image</label>
                                <input type="file" placeholder="Enter city name" multiple className="file-input w-full max-w-xs" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <div className='lg:pt-9 lg:pl-12'>
                            <button className="btn btn-outline btn-primary">Add House</button>
                            </div>
                           </div>
                        </div>

                    </form>
                </section>
            </div>
        </div>
    );
};

export default BeAHost;