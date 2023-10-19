import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import reader from "../../../public/login.json";
import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";

const Register = () => {
    const {createEmailusers, updateUser} = useContext(Authcontext);
    const [error, setError] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo)
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
            setError('Minimum eight characters, at least one uppercase letter, one lowercase letter and one number')
            return;
        }

        if ((name, email, password, photo)) {

            createEmailusers(email, password)
                .then(result => {
                    const createdUser = result.user;
                    updateUser(name, photo).then(() => {
                        form.reset();
                    })
                    .catch(error => { toast.error(error.message); });
                    toast.success('Successfully Registerd')
                    navigate(from, { replace: true })


                })
                .catch(error => {
                    toast.error(error.message)
                })
        }


    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-2/4">
                    <Lottie animationData={reader} loop={true} />
                </div>
                <div className="card md:w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl ">Sign In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="url" className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded-full" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary rounded-full text-white font-normal text-lg px-5" type="submit" value="Sign Up" />
                            <p className='text-red-500'>{error}</p>
                        </div>
                        <p className='text-center'><small>Already Registerd? <Link to='/login' className='text-primary' >Please Sign in</Link></small> </p>

                        <div className='text-center'>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;