import React, { useEffect, useState } from 'react';

const Users = () => {



    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('Users.json')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data)
                
            });
    }, [])




    return (
        <div>
             <div>
            <h2 className="text-4xl font-bold text-[#172554] pb-0 mb-0 text-center ">Total User :{users.length}</h2>
            <div className="divider"></div> 
            <div className="overflow-x-auto">
  <table className="table bg-[#4F46E5] text-white">
    
    <thead>
      <tr className=" text-sm  bg-[#172554]  text-slate-200">
        <th className='border'>No</th>
        <th>Img</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Make Admin</th>
        <th>Make Moderator</th>
        <th> Delete</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user, index) =>  <tr key={user._id}>
        <th className=' border text-lg'>{index + 1}</th>
        <td><img src={user.img} className='w-14 h-14 rounded-full' alt="photo" /></td>
        <td>{user.username}</td>
        <td>{user.gmail}</td>
        <td>{user.phone_number}</td>
        <td>{user.role === 'Admin' ? 'Admin' : 
        <button className='btn bg-[#172554]  border-none text-white  hover:bg-success'>Admin</button>
        }</td>
        <td>{user.role === 'modarator' ? 'Instructor' : 
        <button className='btn bg-[#172554]  border-none text-white  hover:bg-success'>Moderator</button>
        }</td>
        <td><button className='btn  bg-red-300  border-none text-white  hover:bg-red-600'>Delete</button></td>
      </tr>)
     }
     
     
    </tbody>
  </table>
</div>
        </div> 
        </div>
    );
};

export default Users;