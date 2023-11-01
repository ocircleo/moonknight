import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const blog = () => {
    return (
        <div className='bg-[#F7F6FF]'>
            <div className="h-[200px] bg-[#3D3D6A] text-white text-center py-8">
                <h1 className="text-4xl font-bold mb-2">Blog List</h1>
                <p>Home/Blog List</p>
            </div>

            <div className="grid grid-cols-6 m-6 gap-4 max-w-screen-xl sm:px-4 md:px-6 mx-auto">

                {/* ...........Left side start........... */}
                <div className="lg:col-span-4 col-span-6 grid gap-5">
                    <div className="card card-compact w-[100%] bg-base-100 shadow-xl">
                        <figure><img className="img-fluid hover:scale-125 transition duration-500 cursor-pointer" src="/src/assets/images/blog image/blog1.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <div>
                                    <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 rounded-full blur-md ease"></span>
                                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                        </span>
                                        <span className="relative text-white">Property</span>
                                    </a>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="h-6 w-6 rounded-full" src="/src/assets/images/blog image/man.jpg" alt="" />
                                        <h2 className="font-size: 14px;font-weight: 500;color: #8A909A;">Alphonsa Daniel</h2>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-gray-500'><FaCalendarAlt /></span>
                                        <h2 > Feb 6,2023</h2>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='px-4 bg-white'>
                            <h1 className='py-4 delay-300 duration-700 cursor-pointer text-2xl font-bold color text-[#0E0E46] hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>The Most Popular Cities for homebuyers</h1>
                            <p className='pb-4'>There are many variations of passages of lorem ipsum available, but the majority have...</p>
                        </div>
                    </div>
                    <div className="card card-compact w-[100%] bg-base-100 shadow-xl">
                        <figure><img className="img-fluid hover:scale-125 transition duration-500 cursor-pointer" src="/src/assets/images/blog image/blog2.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <div>
                                    <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 rounded-full blur-md ease"></span>
                                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                        </span>
                                        <span className="relative text-white">Property</span>
                                    </a>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="h-6 w-6 rounded-full" src="/src/assets/images/blog image/man3.jpg" alt="" />
                                        <h2 className="font-size: 14px;font-weight: 500;color: #8A909A;">Francis</h2>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-gray-500'><FaCalendarAlt /></span>
                                        <h2 > Feb 6,2023</h2>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='px-4 bg-white'>
                            <h1 className='py-4 delay-300 duration-700 cursor-pointer text-2xl font-bold color text-[#0E0E46] hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>The Most Popular Cities for homebuyers</h1>
                            <p className='pb-4'>There are many variations of passages of lorem ipsum available, but the majority have...</p>
                        </div>
                    </div>
                    <div className="card card-compact w-[100%] bg-base-100 shadow-xl">
                        <figure><img className="img-fluid hover:scale-125 transition duration-500 cursor-pointer" src="/src/assets/images/blog image/blog3.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <div>
                                    <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 rounded-full blur-md ease"></span>
                                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                        </span>
                                        <span className="relative text-white">Property</span>
                                    </a>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="h-6 w-6 rounded-full" src="/src/assets/images/blog image/man2.jpg" alt="" />
                                        <h2 className="font-size: 14px;font-weight: 500;color: #8A909A;">Eric Krock</h2>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-gray-500'><FaCalendarAlt /></span>
                                        <h2 > Feb 6,2023</h2>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='px-4 bg-white'>
                            <h1 className='py-4 delay-300 duration-700 cursor-pointer text-2xl font-bold color text-[#0E0E46] hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>The Most Popular Cities for homebuyers</h1>
                            <p className='pb-4'>There are many variations of passages of lorem ipsum available, but the majority have...</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='flex items-center gap-2 hover:bg-[#6C60FE] hover:text-white cursor-pointer  inline-flex px-4 py-2 rounded-lg'>
                            <FaArrowLeft></FaArrowLeft>
                            <p>Prev</p>
                        </div>
                        <div className='flex gap-3'>
                            <button className='hover:bg-[#6C60FE] px-3 py-2 rounded-full hover:text-white'>1</button>

                            <button className='hover:bg-[#6C60FE] px-3 py-2 rounded-full hover:text-white'>2</button>

                            <button className='hover:bg-[#6C60FE] px-3 py-2 rounded-full hover:text-white'>3</button>

                            <button className='hover:bg-[#6C60FE] px-3 py-2 rounded-full hover:text-white'>4</button>

                        </div>

                        <div className='flex items-center gap-2 hover:bg-[#6C60FE] hover:text-white cursor-pointer  inline-flex px-4 py-2 rounded-lg'>
                            <FaArrowRight></FaArrowRight>
                            <p>Next</p>
                        </div>
                    </div>

                </div>
                {/* ...........Left side end........... */}



                {/* right side start */}
                <div className="lg:col-span-2 col-span-6 py-2 px-2">
                    <div className="card bg-base-100 shadow-lg ">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Filter</h2>
                            <hr className='' />
                            <input type="text" placeholder="Search" className="input bg-[#F7F6FF] mt-3 input- w-full " />
                        </div>
                    </div>


                    <div className="card bg-base-100 shadow-lg mt-7">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Categories</h2>
                            <hr className='my-3' />

                            <ul className="list-disc cursor-pointer">
                                <li className="group hover:translate-x-4 transition-transform duration-500 ease-in-out">
                                    Property
                                </li>
                                <li className="group hover:translate-x-4 transition-transform duration-500 ease-in-out">
                                    Villa
                                </li>
                                <li className="group hover:translate-x-4 transition-transform duration-500 ease-in-out">
                                    House
                                </li>
                                <li className="group hover:translate-x-4 transition-transform duration-500 ease-in-out">
                                    Guest House
                                </li>
                                <li className="group hover:translate-x-4 transition-transform duration-500 ease-in-out">
                                    Factory
                                </li>
                                <li className="group hover:translate-x-4 transition-transform duration-500 ease-in-out">
                                    Godown
                                </li>
                            </ul>





                        </div>
                    </div>


                    <div className="card bg-base-100 w-[100%] shadow-lg mt-7">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Top Article</h2>
                            <hr className='my-3' />
                            <div className='grid gap-6 '>

                                <div className="relative w-full h-80 transform scale-100 overflow-hidden duration-700 hover:scale-105  rounded-lg">
                                    <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: 'url("/src/assets/images/blog image/article1.jpg")' }}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                        <div className="absolute bottom-7 left-5 text-white text-center text-white hover:text-violet-600 ease-in duration-300">
                                            <h2 className=" font-bold">Amazing Tricks About Build Dream..</h2>
                                            <div className='flex items-center gap-1 mt-3 text-1xl text-white hover:text-violet-600 ease-in duration-300'>
                                                <span className='text-white text-white hover:text-violet-600 ease-in duration-300'><FaCalendarAlt /></span>
                                                <h2 className=''> Feb 6,2023</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full h-80 transform scale-100 overflow-hidden duration-700 hover:scale-105  rounded-lg">
                                    <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: 'url("/src/assets/images/blog image/article2.jpg")' }}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                        <div className="absolute bottom-7 left-5 text-white text-center text-white hover:text-violet-600 ease-in duration-300">
                                            <h2 className=" font-bold">Excited News About Buildings.</h2>
                                            <div className='flex items-center gap-1 mt-3 text-1xl text-white hover:text-violet-600 ease-in duration-300'>
                                                <span className='text-white text-white hover:text-violet-600 ease-in duration-300'><FaCalendarAlt /></span>
                                                <h2 className=''> Feb 6,2023</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full h-80 transform scale-100 overflow-hidden duration-700 hover:scale-105  rounded-lg">
                                    <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: 'url("/src/assets/images/blog image/article3.jpg")' }}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                        <div className="absolute bottom-7 left-5 text-white text-center text-white hover:text-violet-600 ease-in duration-300">
                                            <h2 className=" md:pl-0 font-bold">8 Amazing Tricks About Build Dream..</h2>
                                            <div className='flex items-center gap-1 mt-3 text-1xl text-white hover:text-violet-600 ease-in duration-300'>
                                                <span className='text-white text-white hover:text-violet-600 ease-in duration-300'><FaCalendarAlt /></span>
                                                <h2 className=''> Feb 6,2023</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                {/* right side end */}
            </div>




        </div>
    );
};

export default blog;