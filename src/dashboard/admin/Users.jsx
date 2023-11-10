import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../private/provider/Provider';
import { toast } from 'react-toastify';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const { userDB } = useContext(Authcontext)
  const search = (e) => {
    e.preventDefault()
    const form = e.target;
    const textInput = form.input.value;
    const searchBy = form.filter.value;
    if (textInput.length > 0) {
      fetch(`https://moonknight-backend.vercel.app/admin/searchUser?filter=${searchBy}&data=${textInput}`).then(res => res.json()).then(data => setAllUsers([data]))
    } else {
      fetch('https://moonknight-backend.vercel.app/admin/getUsers/all')
        .then(res => res.json())
        .then(data => {
          setAllUsers(data)
        });
    }
  }
  const makeAdmin = () => {
    fetch(`https://moonknight-backend.vercel.app/admin/makeAdmin/${userDB._id}`).then(res => res.json()).then(data => {
      if (data.modifiedCount == 1) {
        toast('user role updated')
      } else {
        toast('something went wrong')
      }
    })
  }
  useEffect(() => {
    fetch('https://moonknight-backend.vercel.app/admin/getUsers/all')
      .then(res => res.json())
      .then(data => {
        setAllUsers(data)
      });
  }, [])
  return (
    <div>
      <div className='w-full overflow-x-scroll'>

        <h2 className="text-2xl font-bold  text-[#172554] pb-0 mb-0 text-center border-y-2 ">Total User :{allUsers.length}</h2>
        <div className='flex'>
          <form onSubmit={search} className='flex gap-2'>
            <input type="text" name='input' placeholder="Type here" className="input input-bordered w-72" />
            <select name='filter' className="select select-bordered w-28">
              <option disabled selected>search by</option>
              <option value={'email'}>email</option>
              <option value={'phone'}>phone</option>
            </select>
            <button type='submit' className="btn btn-info">Search</button>
          </form>

        </div>
        <div className="overflow-x-scroll my-2">
          <table className="table mt-5">

            <thead className=''>
              <tr className=" text-sm  bg-indigo-400  text-white">
                <th>Img</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Status</th>

                {/* <th> Block</th> */}
              </tr>
            </thead>
            <tbody className=''>
              {
                allUsers.map((ele) => <tr key={ele._id} className=' font-semibold text-base bg-gray-200 border-8'>

                  <td><img src={ele.imageUrl} className='w-14 h-14 rounded-full bg-gray-300' alt="photo" /></td>
                  <td>{ele.displayName}</td>
                  <td>{ele.email}</td>
                  <td>{ele.phone}</td>


                  <td><button onClick={makeAdmin} className={`btn text-white  border-none ${ele.role == 'admin' ? 'btn-disabled' : ele.role == 'host' ? 'btn-disabled' : ""}  bg-indigo-400  hover:bg-success`}>{ele.role == 'admin' ? 'admin' : ele.role == 'host' ? 'Host' : "make admin"}</button>
                  </td>
                  {/* <td><button className={`btn text-white  border-none ${ele.role == 'host' ? 'btn-disabled' : ""}  bg-indigo-400  hover:bg-success`}>{ele.role == 'host' ? 'Already Host' : "host"}</button>
                  </td> */}

                  {/* <td><button className='btn  bg-red-500  border-none text-white  hover:bg-red-800'>Block</button></td> */}
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className=' flex justify-center'>
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled bg-gray-100 font-extrabold">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">»</button>
        </div>
      </div> */}
    </div>
  );
};

export default Users;