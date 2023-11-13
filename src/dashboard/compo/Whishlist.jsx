import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../private/provider/Provider';
import usePageTitle from '../../hooks/PageTitleHook';
import { Link } from 'react-router-dom';


const Whishlist = () => {

    usePageTitle('Too late | my whishlist');
    const { userDB, refresh } = useContext(Authcontext);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (userDB.wishlist.length > 0) {
                try {
                    const promises = userDB.wishlist.map(id =>
                        fetch(`https://moonknight-backend.vercel.app/user/card/${id}`)
                            .then(res => res.json())
                    );

                    const userData = await Promise.all(promises);
                    setAllUsers(userData);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchData();
    }, [userDB.wishlist]);
    const deleteCart = (id) => {
        const data = {
            id: id,
            userId: userDB._id
        }
        fetch(`https://moonknight-backend.vercel.app/user/removeFromWishList`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: Json.stringfy(data)
        }).then(res => res.json()).then(data => refresh())
    }
    return (
        <div className='flex  gap-3 flex-wrap'>

            {
                allUsers.map(ele => (<div key={ele._id} className='relative flex flex-col gap-2 justify-between w-full md:w-56 border-2 rounded p-2'>
                    <img src={ele.images[0]} alt="" className='h-[150px] object-cover overflow-hidden w-full rounded bg-gray-200' />
                    <Link to={`/blogDetail/${ele._id}`} className='font-semibold py-2 text-blue-500 underline'>{ele.title}</Link>
                    <p>location: {ele.region},{ele.city}</p>
                    {/* <button onClick={() => deleteCart(ele._id)} className='bg-red-500 w-full bottom-0 px-3 py-1 text-white capitalize font-semibold rounded'>delete</button> */}

                </div>))
            }
        </div>
    )
}

export default Whishlist;