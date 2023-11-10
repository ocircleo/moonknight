import React from 'react';
import { useState } from 'react';

const MailCompo = ({user, handleDelete }) => {


  
    const maxLength =10
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
  


    return (
        <div>
           <div className=" text-lg shadow-lg  rounded-xl  py-4 px-12  font-semibold font-small">
                   <div>
                   <h2 className='text-xl font-bold pb-0 mt-0'> From : <span className='text-lg font-semibold'>{user.email}</span>   </h2>
                   <p className=' text-sm space-y-0 text-gray-400 pt-0 mt-0'>12/12/23</p>
                    <p className='text-lg font-semibold text-gray-400 pt-0 mt-0'>{user.name}</p>
                    <h2></h2>
                    {/* <p className='text-[#172554] py-4 text-base font-medium'></p> */}
                    <div className='flex'>







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
                   
                        {/* <button  onClick={() => handleDelete(user._id)} className="btn btn-active  bg-red-500 text-white hover:bg-red-800  text-sm">remove</button> */}
                    </div>
                   </div>
               </div>  
        </div>
    );
};

export default MailCompo;