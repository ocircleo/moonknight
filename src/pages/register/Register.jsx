import { Link, useLocation, useNavigate } from "react-router-dom";
// import reader from '../../../src/login.json'
import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { createEmailusers, updateUser, signJwt, setUser } =
    useContext(Authcontext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)) {
      setError(
        "Password must be Minimum 6 characters long, at least one letter and one number"
      );
      return;
    }

    if ((name, email, password)) {
      const user = {
        name: name,
        email: email
      }
      createEmailusers(email, password)
        .then((result) => {
          signJwt(email);
          const createdUser = result.user;
          updateUser(name)
            .then(() => {
              setUser(createdUser);
              fetch(`http://localhost:3000/user/createUser`, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user)
              }).then(res => res.json()).then(data => console.log(data))
              form.reset();
            })
            .catch((error) => {
              toast.error(error.message);
            });
          toast.success("Successfully Registerd");
          // navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className=" lg:flex lg:justify-center lg:items-center">
          <div className="bg-white shadow-2xl rounded mx-auto w-full md:w-[550px] my-10">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl ">Create <span className="text-indigo-400">Account</span></h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered bg-slate-100 input-info block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none"
                  required
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="url"
                  className="input input-bordered bg-slate-100 input-info lg:w-[400px] block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none"
                  required
                />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered bg-slate-100 input-info block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered bg-slate-100 input-info  block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none"
                  required
                />
                <div
                  className="self-start flex items-center gap-2 my-2 ms-2 select-none cursor-pointer"
                  onClick={togglePassword}
                >
                  <input
                    type="checkbox"
                    name=""
                    checked={showPassword ? true : false}
                    id=""
                    className="h-4 w-4 "
                  />
                  <p className="pb-1">show password</p>
                </div>
                <p className="text-red-500 text-xs">{error}</p>
               
              </div>
              <div className="form-control mt-6 flex justify-center items-center">
                <button
                  className="btn btn-primary bg-indigo-500  border-indigo-400 rounded-lg text-white font-normal text-lg px-5 w-full"
                >Submit</button>
              </div>
              <p className="text-center">Continue with Google</p>
              <SocialLogin from={from}></SocialLogin>
              <p className="text-center">
                
                  Already Registerd ?  
                  <Link to="/login" className="text-primary">
                    {" "} Please Sign in
                  </Link>
               
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
