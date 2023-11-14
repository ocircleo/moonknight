import React, { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';


const BlogSideBar = ({blog, onSelectBlog }) => {
   


    

    return (
        <div key={blog._id} onClick={() => onSelectBlog(blog)} className=''>
            <div className="relative w-full m-4  cursor-pointer h-80   transform scale-100 overflow-hidden duration-700 hover:scale-105  rounded-lg">
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
                             </div> 
        </div>
    );
};

export default BlogSideBar;