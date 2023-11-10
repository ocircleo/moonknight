/* eslint-disable react/prop-types */
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    return (

        <div className="card w-auto  bg-white shadow-xl h-auto">
            <div className='relative rounded-lg'>
                <figure className=''>
                    <img className='object-cover transition duration-300 ease-in-out hover:scale-110 h-[350px] md:h-[250px] xl:h-[350px] bg-gray-400 w-full' src={data.images[0]} alt="Shoes" />
                </figure>

                <div>
                    <div className='flex items-center justify-between p-4 absolute w-full bottom-0 '>
                        <h4 className='text-2xl text-white font-bold bg-gray-400/70 rounded p-1'>৳{data.price}</h4>
                        <button className="btn btn-circle btn-sm bg-emerald-500 border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </button>
                    </div>


                </div>
            </div>
            <div className="card-body">
                {/* <div className=''>
                    <Rating
                        placeholderRating={5}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                </div> */}
                <h2 className="card-title">
                    {data.title}
                </h2>

                <div className='flex items-center'>
                    <span className='pe-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                    <span className='text-gray-500'>{data.region},{data.city} </span>
                </div>
                <div className='flex items-center flex-wrap justify-between text-center p-2 my-2 bg-slate-100 '>

                    <li className='list-none flex items-center'>
                        <img src="../../public/images/icon/bed-icon.svg" alt="" />
                        {data.beds}Beds
                    </li>
                    <li className='list-none flex items-center'>
                        <img src="../../public/images/icon/bath-icon.svg" alt="" />
                        {data.bathroom}Baths
                    </li>
                    <li className='list-none flex items-center'>
                        <img src="../../public/images/icon/building-icon.svg" alt="" />
                        {data.space}Sqft
                    </li>


                </div>
                <hr />


                <div className="">
                    <Link className="btn bg-indigo-400 text-white font-semibold text-lg w-full capitalize">view Detail</Link>
                </div>

            </div>
        </div>

    );
};

export default Card;