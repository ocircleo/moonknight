import { faArrowRight, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { element } from 'prop-types';
import React from 'react';

const Cities = () => {
    let cities = ["Dhaka", "Barisal", "Jessore", "Chittagong", "Rajsashi", "Khulna",]

    return (
        <>
            <div className=' md:px-12 md:py-12'>
                <div className="text-center md:px-12 mb-10 ">
                    <h1 className="text-4xl font-bold mb-3">Cities With Listing</h1>
                    <span className="w-4 h-1.5 bg-[#FD3358] inline-block rounded-2xl mr-1.5"></span>
                    <span className="w-12 h-1.5 bg-[#FD3358] inline-block rounded-2xl"></span>
                    <span></span>
                    <p className="text-lg text-slate-400 pt-4">Destinations we love the most</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        cities.map(ele => {
                            return (
                                <div key={ele} className='relative w-full h-10 bg-indigo-400 rounded'>
                                    <img src={`https://source.unsplash.com/random/240x240/?${ele}`}
                                    className='w-full h-full absolute bg-black object-cover hover:scale-125' alt="" />

                                </div>
                            )
                        })
                    }
                </div>



            </div>


        </>
    );
};

export default Cities;