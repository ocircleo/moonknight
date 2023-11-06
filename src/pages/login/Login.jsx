import { Link, useLocation, useNavigate } from "react-router-dom";
// import reader from "../../../src/login.json";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";

const Login = () => {
  const { signInEmailusers, signJwt } = useContext(Authcontext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email, password))
      signInEmailusers(email, password)
        .then((result) => {
          const loggedUser = result.user.email;
          signJwt(loggedUser);
          fetch(`http://localhost:3000/user/getUser/${loggedUser}`).then(res => res.json()).then(data => console.log(data))
          toast.success("successfully login");
          form.reset();

          // navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.message);
        });
  };

  return (
    <div>
      <div className=" min-h-screen bg-base-200 ">
        <div className=" lg:flex lg:justify-center lg:items-center">
          <div className="bg-white shadow-2xl my-10 rounded w-full md:w-[550px] mx-auto">
            <form onSubmit={handleSignIn} className="card-body">
              <h1 className="text-3xl font-semibold">Log<span className="text-indigo-400">In</span></h1>
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
                  className="input input-bordered bg-slate-100 input-info block pr-10 shadow appearance-none border-b-2 border-white border-b-indigo-400  rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-indigo-900 transition duration-500 ease-in-out outline-none"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 flex justify-center items-center ">
                <button
                  className="btn btn-primary bg-indigo-500 border-indigo-400 rounded-lg text-white font-normal text-lg px-5 w-full"

                >Submit</button>
          </div>
       
        <p className="text-center">Continue with Google</p>
        <SocialLogin from={from}></SocialLogin>
        <p className="text-center">
      
            New here?{" "}
            <Link to="/register" className="text-primary">
              Create a new account
            </Link>
          
        </p>

      </form>
    </div>
    </div >
      </div >
    </div >
  );
};

export default Login;
