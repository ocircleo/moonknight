import { useContext } from 'react';
import { Authcontext } from '../../private/provider/Provider';
import { useLocation, useNavigate } from 'react-router-dom';
import usePageTitle from '../../hooks/PageTitleHook';

const BeAHostInfoForm = () => {

    usePageTitle('Too late | host form');

    const { userDB, refresh } = useContext(Authcontext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const changeImage = (e) => {
        const newImage = document.getElementById('image');
        const img = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function (e) {
            newImage.src = e.target.result;
        }
        if (img) {
            reader.readAsDataURL(img)
        }
    }
    const submit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const number = form.number.value;
        const city = form.city.value;
        const region = form.region.value;
        const additional = form.additional.value;
        const image = form.image.files[0];


        const data = {
            id: userDB._id,
            name: name,
            number: number,
            city: city,
            region: region,
            additional: additional,
        }
        fetch("https://moonknight-backend.vercel.app/host/applyForHost", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    const formData = new FormData();
                    formData.append('profile', image);
                    formData.append('id', userDB._id)
                    fetch('https://moonknight-backend.vercel.app/user/updateImage', {
                        method: 'PUT',
                        body: formData
                    }).then(res => res.json()).then(data => {
                        if (data.acknowledged) {
                            refresh()
                            navigate(from, { replace: true });
                        }
                    })
                }
            })
    }
    return (
        <div className="md:flex md:flex-col  md:justify-center  md:items-center lg:items-center my-5 ">
            <div className="bg-gray-100 rounded lg:w-4/6 p-2 md:p-6 flex flex-col items-center">

                <div className='pb-5 p-2'>
                    <h1 className=' font-semibold text-xl pb-1 lg:text-3xl text-center  capitalize'>Add your Information  </h1>

                </div>

                <form onSubmit={submit} >
                    <div className='flex flex-col gap-3 p-6' >
                        <div className=' md:flex md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>

                                <label className='font-semibold text-xl'>Name</label>
                                <input type="text" defaultValue={userDB.name} name='name' required placeholder="Enter Your Name" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="number" className='font-semibold text-xl'>Number</label>
                                <input type="Number" name='number' required placeholder="Enter Your Number" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>


                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>

                                <label className='font-semibold text-xl'>Thana/Upzila</label>
                                <input type="text" name='region' required placeholder="Enter Thana/Upzila" className="input input-bordered bg-slate-100 input-info  md:w-[300px] block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="additional" className='font-semibold text-xl'>Aditional Location</label>
                                <input type="text" name='additional' placeholder="Enter Aditional Location" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />

                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>
                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>

                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>City</label>
                                <input type="text" name='city' required placeholder="Enter City" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>

                        <div className='lg:flex lg:gap-16'>
                            <div className='pt-6'>
                                <img className='h-20 w-20 rounded-xl object-cover' id='image' src={userDB.imageUrl} alt="" />
                                <p>You may change profile pic but <br /> not nececery</p>
                            </div>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Add new Profile Image</label>
                                <input type="file" onChange={changeImage} name='image' placeholder="Enter city name" multiple className="file-input w-full max-w-xs" />

                                <p className='text-sm text-red-500'></p>
                            </fieldset>


                        </div>

                        <input type='submit' className="btn glass bg-indigo-600 text-white hover:btn glass" value="Submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default BeAHostInfoForm;