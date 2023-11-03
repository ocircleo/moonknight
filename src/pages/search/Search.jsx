import React from 'react';
import { BsFilter } from 'react-icons/bs';
import Card from '../../shared/Card';
import { useState } from 'react';
const Search = () => {
    const [Filter, setFilter] = useState(false)
    const search = (e) => {

    }
    let newArray = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className='w-full lg:w-5/6 mx-auto mt-6'>
            <from onSubmit={search} className="mx-auto border rounded p-2 mt-5 flex flex-col md:flex-row gap-4 items-center justify-center">
                <input type="text" placeholder='location' name='search' className='border-2 border-indigo-400 rounded p-3 w-full md:w-48 lg:w-96' />
                <input type="text" placeholder='city (ex: dhaka)' className='w-full md:w-36 lg:w-72 border-2 border-indigo-400 rounded p-3' />
                <button type='submit' className='bg-indigo-400 w-full md:w-auto px-3 py-3 capitalize font-semibold rounded text-white active:scale-95 duration-100'>Search</button>
            </from>
            <div className='z-40 w-full mt-2 mb-2 p-2 md:p-3 flex justify-between capitalize border relative'>
                <p>filters</p>
                <button onClick={()=>setFilter(!Filter)}><BsFilter className='text-2xl'></BsFilter></button>
                <div className={`p-2 rounded absolute flex-col ${Filter ? 'flex' : 'hidden'} bg-white border gap-2 right-0 top-12`}>
                    <button onClick={()=>setFilter(!Filter)} className='capitalize bg-gray-200 p-2'>Price low high</button>
                    <button onClick={()=>setFilter(!Filter)} className='bg-gray-200 p-2 capitalize'>top rated</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10 p-5'>
                {
                    newArray.map(ele => <Card key={ele}></Card>)
                }

            </div>
        </div>
    );
};

export default Search;