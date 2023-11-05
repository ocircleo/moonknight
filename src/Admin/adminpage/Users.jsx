import React, { useEffect, useState } from 'react';




  
const Users = () => {



  






    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data)
                
            });
    }, [])






console.log(users);

    return (
        <div>

         <div>
   
            <h2 className="text-2xl font-bold text-[#172554] pb-0 mb-0 text-center border-y-2 ">Total User :{users.length}</h2>

 <div className='flex'>
 <div className="flex items-center bg-white rounded-lg shadow-sm  w-72 h-11 border-2 ">
  <input type="text" className=" py-0 my-0 px-4 rounded-lg focus:outline-none" placeholder="Search..."/>
  <button className=" w-full flex items-center justify-center h-full px-4">
  <svg className="pointer-events-none absolute z-10 my-3.5 ml-4 stroke-current opacity-60 text-base-content" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  </button>
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


            {/* <div className="divider mt-0 mb-1"></div>  */}
            <div className="overflow-x-auto">
  <table className="table  bg-[#D5D5D5] text-black">
    
    <thead>
      <tr className=" text-sm  bg-[#6366F1]  text-white">
        <th className='border'>No</th>
        <th>Img</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Make Admin</th>
        <th>Make Host</th>
        <th> Delete</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user, index) =>  <tr key={user._id} className=' font-semibold text-base'>
        <th className=' border text-lg bg-[#6366F1] text-white'>{index + 1}</th>
        <td><img src={user.img} className='w-14 h-14 rounded-full' alt="photo" /></td>
        <td>{user.username}</td>
        <td>{user.gmail}</td>
        <td>{user.phone_number}</td>
        <td>{user.role === 'Admin' ? 'Admin' : 
        <button className='btn text-white  border-none  bg-indigo-500  hover:bg-success'>Admin</button>
        }</td>
        <td>{user.role === 'Host' ? 'Host' : 
        <button className='btn bg-indigo-500  border-none text-white  hover:bg-success'> Host</button>
        }</td>
        <td><button className='btn  bg-red-500  border-none text-white  hover:bg-red-800'>Delete</button></td>
      </tr>)
     }
     
     
    </tbody>
  </table>
</div>
        </div> 
   <div className=' flex justify-center  bg-slate-400'>
   <div className="join ">
  <button className="join-item btn">1</button>
  <button className="join-item btn">2</button>
  <button className="join-item btn ">...</button>
  <button className="join-item btn">99</button>
  <button className="join-item btn">100</button>
</div>
   </div>
        </div>
    );
};

export default Users;