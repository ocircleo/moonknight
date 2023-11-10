import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MailCompo from '../compo/MailCompo';

const Mails = () => {

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

    {
        allUsers.map((user) =><MailCompo
       
          key={user._id}
          user={user}
          handleDelete={handleDelete}
         >
         </MailCompo>
         )
    }
 </div>
    );
};

export default Mails;