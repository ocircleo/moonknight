import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const BlogCard = ({ele}) =>  {
    const [deleted, setDeleted] = useState(false);
    const deletePost = async () => {
        const res = await fetch(`https://moonknight-backend.vercel.app/admin/deleteBlog/${ele._id}`)
        const result = await res.json();
        if(result.deletedCount > 0){
            toast("Deleted")
            setDeleted(true);
        }

    }
    return (
        <div key={ele._id} className={`${deleted ? "hidden" : "flex"}  justify-between items-center px-5 bg-gray-200 py-2 rounded`}>

            <div>
                <p className='text-sm font-semibold'>host: {ele?.title}</p>
                <p className='text-sm'>city: {ele?.description.slice(0,80)}</p>

            </div>
            <div className='flex flex-col gap-2 shrink md:shrink-0'>
                <Link className='bg-indigo-400 rounded px-3 py-1 text-white font-semibold' to={`/edit_blog/${ele._id}`}>Edit Blog</Link>
                <button onClick={() => deletePost(ele._id)} className='bg-red-500 rounded px-3 py-1 text-white font-semibold'>Delete Blog</button>

            </div>
        </div>
    );
};

export default BlogCard;