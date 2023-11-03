import React from 'react';
//import Rating from 'react-rating';
import { FaMapMarkerAlt, FaRegStar, FaStar } from 'react-icons/fa';

const Card = () => {
    return (

        <div className="card w-auto  bg-white shadow-xl h-auto">
            <div className='relative rounded-lg'>
                <figure className=''>
                    <img className= 'object-cover transition duration-300 ease-in-out hover:scale-110 h-[350px] md:h-[250px] xl:h-[350px] bg-gray-400 w-full' src="https://dreamsestate.dreamstechnologies.com/html/assets/img/product/product-3.jpg" alt="Shoes" />
                </figure>

                <div>
                    <div className='absolute top-0 p-4'>
                        <button className="btn btn-sm   btn-primary">Featured</button>
                    </div>

                    <div className='flex items-center justify-between p-4 absolute w-full bottom-0 '>
                        <h4 className='text-3xl text-white font-bold'>$1500</h4>
                        <button className="btn btn-circle btn-sm bg-emerald-500 border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </button>
                    </div>


                </div>
            </div>
            <div className="card-body">
                <div className=''>
                    <Rating
                        placeholderRating={5}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                </div>
                <h2 className="card-title">
                    Royal Apartment
                </h2>

                <div className='flex items-center'>
                    <span className='pe-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                    <span className='text-gray-500'>Mirpur Dhaka </span>
                </div>
                <div className='flex items-center flex-wrap justify-between text-center p-2 my-2 bg-slate-100 '>

                    <li className='list-none flex items-center'>
                        <img src="../../public/images/icon/bed-icon.svg" alt="" />
                        2Beds
                    </li>
                    <li className='list-none flex items-center'>
                        <img src="../../public/images/icon/bath-icon.svg" alt="" />
                        3Baths
                    </li>
                    <li className='list-none flex items-center'>
                        <img src="../../public/images/icon/building-icon.svg" alt="" />
                        1200Sqft
                    </li>


                </div>
                <hr />
                <div className="card-actions items-center justify-between">
                    <div className="flex items-center ">
                        <img className='w-14 h-14 rounded-full' src="https://dreamsestate.dreamstechnologies.com/html/assets/img/product/product-3.jpg" alt="Shoes" />

                        <div className='ps-2'>
                            <p className='font-semibold'>Scott Gwin</p>
                            <p className='text-sm text-gray-500'>Dhaka</p>
                        </div>

                    </div>
                    <div className="">
                        <button className="btn btn-active btn-primary text-sm">Book Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;