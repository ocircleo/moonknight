import { Link, useLocation, useNavigate } from "react-router-dom";
// import reader from '../../../src/login.json'
import { useContext, useState } from "react";
import { Authcontext } from "../../private/provider/Provider";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";
import usePageTitle from "../../hooks/PageTitleHook";


const Register = () => {

  usePageTitle('Too late | register');

  const { createEmailusers, updateUser, signJwt, setUser, setUserDB } =
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
    const confirmPassword = form.confirmPassword.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)) {
      setError(
        "Password must be Minimum 6 characters long and must have at least one number"
      );
      return;
    }
    if (password != confirmPassword) {
      setError('password and confirm password must match')
      return
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
              createdUser.displayName = name;
              setUser(createdUser)
              fetch(`https://moonknight-backend.vercel.app/user/createUser`, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user)
              }).then(res => res.json()).then(data => setUserDB(data))
              form.reset();
            })
            .catch((error) => {
              toast.error(error.message);
            });
          toast.success("Successfully Registerd");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  return (
    <div>
      <div className=" min-h-screen bg-white">
        <div className=" lg:flex lg:justify-center lg:items-center">
          <div className="bg-white rounded mx-auto w-full md:w-[450px] my-10">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl  capitalize text-center font-bold pb-10">Sign Up to toolate</h1>
              <SocialLogin from={from}></SocialLogin>
              <p className="text-center py-1">or</p>
              <div className="form-control">

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input border-2 border-black input-bordered outline-none focus:outline-none focus:border-indigo-400 bg-white focus:bg-white"
                  required
                />
              </div>
              <div className="form-control mt-2">

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className=" input border-2 border-black input-bordered outline-none focus:outline-none focus:border-indigo-400 bg-white focus:bg-white"
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
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="confirm Password"
                  className="mt-5 input border-2 border-black input-bordered outline-none focus:outline-none focus:border-indigo-400 bg-white focus:bg-white"
                  required
                />



              </div>
              <p className="text-red-500 text-sm capitalize">{error}</p>
              <div
                className="self-start flex items-center gap-2 my-2 ms-2 select-none cursor-pointer"
                onClick={togglePassword}
              >
                <input
                  type="checkbox"
                  name=""
                  checked={showPassword ? true : false}

                  className="h-4 w-4 "
                />
                <p className="pb-1">show password</p>
              </div>
              <div className="form-control mt-6 flex justify-center items-center">
                <button
                  className="btn bg-gray-800 border-2 border-black rounded-lg text-white font-semibold text-lg px-5 w-full hover:bg-white hover:text-black hover:border-black"
                >Create Account</button>
              </div>

              <p className="text-center">

                Already Registerd ?
                <Link to="/login" className="text-blue-500 font-semibold">
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
