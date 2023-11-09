import { useState } from "react";
import { useContext } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";


const EditProfile = () => {
    const { userDB, refresh } = useContext(Authcontext);
    const [selectedImage, setSelectedImage] = useState(userDB.imageUrl);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }


    const handleSubmit = e => {
        e.preventDefault();
        let name, phone, city, region, additional, age;
        const form = e.target;
        name = form.name.value;
        phone = form.number.value;
        age = form.age.value;
        city = form.city.value;
        region = form.region.value;
        additional = form.location.value;
        const userData = {
            id: userDB._id,
            name: name,
            phone: phone,
            age: age,
            city: city,
            region: region,
            additional: additional,
        }
        fetch('https://moonknight-backend.vercel.app/user/updateUser', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userData)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                toast('data uploaded');
                refresh()
            }
        })

    }
    const handleSubmitImage = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image
        const imageForm = new FormData();
        imageForm.append('id', userDB._id);
        if (image.files[0]) {
            imageForm.append('profile', image.files[0]);
            fetch('https://moonknight-backend.vercel.app/user/updateImage', {
                method: 'PUT',
                body: imageForm
            }).then(res => res.json()).then(data => {
                if (data.modifiedCount == 1) {
                    toast('image uploaded')
                    form.reset()
                    refresh()
                }
            })
        } else {
            toast('image not selected')
        }
    }
    return (
        <div className="md:flex md:flex-col md:justify-center  md:items-center my-5  p-4 ">
            <div className=" rounded lg:w-4/6 p-2 md:p-6 bg-gray-100">

                <div className='pb-5 p-2 text-center'>
                    <h1 className=' font-semibold text-xl pb-1 lg:text-3xl  capitalize'>Edit your Information  </h1>

                </div>

                <form onSubmit={handleSubmit} className="flex justify-center items-center ">
                    <div className='flex flex-col gap-3 p-6 ' >
                        <div className=' md:flex md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>

                                <label htmlFor="city" className='font-semibold text-xl'>Name</label>
                                <input type="text" name='name' id='name' required defaultValue={userDB?.name} placeholder="Enter Your Name" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full lg:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Number</label>
                                <input type="Number" required name='number' id='number' defaultValue={userDB?.phone} placeholder="Enter Your Number" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>

                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Age</label>
                                <input type="number" required defaultValue={userDB.Age || 0} name="age" id="age" placeholder="Enter Your Age" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>City</label>
                                <input type="text" required defaultValue={userDB.city} name="city" id="city" placeholder="Enter City" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>
                        <div className='lg:flex md:flex lg:gap-6 md:gap-6'>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Thana/Upzila</label>
                                <input type="text" required defaultValue={userDB.region} name="region" id="thana" placeholder="Enter Thana/Upzila" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                            <fieldset className='flex flex-col gap-3'>
                                <label htmlFor="city" className='font-semibold text-xl'>Aditional Location</label>
                                <input type="text" required defaultValue={userDB.additional} name="location" id="location" placeholder="Enter Aditional Location" className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full md:w-[300px] py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none" />
                                <p className='text-sm text-red-500'></p>
                            </fieldset>
                        </div>


                        <div className='lg:pt-6 text-center md:text-left ' type='submit'>



                            <button type="submit" className="bg-indigo-400 px-6 py-2 rounded font-semibold text-white capitalize">submit</button>


                        </div>
                    </div>

                </form>
                <form onSubmit={handleSubmitImage} className="gap-6 flex justify-center items-center flex-col">

                    <p className="text-3xl py-2 capitalize">upload profile image</p>
                    <div className='lg:flex lg:gap-16'>
                        <div className=''>
                            <img className='md:h-20 md:w-20 h-32 w-32 mx-auto rounded-xl object-cover' src={selectedImage} alt="" />
                            <p className=" text-center text-sm pt-2">You may change profile pic but <br /> not nececery</p>
                        </div>
                        <fieldset className='flex flex-col gap-3'>
                            <label htmlFor="city" className='font-semibold text-xl'>Add new Profile Image</label>
                            <input type="file" name="image" accept="image/*" onChange={handleImageChange} placeholder="Enter city name" multiple className="file-input w-full max-w-xs" />

                        </fieldset>


                    </div>
                    <div className='lg:pt-6 text-center md:text-left ' type='submit'>



                        <button type="submit" className="bg-indigo-400 px-6 py-2 rounded font-semibold text-white capitalize">Upload</button>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;