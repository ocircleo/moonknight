import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../private/provider/Provider";


const Addclasses = () => {
    let { user } = useContext(Authcontext)
    const [btnDisble, setDisable] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [cartVisible, setVisible] = useState(false)
    const onsubmit = (data) => {
        setDisable(true)
        let classDetaill = {
            courseName: data.name,
            seats: Number(data.seats),
            price: Number(data.price),
            imgUrl: data.imgurl,
            isntractor: user.displayName,
            email: user.email
        }
        fetch('https://assignment-12-server-beta-tan.vercel.app/addclass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('fluent-verse')}`
            },
            body: JSON.stringify(classDetaill)
        }).then(res => res.json()).then(res => {
            if (res.insertedId) {
                setVisible(true)
                reset()
                setDisable(false)
            }
        })
    }
    const closeModal = () => {
        setVisible(false)
    }
    return (
        <>
            <h2 className="text-center text-2xl font-semibold mt-3 capitalize">Add new courses</h2>

            <form className="flex w-full flex-col gap-2 my-4 items-center max-w-lg mx-auto" onSubmit={handleSubmit(onsubmit)}>
                <input type="text" placeholder="Calss name" {...register('name', { required: 'true' })} className="input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="seats" {...register('seats', {
                    min: { value: 5, message: 'Least Number is 5' },
                    required: true, pattern: {
                        value: /^-?\d*\.?\d+$/,
                        message: 'The value must be number'
                    },
                })} className="input input-bordered w-full max-w-lg" />
                <p className="text-xs text-red-500 self-start">{errors.seats?.message}</p>
                <input type="text" placeholder="price" {...register('price', {
                    min: { value: 5, message: 'Least price is 5' }, required: true, pattern: {
                        value: /^-?\d*\.?\d+$/,
                        message: 'The value must be number'
                    }
                })} className="input input-bordered w-full max-w-lg" />
                <p className="text-xs text-red-500 self-start">{errors.price?.message}</p>
                <input type="text" placeholder="Img url" {...register('imgurl', { required: 'true' })} className="input input-bordered w-full max-w-lg" />
                <button className={`bg-red-500 w-full py-1 rounded cursor-pointer hover:bg-red-400 duration-300 font-semibold text-lg max-w-lg ${btnDisble ? 'btn-disabled' : ''}`} type="submit">submit</button>
            </form>

            <div className={`card card-compact w-96 absolute top-[50%] left-[50%]  mx-auto bg-base-100 shadow-xl ${cartVisible ? 'block' : 'hidden'} `} style={{ transform: 'translate(-50%,-50%);' }}>
                <div className="card-body">
                    <h2 className="card-title capitalize items-center">New course added</h2>
                    <div className="card-actions justify-end">
                        <button className={` btn btn-primary`} onClick={closeModal}>close</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Addclasses;