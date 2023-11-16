import React from 'react';
import { useState } from 'react';

const NotifiCompo = ({ data }) => {

  return (
    <div>
      <div className="p-4 border-2 rounded ">
        <div>
          <h2 className=''> Message from : <span className=''>{data.userName}</span></h2>
          <p className=' text-sm '>Booking Date: <span className='text-gray-500'>{data.date}</span> </p>
          <div className='flex flex-col'>
            <p >
              Form: <span className='text-gray-500'>{data.userEmail}</span>
            </p>
            <p>
              Description: <span className='text-sm font-semibold'>{data.text}</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            {/* <button className="btn btn-active  bg-indigo-500 text-white hover:bg-indigo-800  text-sm">submit</button> */}

            {/* <button onClick={() => handleDelete(data._id)} className="btn btn-active  bg-red-500 text-white hover:bg-red-800  text-sm">remove</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifiCompo;