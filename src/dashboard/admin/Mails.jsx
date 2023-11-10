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

<<<<<<< HEAD
=======
    const toggleInfo = (index) => {
      const newShowAll = [...showAll];
      newShowAll[index] = !newShowAll[index];
      setShowAll(newShowAll);
    };


    // const data = [
    //   { id: 1, text: "Info 1" },
    //   { id: 2, text: "Info 2" },
    //   { id: 3, text: "Info 3" },
    //   // Add more data objects as needed
    // ];
  
    // const [showAll, setShowAll] = useState(false);
  
    // const handleShowAll = () => {
    //   setShowAll(!showAll);
    // };


    const text = "fhfdh bfdf idjg  jdriogj jgdofi gfjdigj sdgrsdf jgifodgj gfdg  hjfkgjo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem debitis odit ab nostrum provident unde officiis ex illum est totam nobis perferendis, eum molestias temporibus veniam excepturi aliquam recusandae exercitationem!"
  const maxLength =10
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
  

>>>>>>> 818f7615606c8b24a231e91a52605302257f3787
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