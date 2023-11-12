import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Authcontext } from '../../private/provider/Provider';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/PageTitleHook';

const MyHouses = () => {
    usePageTitle('Too late | my house');
    const [myHouses, setMyHouses] = useState([])
    const { user } = useContext(Authcontext)
    useEffect(() => {
        fetch(`https://moonknight-backend.vercel.app/host/getMyHouses/${user.email}`).then(res => res.json()).then(data => setMyHouses(data))

    }, [user.email])
    return (
        <div className='flex  gap-3 flex-wrap'>
            {
                myHouses.map(ele => (<div key={ele._id} className='relative flex flex-col gap-2 justify-between w-full md:w-56 border-2 rounded p-2'>
                    <img src={ele.images[0]} alt="" className=' h-[150px] object-cover overflow-hidden w-full rounded bg-gray-200' />
                    <p className='font-semibold py-2'>{ele.title}</p>
                    <p>location: {ele.region},{ele.city}</p>
                    <Link to={`/seeDetaill/${ele._id}`} className="btn bg-indigo-400 text-white font-semibold text-lg w-full capitalize">view Detail</Link>
                </div>))
            }
        </div>
    );
};

export default MyHouses;