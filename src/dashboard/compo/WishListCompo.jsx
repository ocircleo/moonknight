import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../private/provider/Provider';
import { toast } from 'react-toastify';
import { useState } from 'react';

const WishListCompo = ({ ele }) => {
    const { userDB, refresh } = useContext(Authcontext)
    const [show, setShow] = useState(true)
    const deleteCart = () => {
        const data = {
            id: ele._id,
            userId: userDB._id
        }
        fetch(`https://moonknight-backend.vercel.app/user/removeFromWishList`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount == 1) {
                toast('removed from Wish List')
                setShow(false)
                refresh();
            }
        }).catch(error => toast(error.message))
    }
    return (
        <div key={ele._id} className={`relative ${show ? "" : "hidden"} flex flex-col gap-2 justify-between w-full md:w-56 border-2 rounded p-2`}>
            <img src={ele.images[0]} alt="" className='h-[150px] object-cover overflow-hidden w-full rounded bg-gray-200' />
            <Link to={`/blogDetail/${ele._id}`} className='font-semibold py-2 text-blue-500 underline'>{ele.title}</Link>
            <p>location: {ele.region},{ele.city}</p>
            <button onClick={deleteCart} className='bg-red-500 active:scale-90 duration-150 w-full bottom-0 px-3 py-1 text-white capitalize font-semibold rounded'>delete</button>

        </div>
    );
};

export default WishListCompo;