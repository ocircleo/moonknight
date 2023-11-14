import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NotifiCompo from './NotifiCompo';
import usePageTitle from '../../hooks/PageTitleHook';
import { Authcontext } from '../../private/provider/Provider';

const Notifications = () => {
  const { userDB } = useContext(Authcontext)
  usePageTitle('Too late | notifications');

  const [noti, setNoti] = useState([]);
  useEffect(() => {
    fetch(`https://moonknight-backend.vercel.app/user/myMessage/${userDB.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setNoti(data)
      });
  }, [userDB])


  return (
    <div className='flex flex-col gap-2 p-2'>
      {noti.length > 0 ? (
        noti.map((ele) => <NotifiCompo
          key={ele._id}
          data={ele}
        >
        </NotifiCompo>
        )) : <h1 className='text-center text-xl font-bold py-8 capitalize text-gray-400'>no notification</h1>
      }
    </div>
  );
};

export default Notifications;