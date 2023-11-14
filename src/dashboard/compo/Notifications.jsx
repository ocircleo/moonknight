import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NotifiCompo from './NotifiCompo';
import usePageTitle from '../../hooks/PageTitleHook';
import { Authcontext } from '../../private/provider/Provider';

const Notifications = () => {
  const { userDB } = useContext(Authcontext)
  usePageTitle('Too late | notifications');

  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/user/myMessage/${userDB.email}`)
      .then(res => res.json())
      .then(data => {
        setAllUsers(data)
      });
  }, [userDB])

  const handleDelete = id => {
    const confirmation = confirm('Are you sure you want to delete');
    if (confirmation) {
      fetch(`https://moonknight-backend.vercel.app/deleteEmail/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast('uploaded successfully')
          }
        })
    }
  }

  return (
    <div className=''>
      {allUsers.length > 0 ? (
        allUsers.map((user) => <NotifiCompo

          key={user._id}
          user={user}
          handleDelete={handleDelete}
        >
        </NotifiCompo>
        )) : <h1 className='text-center text-xl font-bold py-8 capitalize text-gray-400'>no notification</h1>
      }
    </div>
  );
};

export default Notifications;