import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Authcontext } from '../../private/provider/Provider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { userDB } = useContext(Authcontext)
    console.log(userDB)
    return (
        <div className=" w-full font-semibold">
            <div className='grid grid-cols-3'>
                <div className='col-span-3 md:col-span-2'></div>
                <div className='col-span-3 md:col-span-1'></div>
            </div>
            <div className="bg-gray-100 ">
                <div className="h-56 flex items-center justify-center gap-2 text-black capitalize flex-col">
                    <img className="rounded-full h-28 object-cover w-28 items-center justify-center bg-gray-300" src={userDB.imageUrl} alt="" />
                    <h2 className="pb-2">{userDB.name}</h2>
                    <div className='text-white fill-slate-50 '>
                        <Link className="relative px-5 py-2 text-white bg-indigo-400 rounded" to={'/editProfile'}>Edit</Link>
                    </div>
                </div>
            </div>
            <div className="md:w-4/6 mx-auto  bg-white shadow-sm px-12 py-5">
                <h2 className=" font-serif p">Information</h2>
                <hr />
                <div className="flex justify-between my-7 flex-col md:flex-row gap-2">
                    <div>
                        <h2>Email:</h2>
                        <p>{userDB.email}</p>
                    </div>
                    <div>
                        <h2>Phone:</h2>
                        <p>{userDB.phone}</p>
                    </div>
                </div>

                <hr />
                <div className="flex justify-between my-7 flex-col md:flex-row gap-2">
                    <div>
                        <h2>Location:</h2>
                        <p> {userDB.city},{userDB.region}</p>
                    </div>
                    <div>
                        <h2>Role:</h2>
                        <p>{userDB.role}</p>

                    </div>
                </div>

                <div className='flex gap-5 py-4 text-[#6A94FF]'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>

                </div>

            </div>
        </div>


    );
};

export default Profile;