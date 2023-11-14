import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../private/provider/Provider';
import usePageTitle from '../../hooks/PageTitleHook';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import WishListCompo from './WishListCompo';


const Whishlist = () => {

    usePageTitle('Too late | my whishlist');
    const { userDB } = useContext(Authcontext);
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

    return (
        <div className='flex  gap-3 flex-wrap'>

            {
                allUsers.map(ele => <WishListCompo key={ele._id} ele={ele}></WishListCompo>)
            }
        </div>
    )
}

export default Whishlist;