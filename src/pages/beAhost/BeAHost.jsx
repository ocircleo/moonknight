import React from 'react';

const BeAHost = () => {
    const submit = e => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div className='w-full lg:w-5/6 mx-auto p-2 mt-10'>
            <h1 className='text-black font-semibold text-xl pb-5 lg:text-3xl text-center capitalize'>welcome, rent a new house</h1>
            <form onSubmit={submit}>
                <fieldset className='flex flex-col gap-3'>
                    <label htmlFor="city" className='font-semibold text-xl'>Enter City Name</label>
                    <input type="text" placeholder="Enter city name" className="input input-bordered input-info w-full max-w-xs" />
                    <p className='text-sm text-red-500'></p>
                </fieldset>
                <fieldset className='flex flex-col gap-3'>
                    <label htmlFor="city" className='font-semibold text-xl'>Enter City Name</label>
                    <input type="file" placeholder="Enter city name" multiple className="file-input w-full max-w-xs" />
                    <p className='text-sm text-red-500'></p>
                </fieldset>
            </form>
        </div>
    );
};

export default BeAHost;