import React, { useEffect, useState } from 'react';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch('https://moonknight-backend.vercel.app/admin/getUsers/all')
      .then(res => res.json())
      .then(data => {
        setAllUsers(data)
      });
  }, [])
  return (
    <div>

      <div>

        <h2 className="text-2xl font-bold  text-[#172554] pb-0 mb-0 text-center border-y-2 ">Total User :{allUsers.length}</h2>

        <div className='flex'>
          <div className="flex items-center bg-white rounded-lg shadow-sm  w-72 h-11 border-2 ">
            <input type="text" className=" py-0 my-0 px-4 rounded-lg focus:outline-none" placeholder="Search..." />
          </div>
          <div className="dropdown dropdown-hover m-0 ">
            <label tabIndex={0} className="btn btn-sm h-6  bg-indigo-500  text-white hover:bg-success  text-xs  m-1">Search by

              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-6 text-white  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] bg-success text-white menu p-2 shadow  rounded-box w-52">
              <li><a>Gmail</a></li>
              <li><a>Phone Number</a></li>
            </ul>
          </div>
        </div>
        <div className="overflow-x-auto my-2">
          <table className="table mt-5">

            <thead className=''>
              <tr className=" text-sm  bg-indigo-400  text-white">
                <th>Img</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Make Admin</th>
                <th>Make Host</th>
                <th> Delete</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                allUsers.map((ele) => <tr key={ele._id} className=' font-semibold text-base bg-gray-200 border-8'>

                  <td><img src={ele.imageUrl} className='w-14 h-14 rounded-full bg-gray-300' alt="photo" /></td>
                  <td>{ele.displayName}</td>
                  <td>{ele.email}</td>
                  <td>{ele.phone}</td>
                  <td><button className={`btn text-white  border-none ${ele.role == 'admin' ? 'btn-disabled' : ""}  bg-indigo-400  hover:bg-success`}>{ele.role == 'admin' ? 'Already admin' : "admin"}</button>
                  </td>
                  <td><button className={`btn text-white  border-none ${ele.role == 'host' ? 'btn-disabled' : ""}  bg-indigo-400  hover:bg-success`}>{ele.role == 'host' ? 'Already Host' : "host"}</button>
                  </td>

                  <td><button className='btn  bg-red-500  border-none text-white  hover:bg-red-800'>Block</button></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className=' flex justify-center'>
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled bg-gray-100 font-extrabold">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default Users;