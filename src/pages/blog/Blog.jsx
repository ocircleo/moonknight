import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import article1 from '../../assets/images/blogImage/article1.jpg'
import article2 from '../../assets/images/blogImage/article2.jpg'
import article3 from '../../assets/images/blogImage/article3.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/PageTitleHook';
import Loading from '../../shared/loading/Loading';




const Blog = () => {

    usePageTitle('Too late | blog'); 

    const [spinner, setSpinner]= useState(true)
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetch('https://moonknight-backend.vercel.app/user/allBlog')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setSpinner(false)
                
            })
    }, [])


//     const handleInputChange = e => {
//         e.preventDefault();
//         const text = e.target.data.value;
//         setSpinner(true)

// if (text.length > 0) {
           
//     fetch(`https://moonknight-backend.vercel.app/user/allBlog`)
//         .then(res => res.json())
//         .then(data => {
//             setBlogs(data);
//             setSpinner(false)

//         })
      
// }

// fetch(`https://moonknight-backend.vercel.app/user/blogSearch/${text}`)

//     .then(res => res.json())
//     .then(data => {
//         setBlogs(data);
//         setSpinner(false)

//     })
    

//     }

const handleInputChange = (e) => {
   
    const text = e.target.data.value;

    setSpinner(true);

    if (text.length > 0) {
        fetch(`https://moonknight-backend.vercel.app/user/blogSearch/${text}`)
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setSpinner(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setBlogs([]);
                setSpinner(false);
            });
    } else {
        setBlogs([]);
        setSpinner(false);
    }
};





  
    return (
       <>
       {spinner ? (
       <div className='my-8 lg:my-32'>
         <Loading></Loading>
       </div>
       ):(
         <div className='bg-[#F7F6FF]'>
         <div className=' bg-blue-950 flex justify-center items-center h-56 '>
        <div className=''>
          <h2 className='text-4xl font-bold text-center text-white pb-2'>Blogs</h2>
          <ul className='flex justify-center align-middle text-lg text-white'>
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <span className='px-2 text-[#FCAF3D]'>/</span>
            <li>
              <Link to={"/about"}> About</Link>
            </li>
          </ul>
        </div>
      
      </div>

         <div className=' grid  grid-cols-3'>
        <span className='border-2 border-[#4F46E5]'></span>
        <span className='border-2 border-[#FCAF3D]'></span>
        <span className='border-2  border-[#0DCA95]'></span>
      </div> 

         <div className="grid grid-cols-6 m-6 gap-4 max-w-screen-xl sm:px-4 md:px-6 mx-auto">

             {/* ...........Left side start........... */}
             <div className="lg:col-span-4 col-span-6 grid gap-5 ">

                {/* ...........right side data show........... */} 
              

                  {/* ...........right side data show end........... */} 
                 {
                     blogs.length ? blogs.map(blog => <div key={blog._id} className="card card-compact w-[100%] bg-base-100 shadow-xl overflow-hidden">

                         <figure><img className="img-fluid object-cover w-full h-80 hover:scale-125 transition duration-500 cursor-pointer" src={blog.imgUrl} alt="Shoes" /></figure>
                         <div className=" card-body   grow-0  shrink-0">
                             <div className="flex justify-between items-center">



                                 <Link className=' relative bg-indigo-400 text-white px-4 py-2 font-semibold rounded ' to={`/singleBlog/${blog._id}`}>View Details</Link>


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
                             <h1 className='py-4 delay-300 duration-700 cursor-pointer text-2xl font-bold color
                              text-[#0E0E46] hover:text-violet-600 active:text-violet-700 focus:outline-none 
                              focus:ring focus:ring-violet-300 '>
                                 {blog.title.length > 10
                        ? `${blog.title.substring(0, 50)}...`
                        : blog.title}
                             </h1>
                             <p className='pb-4'> { `${blog.description.substring(0, 150)}...`}</p>
                         </div>
                     </div>) : <div className='flex pt-32 justify-center'>
                         <h2 className='text-center text-3xl text divide-orange-600  '>Data not found</h2>
                     </div>
                 }

                 {/* 
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
                 </div> */}

             </div>
             {/* ...........Left side end........... */}



             {/* right side start */}
             <div className="lg:col-span-2 col-span-6 py-2 px-2">
                 <div className="card bg-base-100 p-3 mx-4 shadow-lg ">
                     <div className="card-body">
                         <h2 className="card-title font-bold">Filter</h2>
                         <hr className='' />
                         <form onSubmit={handleInputChange}>
                         <input type="text" name='data' placeholder="Search" className="input bg-[#F7F6FF] mt-3 input- w-full " />
                    </form>
                     </div>
                 </div>
                 <div className="card bg-base-100 p-3 mx-4 w-[100%] shadow-lg mt-7">
                     <div className="card-body ">
                         <h2 className="card-title  font-bold">Top Article</h2>
                         <hr className='my-3' />
                         <div className='grid gap-6 '>

       { 
        blogs.map(blog =>
            <Link key={blog._id} className="relative w-full h-80 transform scale-100 overflow-hidden duration-700 hover:scale-105  rounded-lg " to={`/singleBlog/${blog._id}`}>
                                 <div className="bg-cover rounded-2xl bg-center h-full relative" style={{ backgroundImage: `url(${blog.imgUrl})` }}>
                                     <div className="absolute   inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                     <div className="absolute bottom-7 left-5  text-center text-white hover:text-violet-600 ease-in duration-300">
                                         <h2 className=" font-bold md:text-xl lg:text-2xl"> {blog.title.length > 10
                        ? `${blog.title.substring(0, 15)}...`
                        : blog.title}</h2>
                                         <div className='flex items-center gap-1 mt-3 text-1xl text-white hover:text-violet-600 ease-in duration-300'>
                                             <span className=' text-white hover:text-violet-600 ease-in duration-300'><FaCalendarAlt /></span>
                                             <h2 className=''> Feb 6,2023</h2>
                                         </div>
                                     </div>
                                 </div>
                             </Link>
            )
       }


                            {/* <div className="relative w-full h-80 transform scale-100 overflow-hidden duration-700 hover:scale-105  rounded-lg">
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
                             </div> */}
                        


                         </div>
                     </div>
                 </div>


       

             </div>
             {/* right side end */}
         </div>




     </div >
       )}
       </>
    );
};

export default Blog;

