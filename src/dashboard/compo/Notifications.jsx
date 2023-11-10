import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MailCompo from '../compo/MailCompo';
import NotifiCompo from './NotifiCompo';

const Notifications = () => {

    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
      fetch('https://moonknight-backend.vercel.app/admin/getUsers/all')
        .then(res => res.json())
        .then(data => {
          setAllUsers(data)
        });
    }, [])

    const handleDelete = id => {
      const confirmation = confirm('Are you sure you want to delete');
     if(confirmation){
           fetch(`https://moonknight-backend.vercel.app/deleteEmail/${id}`, {
              method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
              console.log(data);
              if(data.deletedCount > 0){
                toast('uploaded successfully')
                  }
           })
     }
   }
   
    return (
        <div className=' bg-slate-50'>
 <h2 className="text-xl font-bold  bg-slate-100 text-[#172554] pb-0 mb-0 text-center border-y-2 ">Total Notification : {allUsers.length}</h2>
    {
        allUsers.map((user) =><NotifiCompo
       
          key={user._id}
          user={user}
          handleDelete={handleDelete}
         >
         </NotifiCompo>
         )
    }
 </div>
    );
};

export default Notifications;