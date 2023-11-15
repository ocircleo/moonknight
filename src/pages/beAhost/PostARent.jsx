import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { useEffect } from "react";
import { toast } from "react-toastify";
import usePageTitle from "../../hooks/PageTitleHook";


const PostARent = () => {

    usePageTitle('Too late | host');

    const { userDB } = useContext(Authcontext)
    const [imgError, setimgError] = useState('')
    const uploadImg = (id, image) => {
        const formData = new FormData();
        formData.append('id', userDB._id);
        formData.append('postId', id);
        formData.append('image', image);
        return new Promise((resolve, reject) => {
            fetch('https://moonknight-backend.vercel.app/host/uploadImage', {
                method: 'PUT',
                body: formData,
            }).then(res => res.json()).then(data => resolve(data)).catch(error => reject(error))
        })
    }
    const submit = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const city = form.city.value;
        const region = form.region.value;
        const area = form.area.value;
        const rooms = form.rooms.value;
        const beds = form.beds.value;
        const bathroom = form.bathroom.value;
        const garage = form.garage.value;
        const floor = form.floor.value;
        const maxPeople = form.maxpepol.value;
        const description = form.description.value;
        const space = form.space.value
        const hostEmail = userDB.email;
        const images = form.images;
        if (images.files.length != 4) {
            setimgError('there must be four images')
            return;
        }
        setimgError('')
        const uploadHome = {
            title: title,
            price: price,
            city: city,
            region: region,
            area: area,
            rooms: rooms,
            beds: beds,
            bathroom: bathroom,
            garage: garage || 'not provided',
            floor: floor || 'not provided',
            maxPeople: maxPeople,
            description: description,
            space: space,
            hostEmail: hostEmail,

        }
        fetch("https://moonknight-backend.vercel.app/host/postHouse", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(uploadHome)
        })
            .then(res => res.json())
            .then(data => {
                toast(`Please wait uploading images`)
                if (data.insertedId) {
                    uploadImg(data.insertedId, images.files[0]).then(data => console.log(data)).catch(error => console.log(error))
                    uploadImg(data.insertedId, images.files[1]).then(data => console.log(data)).catch(error => console.log(error))
                    uploadImg(data.insertedId, images.files[2]).then(data => console.log(data)).catch(error => console.log(error))
                    uploadImg(data.insertedId, images.files[3]).then(data => toast(`done, data uploaded`, form.reset())).catch(error => console.log(error))

                }
            })
    }
    return (
        <div className="md:flex md:flex-col  md:justify-center  md:items-center my-5 ">
            <div className="bg-gray-100 rounded lg:w-4/6 p-2 md:p-6 flex flex-col items-center">

                <div className='pb-5'>
                    <h1 className=' font-semibold text-xl pb-2 lg:text-3xl  capitalize'> Add A New Rent House</h1>

                </div>
                <form onSubmit={submit} className="w-full">

                    <div className='md:flex md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3 '>
                            <label className='font-semibold text-xl'>Title</label>
                            <input type="text" required name='title' placeholder="Title" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Price</label>
                            <input type="number" required name='price' placeholder="Price" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px]  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>

                    <div className=' md:flex md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>City</label>
                            <input type="text" required name='city' placeholder="City" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full  md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Region</label>
                            <input type="text" required name='region' placeholder="Region" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px]  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>
                    <div className=' md:flex md:gap-6 justify-center'>

                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Area </label>
                            <input type="text" name='area' placeholder="Area" className="input input-bordered bg-slate-100 input-info w-full  md:w-[612px]  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>

                    <div className='lg:flex md:flex lg:gap-6 md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Total Rooms</label>
                            <input type="number" required name='rooms' placeholder="Rooms" className="input input-bordered bg-slate-100 input-info w-full md:w-[300px]  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Beds Room</label>
                            <input type="number" required name='beds' placeholder="Beds" className="input input-bordered bg-slate-100 input-info w-full  md:w-[300px] block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded 
                                
                                
                                
                py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>
                    <div className='lg:flex md:flex lg:gap-6 md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Bathroom</label>
                            <input type="number" required name='bathroom' placeholder="Bathroom" className="input input-bordered bg-slate-100 input-info w-full md:w-[300px]  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Garage</label>
                            <input type="text" name='garage' placeholder="Garage" className="input input-bordered bg-slate-100 input-info   block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>

                    <div className=' md:flex md:gap-6 justify-center'>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Which Floor ?</label>
                            <input type="number" name='floor' placeholder="Floor" className="input input-bordered bg-slate-100 input-info   block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                        <fieldset className='flex flex-col gap-3'>
                            <label className='font-semibold text-xl'>Max People</label>
                            <input type="number" name='maxpepol' placeholder="MaxPeople" className="input input-bordered bg-slate-100 input-info   block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                            <p className='text-sm text-red-500'></p>
                        </fieldset>
                    </div>

                    <fieldset className='flex flex-col gap-3 w-full md:w-[612px] mx-auto'>
                        <label className='font-semibold text-xl'>Space ( sqft )</label>
                        <input type="number" name='space' placeholder="ex 2000 sqft" className="input input-bordered bg-slate-100 input-info   block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                        <p className='text-sm text-red-500'></p>
                    </fieldset>
                    <fieldset className='flex flex-col gap-3 w-full md:w-[612px] mx-auto'>
                        <label className='font-semibold text-xl'>Description</label>
                        <textarea name='description' required className="textarea textarea-info input input-bordered bg-slate-100  w-full  h-32 block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded  py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" placeholder="Enter Description"></textarea>
                        <p className='text-sm text-red-500'></p>
                    </fieldset>

                    <fieldset className='flex flex-col gap-3 w-full md:w-[612px] mx-auto'>
                        <label htmlFor="city" className='font-semibold text-xl'>Add 4 images</label>
                        <input type="file" accept="image/*" required name='images' placeholder="Enter city name" multiple className="file-input w-full max-w-xs" />

                        <p className='text-sm text-red-500'>{imgError}</p>
                    </fieldset>
                    <div className="w-full flex justify-center">

                        <button type='submit' className="btn bg-indigo-600  text-white hover:btn glass" >Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default PostARent;