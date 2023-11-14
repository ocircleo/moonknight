import React, { useEffect } from 'react';
import { BsFilter } from 'react-icons/bs';
import Card from '../../shared/Card';
import { useState } from 'react';
import { useContext } from 'react';
import { dataContext } from '../../private/provider/Data_Provider';
import usePageTitle from '../../hooks/PageTitleHook';
import Loading from '../../shared/loading/Loading';

const Search = () => {

    usePageTitle('Too late | search place');

    const [spinner, setSpinner]= useState(false)

    const { searchData, initialData } = useContext(dataContext)
    const [Filter, setFilter] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (searchData.city) {
            fetch(`https://moonknight-backend.vercel.app/user/productSearch?city=${searchData.city}&region=${searchData.region}&price=0&skip=0`).then(res => res.json()).then(d => { setData(d); console.log(d) })
        } else {
            setData(initialData)
        }
    }, [])
    const search = (e) => {
        e.preventDefault();
        setSpinner(true)
        let form = e.target;
        let region = form.region.value;
        let city = form.city.value;
        fetch(`https://moonknight-backend.vercel.app/user/productSearch?city=${city}&region=${region}&price=0&skip=0`).then(res => res.json()).then(d => { setData(d); setSpinner(false); console.log(d) })
    }
    const sort = (e) => {
        const region = document.getElementById('region').value;
        const city = document.getElementById('city').value;
        fetch(`https://moonknight-backend.vercel.app/user/productSearch?city=${city}&region=${region}&price=${e}&skip=0`).then(res => res.json()).then(d => { setData(d);  console.log(d) })
    }
    return (
        <div className='w-full lg:w-5/6 mx-auto mt-6'>
            <form onSubmit={search} className="mx-auto border rounded p-2 mt-5 flex flex-col md:flex-row gap-4 items-center justify-center">
                <input type="text" id='region' defaultValue={searchData.region || ''} placeholder='location' name='region' className='border-2 border-indigo-400 rounded p-3 w-full md:w-48 lg:w-96' />
                <input type="text" id='city' name='city' required defaultValue={searchData.city || ''} placeholder='city (ex: dhaka)' className='w-full md:w-36 lg:w-72 border-2 border-indigo-400 rounded p-3' />
                <button type='submit' className='bg-indigo-400 w-full md:w-auto px-3 py-3 capitalize font-semibold rounded text-white active:scale-95 duration-100'>Search</button>
            </form>
            <div className='z-40 w-full mt-2 mb-2 p-2 md:p-3 flex justify-between capitalize border relative'>
                <p>filters</p>
                <button onClick={() => setFilter(!Filter)}><BsFilter className='text-2xl'></BsFilter></button>
                <div className={`font-semibold p-2 rounded absolute flex-col ${Filter ? 'flex' : 'hidden'} bg-white border gap-2 right-0 top-12`}>
                    <button onClick={() => { setFilter(!Filter); sort(1) }} className='capitalize bg-gray-200 p-2'>Price low high</button>
                    <button onClick={() => { setFilter(!Filter); sort(-1) }} className='bg-gray-200 p-2 capitalize'>High to low</button>
                </div>
            </div>
           {spinner ? (
         <div className=' my-8 lg:my-36'>
              <Loading></Loading>
         </div>
           ): 
           (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10 p-5'>
            <p className={`${data.length == 0 ? 'block' : 'hidden'} text-xl text-center col-span-3`}> Noting to show</p>
            {
                data.map(ele => <Card key={ele._id} data={ele}></Card>)
            }

        </div>
           )
           }
        </div>
    );
};

export default Search;