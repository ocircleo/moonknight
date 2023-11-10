import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import article1 from '../../assets/images/blogImage/article1.jpg'
import article2 from '../../assets/images/blogImage/article2.jpg'
import article3 from '../../assets/images/blogImage/article3.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    // const { _id } = blogs;
    // console.log(_id, blogs)

    useEffect(() => {
        fetch('https://moonknight-backend.vercel.app/user/allBlog')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])


    const handleInputChange = e => {
        const text = e.target.value;
        if (text.length > 0) {
            fetch(`https://moonknight-backend.vercel.app/user/allBlog`)
                .then(res => res.json())
                .then(data => {
                    setBlogs(data);

                })
        }
        fetch(`https://moonknight-backend.vercel.app/user/blogSearch/${text}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data);

            })

    }


    return (
        <div className='bg-[#F7F6FF]'>
            <div className="h-[200px] bg-[#3D3D6A] text-white text-center py-8">
                <h1 className="text-4xl font-bold mb-2">Blog List</h1>
                <p>Home/Blog List</p>
            </div>

            <div className="grid grid-cols-6 m-6 gap-4 max-w-screen-xl sm:px-4 md:px-6 mx-auto">

                {/* ...........Left side start........... */}
                <div className="lg:col-span-4 col-span-6 grid gap-5">
                    {
                        blogs.length ? blogs.map(blog => <div key={blog._id} className="card card-compact w-[100%] bg-base-100 shadow-xl">

                            <figure><img className="img-fluid hover:scale-125 transition duration-500 cursor-pointer" src={blog.imgUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 rounded-full blur-md ease"></span>
                                            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                            </span>
                                            {/* <span className="relative text-white">View Details</span> */}
                                            <Link className=' relative text-white' to={`/singleBlog/${blog._id}`}>View Details</Link>
                                        </a>
                                    </div>
                                    <div className="flex gap-6 items-center">
                                        <div className="flex justify-center items-center gap-2">
                                            <img className="h-6 w-6 rounded-full" src={blog.imgUrl} alt="" />
                                            <h2 className="font-size: 14px; font-weight: 500; color: #8A909A;">
                                                {blog.title.length > 10
                                                    ? `${blog.title.substring(0, 10)}...`
                                                    : blog.title}
                                            </h2>

                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <span className='text-gray-500'><FaCalendarAlt /></span>
                                            <h2>
                                                {new Date(blog.time).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                                            </h2>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div className='px-4 bg-white'>
                                <h1 className='py-4 delay-300 duration-700 cursor-pointer text-2xl font-bold color text-[#0E0E46] hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>The Most Popular Cities for homebuyers</h1>
                                <p className='pb-4'>There are many variations of passages of lorem ipsum available, but the majority have...</p>
                            </div>
                        </div>) : <div className='flex items-center justify-center'>
                            <h2 className='text-center text-3xl text divide-orange-600  '>Data not found</h2>
                        </div>
                    }


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
                            <input onChange={handleInputChange} type="text" placeholder="Search" className="input bg-[#F7F6FF] mt-3 input- w-full " />
                        </div>
                    </div>
                    <div className="card bg-base-100 w-[100%] shadow-lg mt-7">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Top Article</h2>
                            <hr className='my-3' />
                            <div className='grid gap-6 '>

                                <div className="relative w-full h-80 transform scale-100 overflow-hidden duration-700 hover:scale-105  rounded-lg">
                                    <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: `url(${article1})` }}>
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
                                    <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: `url(${article2}) ` }}>
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
                                    <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: `url(${article3})` }}>
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

export default Blog;

