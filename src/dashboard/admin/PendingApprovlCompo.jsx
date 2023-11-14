import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PendingApprovlCompo = ({ ele }) => {
    const [visible, setVisible] = useState(true)
    const approve = () => {
        fetch(`https://moonknight-backend.vercel.app/admin/approvePost/${ele._id}`).then(res => res.json()).then(data => {
            if (data.modifiedCount == 1) {
                toast('Approved')
                setVisible(false)
            }
        }).catch(err => {
            toast(err.message);
            console.log(err)
        })
    }
    const deny = () => {
        fetch(`https://moonknight-backend.vercel.app/admin/denyPost/${ele._id}`).then(res => res.json()).then(data => {
            if (data.modifiedCount == 1) {
                toast('Approved')
                setVisible(false)
            }
        }).catch(err => {
            toast(err.message);
            console.log(err)
        })
    }
    return (
        <div key={ele._id} className={`   ${visible ? "" : 'hidden'}     relative flex flex-col gap-2 justify-between w-full md:w-56 border-2 rounded p-2`}>
            <img src={ele.images[0]} alt="" className=' h-[150px] object-cover overflow-hidden w-full rounded bg-gray-200' />
            <Link to={`/seeDetaill/${ele._id}`} className='font-semibold py-2 text-indigo-400'>{ele.title}</Link>
            <p>location: {ele.region},{ele.city}</p>
            <button onClick={approve} className='active:scale-90 duration-150  bg-indigo-400 w-full bottom-0 px-3 py-1 text-white capitalize font-semibold rounded'>Approve</button>
            <button onClick={deny} className='active:scale-90 duration-150 bg-red-500 w-full bottom-0 px-3 py-1 text-white capitalize font-semibold rounded'>Deny</button>

        </div>
    );
};

export default PendingApprovlCompo;