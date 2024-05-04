
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Post = ({ ele }) => {
    const [deleted, setDeleted] = useState(false);
    const deletePost = async (id) => {
        const res = await fetch(`https://moonknight-backend.vercel.app/admin/deletePost/${ele._id}`)
        const result = await res.json();
        if(result.deletedCount > 0){
            toast("Deleted")
            setDeleted(true);
        }

    }
    return (
        <div key={ele?._id} className={`${deleted ? "hidden" : "flex"}  justify-between items-center px-5 bg-gray-200 py-2 rounde`}>
            <div>
                <p>host: {ele?.hostEmail}</p>
                <p>city: {ele?.city}</p>
                <p>price: {ele?.price}</p>

            </div>
            <div className='flex flex-col gap-2'>
                <Link className='bg-indigo-400 rounded px-3 py-1 text-white font-semibold' to={`/updatePost/${ele._id}`}>Edit Post</Link>
                <button onClick={() => deletePost(ele._id)} className='bg-red-500 rounded px-3 py-1 text-white font-semibold'>Delete Post</button>
            </div>
        </div>
    );
};

export default Post;