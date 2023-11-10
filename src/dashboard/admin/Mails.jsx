import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Mails = () => {

    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
      fetch('https://moonknight-backend.vercel.app/admin/getUsers/all')
        .then(res => res.json())
        .then(data => {
          setAllUsers(data)
        });
    }, [])

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
        allUsers.map((user) =><div key={user._id} >
          
                <div className=" text-lg shadow-lg  rounded-xl  py-4 px-12  font-semibold font-small">
                   <div>
                   <h2 className='text-xl font-bold pb-0 mt-0'> From : <span className='text-lg font-semibold'>{user.email}</span>   </h2>
                   <p className=' text-sm space-y-0 text-gray-400 pt-0 mt-0'>12/12/23</p>
                    <p className='text-lg font-semibold text-gray-400 pt-0 mt-0'>{user.name}</p>
                    <h2></h2>
                    {/* <p className='text-[#172554] py-4 text-base font-medium'></p> */}
                    <div className='flex'>




{/* {
  data.map((info, index) => (
    <div  key={info.id}>
      <button onClick={handleShowAll} key={info.id}>
            {showAll ? "Less" : "More"} Info {info.id}
          </button>
          {showAll && <p>{info.text}</p>}
    </div>
  ))
} */}

    






      {showAll ? (
        <p>{user.email}</p>
      ) : (
        <p>
          {user.email.length > maxLength ? `${user.email.slice(0, maxLength)}...` : user.email}
        </p>
      )}
      {user.email.length > maxLength && (
        <span
          className=" text-indigo-500 cursor-pointer  font-bold  pb-2 px-4 rounded"
          onClick={toggleShowAll}
        >
          {showAll ? 'Less' : ' More'}
        </span>
      )}
    </div>
                    {/* <textarea placeholder="Replay" className="textarea textarea-bordered mt-2 text-base textarea-xs w-full max-w-xs" ></textarea> */}
                   </div>
                   <div>
                   <div className="flex  justify-end">
                        {/* <button className="btn btn-active  bg-indigo-500 text-white hover:bg-indigo-800  text-sm">submit</button> */}
                   
                        <button  onClick={() => handleDelete(user._id)} className="btn btn-active  bg-red-500 text-white hover:bg-red-800  text-sm">remove</button>
                    </div>
                   </div>
               </div>
         
       
        </div>
        
        )
    }
 </div>
    );
};

export default Mails;