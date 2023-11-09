import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../private/provider/Provider';


const Whishlist = () => {

  const {userDB} = useContext(Authcontext)

console.log(userDB);
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
      fetch('https://moonknight-backend.vercel.app/admin/getUsers/all')
        .then(res => res.json())
        .then(data => {
          setAllUsers(data)
         
        });
    }, [])
    console.log(allUsers[1]);

    return (

<div>
<h2 className=" text-xl md:text-2xl font-bold  text-[#172554] pb-2 mb-0 text-center border-y-2 ">My Whishlist : {allUsers.length}</h2>
<div className=' grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

{
       allUsers.map((ele) => <div key={ele._id} className=' flex justify-center font-semibold text-base bg-gray-200 border-8'>

<div className="card w-auto   bg-white shadow-xl h-auto">
            <div className='relative rounded-lg'>
              
                <figure className=''>
                    <img className= 'object-cover transition duration-300 ease-in-out hover:scale-110 h-[200px] md:h-[250px] xl:h-[280px] bg-gray-400 w-full' src="https://dreamsestate.dreamstechnologies.com/html/assets/img/product/product-3.jpg" alt="Shoes" />
                </figure>

                <div>
                    <div className='absolute top-0 p-4'>
                        <button className="btn btn-sm   btn-primary">Featured</button>
                    </div>

                </div>
            </div>
            <div className="card-body  pb-2 gap-0">
              
                <h2 className="card-title">
                    Royal Apartment
                </h2>
                <p className='text-sm text-gray-500 pb-2'>Date: 23/12/2023, <span>10:23</span></p>
                <h2 className='pb-2 font-semibold text-[#172554]'> Location: {ele.city}</h2>
                <hr />
                
                   
                    <div className=" flex justify-end">
                        <button className="btn    bg-red-500 text-white hover:bg-red-800  text-sm">Remove</button>
                    </div>
                
            </div>
        </div>

       </div>
  
       )
}
  </div>
</div>
   );
};

export default Whishlist;