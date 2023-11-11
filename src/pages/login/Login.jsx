import { Link, useLocation, useNavigate } from "react-router-dom";
// import reader from "../../../src/login.json";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";
import usePageTitle from "../../hooks/PageTitleHook";


const Login = () => {

  usePageTitle('Too late | login');

  const { signInEmailusers, signJwt, setUserDB } = useContext(Authcontext);
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
          fetch(`https://moonknight-backend.vercel.app/user/getUser/${loggedUser}`).then(res => res.json()).then(data => setUserDB(data));
          toast.success("successfully login");
          form.reset();

          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.message);
        });
  };

  return (
    <div>
      <div className=" min-h-screen ">
        <div className=" lg:flex lg:justify-center lg:items-center">
          <div className="bg-white  my-10 rounded w-full md:w-[450px] mx-auto">
            <form onSubmit={handleSignIn} className="card-body">
              <h1 className="text-3xl font-bold text-center pb-10 capitalize"> Sign In to toolate</h1>
              <SocialLogin from={from}></SocialLogin>
              <p className="text-center my-1">or</p>
              <div className="form-control">

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input border-2 border-black input-bordered outline-none focus:outline-none focus:border-indigo-400 bg-white focus:bg-white"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input border-2 border-black input-bordered outline-none focus:outline-none focus:border-indigo-400 bg-white focus:bg-white"
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
              </div>
              <div className="form-control mt-4 flex justify-center items-center ">
                <button
                  className="btn bg-gray-800 border-2 border-black rounded-lg text-white font-semibold text-lg px-5 w-full hover:bg-white hover:text-black hover:border-black"

                >Login</button>
              </div>

              <p className="text-center">

                New here?{" "}
                <Link to="/register" className="text-blue-500 font-semibold">
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
