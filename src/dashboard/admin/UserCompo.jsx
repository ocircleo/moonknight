import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UserCompo = ({ ele }) => {
    const [role, setRole] = useState('')
    const [blocked, setBlocked] = useState(true)
    useEffect(() => {
        if (ele.role) {
            setRole(ele.role)
            setBlocked(ele.blocked)
        }

    }, [ele])
    const makeAdmin = (id) => {
        fetch(`https://moonknight-backend.vercel.app/admin/makeAdmin/${id}`).then(res => res.json()).then(data => {
            if (data.modifiedCount == 1) {
                toast('user role updated, wait for refecth')
                setRole('admin')

            } else {
                toast('something went wrong')
            }
        })
    }
    const blockUser = () => {
        fetch(`https://moonknight-backend.vercel.app/admin/blockUser/${ele._id}`).then(res => res.json()).then(data => {
            if (data.modifiedCount == 1) {
                toast('user role updated, wait for refecth')
                setBlocked(true)

            } else {
                toast('something went wrong')
            }
        })
    }
    return (
        <tr key={ele._id} className=' font-semibold text-base bg-gray-200 border-8'>
            <td><img src={ele.imageUrl} className='w-14 h-14 rounded-full bg-gray-300' alt="photo" /></td>
            <td>{ele.displayName}</td>
            <td>{ele.email}</td>
            <td>{ele.phone}</td>
            <td><button onClick={() => makeAdmin(ele._id)} className={`btn text-white  border-none ${ele.role == 'admin' ? 'btn-disabled' : ele.role == 'host' ? 'btn-disabled' : ""}  bg-indigo-400  hover:bg-success`}>{role == 'admin' ? 'admin' : role == 'host' ? 'Host' : "make admin"}</button>
            </td>
            <td><button onClick={blockUser} className={`btn bg-red-500 border-none text-white hover:bg-red-800 ${blocked ? 'btn-disabled' : ""}`}>{blocked ? 'blocked' : "block"}</button></td>
        </tr>
    );
};

export default UserCompo;