import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PendingApproval = () => {

    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        fetch('https://moonknight-backend.vercel.app/admin/pendingPost')
            .then(res => res.json())
            .then(data => {
                setAllUsers(data)
            });
    }, [])
    return (

        <div className='flex  gap-3 flex-wrap'>

            {
                allUsers.map(ele => (<div key={ele._id} className='relative flex flex-col gap-2 justify-between w-full md:w-56 border-2 rounded p-2'>
                    <img src={ele.images[0]} alt="" className=' h-[150px] object-cover overflow-hidden w-full rounded bg-gray-200' />
                    <Link to={`/blogDetail/${ele._id}`} className='font-semibold py-2 underline'>{ele.title}</Link>
                    <p>location: {ele.region},{ele.city}</p>
                    {/* <button onClick={() => deleteCart(ele._id)} className='bg-red-500 w-full bottom-0 px-3 py-1 text-white capitalize font-semibold rounded'>delete</button> */}

                </div>))
            }
        </div>






    );
};

export default PendingApproval;