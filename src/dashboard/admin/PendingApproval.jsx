import { useState } from "react";
import { useEffect } from "react";

const url = "../../../public/users.json"

const PendingApproval = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
            
    }, [])
console.log(users);

    return (
        <div className=" bg-gray-400">
           <div className="overflow-x-auto">
           <h2 className="text-xl font-bold text-[#172554] pb-1 mb-0 text-center border-y-2  ">Pending Users for approval :{users.length}</h2>

           <table className="table">
    {/* head */}
    <thead>
    <tr className=" text-sm  bg-[#6366F1]  text-white">
        <th className="pr-0 mr-0 border w-16">No</th>
        <th className=" text-center">Image</th>
        <th className=" text-center">Title</th>
        <th className=" text-center">Approve</th>
        <th className=" ">Deny</th>
      </tr>
    </thead>
    <tbody>
      {
         users.map((user, index)=>  <tr  key={user._id}  className=' font-semibold text-base  border-2'>
      <th className=' border text-lg  text-center  text-white'>{index + 1}</th>
          <td>
           
              <div className="avatar   flex justify-center">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={user.img} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
             
     
          </td>
        
          <td className=" text-center  text-slate-950  font-semibold">{user.username}</td>
          <th className="  flex justify-center">
            <button className="btn    text-white bg-indigo-500 btn-  border-0 hover:bg-indigo-900">Approve</button>
          </th>
          <th  className=" ">
            <button className="btn   text-white bg-red-500 btn-  border-0 hover:bg-red-900">Deny</button>
          </th>
        </tr>
         
         )

      }

     
    </tbody>
 
   </table>
   
<div className="flex justify-center   mt-4 ">
<div className="join">
  <button className="join-item btn border-indigo-500 hover:border-indigo-800 hover:border-y-4">«</button>
  <button className="join-item btn border-y-2 border-indigo-500 hover:border-indigo-800   hover:border-y-4">Page 22</button>
  <button className="join-item btn border-indigo-500  hover:border-indigo-800 hover:border-y-4">»</button>
</div>
</div>
</div> 
        </div>
    );
};

export default PendingApproval;